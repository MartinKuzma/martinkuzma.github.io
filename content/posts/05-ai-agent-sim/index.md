+++
date = '2025-12-24T22:09:06+02:00'
draft = true
title = 'AI Reasoning With Agent Simulation'
+++

**TL;DR**: Building a framework for LLMs to create and run agent based simulations to reason about complex systems and emergent behaviour.

I always wanted to dig deeper into **agent based simulations**. Namely to understand how complex behaviours can emerge and to model economic and social systems. Building such simulations is hard so I never got around to it. In my imagination, I always pictured that I can just tell an AI to simulate something for me just like **Tony Stark** did. Wait a minute! We have capable LLMs now! And they can write code and use tools!

What if the agents are written by LLMs so that they can run and design simulations by themselves? This would enable LLMs to reason about complex systems by simulating them with multiple agents interacting with each other. Wanna let your favorite LLM to figure out which strategy is the best to solve a problem? Let it come up with the model and observe emergent behaviour!

## Rough Architecture
I need to build a tool framework usable by LLMs so that they can easily create agents, environments, and run simulations.

What I have in mind is something like this:
- MCP server to run the simulations
- Simulation runtime (Rust) that can start/stop simulations, manage agents and environments
- Scripting language to write agents and environments
- Observability of the simulation state so that LLMs can reason about it
- Descrete simulation steps so that LLMs can control the pace of the simulation
- Entities are decoupled by messages. Messages should be compatible with other scripting languages in the future.

For simulation itself I was planning to use a simple system in which agents can send each other messages and interact with the environment. However, I couldn't bear the thought of doing something so basic, so I decided to complicate my life by adding ECS (Entity Component System) architecture to the mix. 

I didn't want to use any existing ECS libraries - I wanna learn! As it turns out, making an performant ECS system in Rust is quite painful. I wasn't satisfied but it was somewhat working, however I realized that I was trying to solve a different problem. ECS is great for games where you can leverage data locality, but in my case I only need to manage scripts and expose some API to them. Back to square one.

TODO: Add architecture diagram

## Scripting Language
To enable LLMs to write agents and environments, I need a scripting language that is easy to use and understand. I wanted to use isolated enviroments so that agents can run independently without interfering with each other. The usual suspects for this are:
- Python
- JavaScript
- Lua

Tough choice. So I asked an anonymous LLM which one it would prefer. The answer was Lua, for its simplicity and performance. So Lua it is!

## Main simulation loop
I kept it simple and straightforward. Each tick represents a simulation step. Each step, any deliverable messages (meaning messages that were scheduled for delivery at the current simulation time) are delivered. I used command pattern to represent actions retrieved from agents. That way entities are not performing any mutations directly, but rather by issuing commands.

The loop (at the moment of writing) looks something like this:

```rust
pub fn update(&mut self, delta: u64) -> Result<WorldUpdateResult, String> {
    // Create result container. 
    // It will hold information about the update process like delivered messages etc.
    let mut update_result = WorldUpdateResult::new();

    // Update simulation time
    self.update_simulation_time(self.simulation_time + delta);
    // Deliver scheduled messages
    self.deliver_messages(&mut update_result);

    let mut commands = Vec::new();

    // Update all entities
    for entity in self.get_state_ref().entities.values() {
        let entity_commands = entity.borrow_mut().update(self.simulation_time)?;
        // Collect commands from all entities
        commands.extend(entity_commands);
    }

    // Process all collected commands
    self.process_commands(commands);

    Ok(update_result)
}
```
Nothing too fancy. No parallelism yet.

## MCP Server


### Tools

### Instructions

## It's simulation time!
With MCP server and simulation runtime ready, it's time to let LLMs reason!

Example1: simple model
Example2: something crazy, like AGI post-singularity economy
Example3: something AI wants to model