+++
date = '2025-12-14T13:00:00+02:00'
draft = false
title = 'Pixel avatar Part 2: Displaying points in 3D'
series = ['Pixel Avatar']
categories = [ "pixel avatar"]
+++

In the previous part, I extracted depth data from a HEIC file taken with an iPhone 15. Now I need to figure out how to display it as a pixelated 3D avatar on my blog. 

Spoiler: I did and you can see the [live demo](#live-demo) at the bottom of this post.

## Options for Displaying Points

What I want to achieve:
- Display 100-2000 points
- Animate the points to create a dynamic effect
- Each point should have a color sampled from the original image
- Have a jittering motion to give a lively appearance
- Be capable of transitioning between different models smoothly

There are several approaches I could take to display points:
| Approach               | Pros                                         | Cons                                         |
|------------------------|----------------------------------------------|----------------------------------------------|
| WebGL                  | High performance, fun | I don't have the time |
| Three.js               | High performance, easier to use, tweening and other features                 | Large dependency, less fun          |
| CSS 3D transforms  | No dependencies    | Performance could be an issue      |
| Pre-rendered animation | No dependencies, easy, can display anything | No interactivity, boring as hell, why even bother? |

Well, looks like Three.js is the best option here. At least this post won't end up being about reinventing matrix multiplications.

## Displaying Points with Three.js

The library provides a lot of examples and features. I was considering using vertices to display points, but I found that the library comes with a built-in type called `Sprite`, which is perfect for displaying pixelated points. On top of that, sprites are always facing the camera, which is even better.

```typescript
// Since this is not a THREE.js tutorial, I'll skip the setup part.
camera.position.z = 3;

for (let i = 0; i < 25; i++) {
    const spriteMaterial = new THREE.SpriteMaterial({ color: '#FFFFFF' });
    const sprite = new THREE.Sprite(spriteMaterial);

    sprite.scale.set(0.05, 0.05, 0.05);
    sprite.position.set(
        Math.random() * 2.0 - 1.0, // x
        Math.random() * 2.0 - 1.0, // y
        Math.random() * 2.0 - 1.0, // z - this will be set using depth data later
    );

    scene.add(sprite);
}

let animate = function () {
    renderer.render(scene, camera);
};

renderer.setAnimationLoop(animate);
```
Which renders something like this:

![Three.js Random Sprites](sprites.png "Three.js Random Sprites")

Now I need to serialize the depth and color data from the photo, export it as JSON, and load it in the Three.js application.

## Sampling points
There are two approaches I was considering for sampling points from a photo:
- Fixed grid: sample points at regular intervals
- Random sampling: randomly sample points and then prune

I chose random sampling because it gives a more interesting look. Another benefit is that I can easily lower the number of points by taking only a slice of the sampled points without worrying about losing overall shape.

```python
def sample_random_values(depth_array, num_samples, min_val=0, max_val=255):
    all_samples = np.array([]).reshape(0,3)
    attempts = 0
    
    # Keep sampling until we have enough points or reach max attempts
    while len(all_samples) < num_samples and attempts < 10:
        attempts += 1
        # Sample random pixel coordinates
        x_samples = np.random.uniform(low=0, high=depth_array.shape[1], size=num_samples)
        y_samples = np.random.uniform(low=0, high=depth_array.shape[0], size=num_samples)

        # Get depth values at sampled coordinates
        z_samples = depth_array[y_samples.astype(int), x_samples.astype(int)]
        # Combine into (x, y, z) array
        sampled_values = np.vstack((x_samples, y_samples, z_samples)).T
        # Filter samples based on depth range
        sampled_values = sampled_values[ (sampled_values[:,2] >= min_val) & (sampled_values[:,2] <= max_val) ]
        # Append to all samples
        all_samples = np.append(all_samples, sampled_values, axis=0)

        # Ensure samples are not too close to existing samples
        for point in sampled_values:
            # Compute euclidean distances to existing samples
            dists = np.sqrt( np.sum( (all_samples - point)**2, axis=1) )
            # Find points that are too close
            close_points = np.where( (dists < 2.0) & (dists > 0.0) )[0]
            if len(close_points) == 0:
                all_samples = np.append(all_samples, [point], axis=0)
        
    # Return only the requested number of samples
    return all_samples[:num_samples]
```

![Reducing Points](sampling_lod.gif "Reducing Points by factor of 2")

## Normalizing and Centering Points
To ensure that models fit well and have roughly the same size, I need to normalize and center the points. 
Normalization is done based on image dimensions for the X and Y axes, and based on depth values for the Z axis. 
Centering is done by subtracting the average position from each point. The average position is simply the average of all X and Y coordinates and represents sort of the "center of mass" of the model.

```python
def normalize_sampled_points(sampled_points, img_width, img_height):
    # Normalize points to -0.5 to 0.5 range using image dimensions
    sampled_points[:, 0] = (sampled_points[:, 0] / img_width) - 0.5
    sampled_points[:, 1] = (sampled_points[:, 1] / img_height) - 0.5
    
    # Normalize Z axis to -0.5 to 0.5 range
    min_z = np.min(sampled_points[:, 2])
    max_z = np.max(sampled_points[:, 2])
    move_z = ((max_z + min_z) / 2.0) / max_z
    
    sampled_points[:, 2] = ((sampled_points[:, 2]) / max_z) - move_z
    
    # Center points around origin by subtracting average position
    avg_x = np.average(sampled_points[:,0])
    avg_y = np.average(sampled_points[:,1])
    sampled_points[:,0] = sampled_points[:,0] - avg_x
    sampled_points[:,1] = sampled_points[:,1] - avg_y
        
    # Invert axis for correct orientation
    sampled_points[:, 1] *= -1.0
    
    return sampled_points
```

## Displaying Exported Data
Since I want to keep things simple, I won't use any complex formats for storing 3D models. A simple JSON file is more than enough. I don't want to deal with additional dependencies. Some tweaking was needed to get the right scale and orientation.
```json
[
    {
        
        "p" : [0.1, 0.2, 0.3],
        "c": "#FF00FF"
    },
]
```

Iterating over the points and creating sprites for each of them with specific color is straightforward. I tried it with the photo from the previous post, and here is the result:

![Hand made of sprites](hand.png "Hand made of sprites")

The exported points, however, needed some tweaking. Namely, I had to normalize all axes to fit within a certain range. I also computed the average position to center the model properly.

## You Rotate Me Right Round
Let's add some camera rotation to make it more dynamic. Since sprites in Three.js won't be affected by rotation around the Y axis, I need to rotate the camera's position manually. For that, I can use simple trigonometry:
```typescript
let animate = function () {
    const radius = 2.0; // Distance from the center
    const rotationSpeed = 0.01; // Speed of rotation

    // CameraRotation is increased over time, it represents the angle in radians
    // DeltaTime is the time elapsed since the last frame, but you already knew that.
    cameraRotation = cameraRotation + (rotationSpeed*deltaTime);

    camera.position.x = radius * Math.sin(cameraRotation);
    camera.position.z = radius * Math.cos(cameraRotation);
    // Always look at the center
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
};
```

![Rotating Hand](hand_rotating.gif "Rotating Hand")

## Tween baby, Tween!
I want to have smooth transitions between different models. Usually, I would try to simulate movement by updating positions in the animation loop. However, for more complex animations with predictable timing and easing functions, it is better to just use a tweening library. I chose [tween.js](https://github.com/tweenjs/tween.js).
I mainly focused on the transitioning and jittering motion of some points. Jittering is achieved by randomly offsetting the position of randomly selected points.

Transitioning is quite straightforward too:
```typescript
// This code is inside of a method for transitioning between models.
// All points were created beforehand and stored in 'this.sprites'. 
// When transitioning, we tween each sprite to its new position and color.
for (let i = 0; i < this.sprites.length; i++ ) {
    const point = points[i]; // New target point from the next model
    const sprite = this.sprites[i];
    
    // Tween the new position
    let appearTween = new TWEEN.Tween( sprite.position)
        .to( {y: point.y, x: point.x, z: point.z}, 2000 ) // 2 seconds
        .easing( TWEEN.Easing.Circular.Out )
        .delay( Math.random()*2000) // Add random delay 0-2000ms
        .yoyo( false )
        .onComplete( () => {
            this.tweenGroup.remove(appearTween);
            // This is where we could add jittering after the transition
        })
        .start();


    // Tween to the new color
    const targetSpriteMaterial = new SpriteMaterial( { color: point.color } );
            
    let colorTween = new TWEEN.Tween( sprite.material.color )
    .to( targetSpriteMaterial.color, 2000 )
    .easing(TWEEN.Easing.Quadratic.InOut)
    .delay(1000) // Add random delay 0-1000ms
    .yoyo(false)
    .start();
    
    // Add tweens to the group for updating
    this.tweenGroup.add(appearTween);            
    this.tweenGroup.add(colorTween);
}
```

## Live Demo
<div id="avatar-container" style="width: 100%; height: 500px; background-color: #1a1a1a; border-radius: 8px;"></div>
<script>
document.addEventListener('DOMContentLoaded', function() {
    window['3DAvatar'].showModels([
            "3.json", 
            "4.json",
        ],
        {
            nextModelIntervalSeconds: 8,
            cameraDistance: 1.0,
            chanceOfFloatingPoint: 0.2,
        }
    )    
});
</script>

## What could be improved?
- Performance: While this solution works well for a few thousand points, ambitious use-cases would benefit from particle systems or shaders.
- Better sampling: Random uniform sampling with depth-check works well, but might produce clusters of points. Poisson disc sampling should yield better results.
- Library size: Three.js and tween.js are quite large libraries. The whole avatar library is around 502 KB minified.
- Size of JSON files: A binary format could reduce the size of model files significantly.

## Conclusion
I was able to create the desired pixelated 3D avatar using depth data extracted from an iPhone selfie. The process involved sampling points, exporting them as JSON, and displaying them using Three.js. 

You can check out the full source code or even create your own avatar on [GitHub](https://github.com/MartinKuzma/3D-web-avatar)
