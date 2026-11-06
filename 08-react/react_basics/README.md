# React Basics: Class Notes

Class notes for teaching the first steps of React, built around **component-based design** and **Atomic Design**. Every topic is taught with a small project that grows **incrementally**: first a design, then a static version, then state, then effects.

All the material is in English.

## Contents

| # | Notes | What you will learn | Project |
|---|---|---|---|
| 1 | [Thinking in Components](./01-react-components-and-atomic-design.md) | What React is, component-based design, Atomic Design, JSX, props, `children`, `key`, `useState`, controlled components, lifting state up | A to-do list |
| 2 | [`useEffect` and the Component Lifecycle](./02-react-useeffect-and-lifecycle.md) | Mount / update / unmount, render vs. effects, side effects, dependency array, cleanup, race conditions, custom hooks | Persistent to-do list and a users directory that fetches data from an API |

**Suggested order:** read them in numeric order. Part 2 continues the to-do app from Part 1 and reuses its components (`Button`, design tokens in `index.css`...).

## Repository structure

```
.
├── README.md
├── 01-react-components-and-atomic-design.md
├── 02-react-useeffect-and-lifecycle.md
└── images/
    ├── todo-app-prototype.svg
    ├── todo-app-components.svg
    ├── users-directory-prototype.svg
    └── users-directory-components.svg
```

> Keep the `images/` folder next to the `.md` files: the notes link to the images with relative paths.

## Images

The prototypes used in the notes are SVG files, so they stay sharp at any size. For each project there is a clean prototype and the same prototype broken down into components. Colors show the Atomic Design level.

| Project | Prototype | Broken down into components |
|---|---|---|
| To-do list (Part 1) | [todo-app-prototype.svg](./images/todo-app-prototype.svg) | [todo-app-components.svg](./images/todo-app-components.svg) |
| Users directory (Part 2) | [users-directory-prototype.svg](./images/users-directory-prototype.svg) | [users-directory-components.svg](./images/users-directory-components.svg) |

## How the notes are organized

Each part follows the same workflow, and it is worth repeating it out loud in class:

1. **Sketch** the interface and **break it down** into components.
2. Classify them: atoms → molecules → organisms → templates → pages.
3. Build the **static version** first (props only).
4. Add **state**, deciding who owns each piece of it.
5. Add **effects** only for things outside React (network, storage, timers).
6. **Refactor**: extract repeated logic into custom hooks.

At the end of every part you will find exercises and a summary table.

## Prerequisites

- Basic HTML, CSS and modern JavaScript (arrow functions, destructuring, `map` / `filter`, the spread operator, promises or `async` / `await`).
- [Node.js](https://nodejs.org) installed. The projects are created with [Vite](https://vite.dev): `npm create vite@latest my-app -- --template react`.
- A code editor and a browser with developer tools (the console is used often).

## Conventions used in the code

- One component per file, with its own `.css` file next to it.
- Folders follow Atomic Design: `atoms/`, `molecules/`, `organisms/`, `templates/`, `pages/`. Custom hooks live in `hooks/`.
- CSS classes follow a BEM-like naming (`block__element--modifier`).
- Atoms style only themselves; molecules and organisms decide the layout of their children.

## Roadmap

Ideas for the next parts of the course:

- `useRef` and uncontrolled inputs
- `useMemo` and `useCallback`: when optimizing makes sense
- Context API: sharing state without passing props through every level
- React Router: multiple pages
- Testing components

## Useful links

- Official documentation: <https://react.dev>
- Thinking in React: <https://react.dev/learn/thinking-in-react>
- Atomic Design, by Brad Frost: <https://atomicdesign.bradfrost.com>
