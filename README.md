# Algorithm Visualizer

An interactive algorithm visualizer built with **Next.js** and **React**, designed to make algorithms feel less abstract and more intuitive.  
Instead of staring at dry pseudocode, this project shows step-by-step animations that reveal how algorithms actually work internally.

This is **v2** of the project.

The focus right now is on building a solid, reusable visualization and animation architecture. New algorithms will be added **incrementally** to the repository.

---

## Current Version (v2)

### Implemented Algorithms
- **Merge Sort**
- **Bubble Sort**
- **Insertion Sort**
- **Selection Sort**

Each algorithm:
- Generates its own step sequence
- Plays through a shared animation engine
- Uses color-coded actions to indicate comparisons, swaps, overwrites, and completion

More algorithms will be added progressively.

---

## Demo

> 🚧 Live soon

![V1 demo](./public/Visualizer_v1.gif)
Present Algorithms: Merge Sort, and Bubble Sort.

![V2 demo](./public/Visualizer_v2.gif)
New Added: Insertion Sort, and Selection Sort.


<i>Speed in above demo is ~2 times faster so as to shorten the demo.</i>
---

## Features

- Sidebar with categorized algorithm list
- Dynamic visualization area that loads the selected algorithm
- General control panel:
  - Speed control
  - Generate new input
  - Replay functionality
- Algorithm-specific controls that appear dynamically
- Step-based animation system:
  - Compare
  - Swap
  - Overwrite
  - Done
- Color legend to explain actions during visualization
- Clean, minimal, dark-themed UI

---

## Architecture Overview

- Algorithms are **logic-only** (no UI code)
- Each algorithm outputs a standardized list of actions (`steps`)
- A shared animator consumes these steps to drive animations
- Visualization components are reusable and algorithm-agnostic

This keeps the codebase scalable and makes adding new algorithms straightforward.

---

## Tech Stack

- **Next.js**
- **React**
- **TypeScript**
- **Material UI**
- **CSS**

---


## Status

Actively under development.  
This project will evolve incrementally with new algorithms and features added over time.
