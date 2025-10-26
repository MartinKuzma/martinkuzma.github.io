+++
date = '2025-10-24T22:09:06+02:00'
draft = true
title = 'Pixel avatar Part 2: '
series = ['Pixel Avatar']
categories = [ "pixel avatar"]
+++

In the previous part, I extracted depth data from a HEIC file taken with an iPhone 15. Now I need to figure out how to display it as a pixelated 3D avatar on my blog.

## Options for Displaying Points

What I want to achieve:
- Display 100-2000 points
- Animate the points to create a dynamic effect
- Each point should have a color sampled from the original image
- Have an jittering motion to give a lively appearance
- Be capable of transitioning between different models smoothly

There are several approaches I could take to display points:
| Approach               | Pros                                         | Cons                                         |
|------------------------|----------------------------------------------|----------------------------------------------|
| WebGL                  | High performance, fun | I don't have the time |
| Three.js               | High performance, easier to use, tweening and other features                 | Large dependency, less fun          |
| CSS 3D transforms  | No dependencies    | Performance could be an issue      |
| Pre-rendered animation | No dependencies, easy, can display anything | No interactivity, boring as hell, why even bother? |

Well, looks like Three.js is the best option here. At least this post won't end up being about reiventing matrix multiplications.

## Setting up the Project

