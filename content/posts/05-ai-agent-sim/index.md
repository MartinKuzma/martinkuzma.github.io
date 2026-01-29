+++
date = '2025-12-24T22:09:06+02:00'
draft = true
title = 'Agent Simulation Framework for LLMs'
+++

_This article was not written by an AI. I only use LLMs to help me with grammar and spelling._

**TL;DR**: I built a simple scriptable framework for LLMs to create and run agent based simulations to reason about complex systems and emergent behaviour. Skip to [It's simulation time!](#its-simulation-time) to see examples of LLMs using the framework.

I always wanted to dig deeper into **agent based simulations**. Namely to understand how complex behaviours can emerge and to model economic and social systems. Building such simulations is hard so I never got around to it. In my imagination, I always pictured that I can just tell an AI to simulate something for me just like **Tony Stark** did. Wait a minute! We have capable LLMs now! And they can write code and use tools!

What if the agents are written by LLMs so that they can run and design simulations by themselves? **This would enable LLMs to reason about complex systems by simulating them and observing emerging behaviour.** Wanna let your favorite LLM to figure out which strategy is the best to solve a problem? Let it come up with the model and experiment with it!

## Rough Architecture
I need to build a tool framework usable by LLMs so that they can easily create agents, environments, and run simulations.

What I have in mind is something like this:
- MCP server to run the simulations
- Simulation runtime (Rust) that can start/stop simulations, manage agents and environments
- Scripting language to write agents and environments
- Observability of the simulation state so that LLMs can reason about it
- Discrete simulation steps so that LLMs can control the pace of the simulation
- Entities are decoupled by messages. Messages should be compatible with other scripting languages in the future.

For simulation itself I was planning to use a simple system in which agents can send each other messages and interact with the environment. However, I couldn't bear the thought of doing something so basic, so I decided to complicate my life by adding ECS (Entity Component System) architecture to the mix. 

I didn't want to use any existing ECS libraries - I wanna learn! As it turns out, making an performant ECS system in Rust is quite painful. I wasn't satisfied but it was somewhat working, however I realized that I was trying to solve a different problem. ECS is great for games where you can leverage data locality, but in my case I only need to manage scripts and expose some API to them. Back to square one.

I ended up making a simple entity system where each entity has a script controller that runs the script. Entities can send messages to each other via message bus and issue commands to mutate the world state.
![Simple architecture](mcp_world_system.png "Architecture image")

| Component       | Description                                                  |
|-----------------|--------------------------------------------------------------|
| MCP Server      | Exposes tools for LLM to use |
| Registry        | Manages multiple simulation instances                        |
| World           | Represents a single simulation instance                      |
| Entity          | Represents an agent or environment in the simulation         |
| Message Bus     | Schedules and delivers messages between entities             |
| Script Controller| Runs script representing behavior                           |
| Metrics       | Collects and exposes simulation metrics                       |


## Scripting Language
To enable LLMs to write agents and environments, I need a scripting language that is easy to use and understand. I wanted to use isolated enviroments so that agents can run independently without interfering with each other. The usual suspects for this are:
- Python
- JavaScript
- Lua

Tough choice. So I asked an anonymous LLM which one it would prefer. The answer was Lua, for its simplicity and performance. So Lua it is!

## Main simulation loop
I kept it simple and straightforward. Each tick represents a simulation step. Each step, any deliverable messages (meaning messages that were scheduled for delivery at the current simulation time) are delivered. I used command pattern to represent actions retrieved from agents. That way entities are not performing any mutations directly, but rather by issuing commands.

The loop (at the moment of writing) looks something like this:
```
1. Update simulation time
2. Deliver scheduled messages for the current time
3. For each entity:
   - Call update method with current simulation time
   - Collect commands issued by the entity
4. Process all collected commands
```
Nothing too fancy. No parallelism yet.

## Enabling multiple scripting languages
To make the scripting language swappable, I had to define messages and states in a language agnostic way. I decided to use JSON for that. 

## MCP Server
For those who don't know, MCP (Model Context Protocol) is a protocol for LLMs to interact with external tools.

### Tools
I defined the following tools:
| Tool Name | Description |
|---|---|
| create_world | Create a new simulation world with the specified configuration. |
| delete_world | Delete an existing simulation world by name. |
| copy_world | Copy an existing simulation world to a new world with the specified name. |
| list_worlds | List all existing simulation worlds. |
| list_entities | List all entities currently in the simulation. |
| advance_simulation | Advance the simulation by running multiple time steps. |
| list_metrics | List the names of all available metrics in the simulation world. |
| get_metric | Get the current values of a specific metric by name. |
| get_metrics | Get the current values of multiple metrics by their names. |
| set_entity_state | Set the state of a specific entity. The state must be a JSON object compatible with the entity's script. |
| get_entity_state | Get the current state of a specific entity. |

### Instructions

## It's simulation time!
With MCP server and simulation runtime ready, it's time to let LLMs reason!

Example1: simple model
Example2: something crazy, like AGI post-singularity economy
Example3: something AI wants to model

## Where to go from here?
I asked an LLM what it thinks is missing for it to be able to reason better with simulations. It came up with the following ideas:
- Better observability
- Snaphots and rollbacks (interesting!)
- Loading simulations from files
- Resources (representing various consumables in the simulation)
- Spatial environments (2D/3D grids)
