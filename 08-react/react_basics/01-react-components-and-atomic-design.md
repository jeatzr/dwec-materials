# React Basics, Part 1: Thinking in Components

> Class notes for a first session. Goal: understand **how to think** about a user interface in React and build a small app **incrementally**, without losing sight of component-based design.

## Table of contents

1. [What is React](#1-what-is-react)
2. [Component-based design](#2-component-based-design)
3. [Atomic Design](#3-atomic-design)
4. [Setting up the project](#4-setting-up-the-project)
5. [Mini project: a to-do list](#5-mini-project-a-to-do-list)
6. [Final structure and CSS](#6-final-structure-and-css)
7. [Suggested exercises](#7-suggested-exercises)
8. [Summary](#8-summary)

---

## 1. What is React

React is a **JavaScript library for building user interfaces**. Three key ideas:

- **Declarative**: you describe *what the UI should look like for a given state*, not the steps to modify the DOM.
- **Component-based**: the interface is split into small, reusable pieces, each with its own logic.
- **UI is a function of state**: `UI = f(state)`. When the state changes, React re-renders whatever is needed.

```jsx
// A component is a function that returns JSX
function Greeting() {
  return <h1>Hello, React</h1>
}
```

**JSX** is a syntax that looks like HTML but is really JavaScript. Basic rules:

- A component returns **a single root element** (or a fragment `<>...</>`).
- Attributes use camelCase: `className`, `onClick`, `htmlFor`.
- JavaScript expressions go inside braces: `{name}`, `{2 + 2}`.
- Component names **start with a capital letter** (`<Button />`); HTML tags are lowercase (`<button>`).

---

## 2. Component-based design

### Core idea

Instead of thinking in "pages", we think in **pieces** that combine, like Lego bricks. Each component:

- Has **one clear responsibility**.
- Receives data through **props** (inputs).
- May have its own **state** (memory).
- Is **composed** with other components.

### Principles we will follow

| Principle | Meaning |
|---|---|
| **Single responsibility** | A component does one thing. If you need the word "and" to describe it, it is probably two components. |
| **Composition over inheritance** | Big components are built by *combining* small ones. |
| **Data down, events up** | The parent passes data through props; the child reports what happened by calling functions it received through props. |
| **State lives in the closest common ancestor** | If two components need the same data, the state moves up to their shared parent ("lifting state up"). |
| **Presentational vs. stateful components** | The more "dumb" components (they only render based on props), the more reusable the code. |

### How to break down an interface (method)

1. **Sketch** the interface (paper or Figma).
2. **Draw boxes** around each visual piece and name it.
3. **Arrange them in a hierarchy** (what contains what).
4. **Build a static version** (props only, no state).
5. **Identify the minimal state** and decide who owns it.
6. **Add the inverse data flow** (events that update the state).

---

## 3. Atomic Design

A methodology by Brad Frost that organizes interfaces into five levels, inspired by chemistry.

| Level | What it is | Examples |
|---|---|---|
| **Atoms** | The smallest elements; they cannot be split without losing meaning. They know nothing about the app's logic. | `Button`, `Input`, `Checkbox`, `Label`, `Icon` |
| **Molecules** | Small groups of atoms working together. | Search form (`Input` + `Button`), `TodoItem` |
| **Organisms** | Complete, relatively autonomous sections made of molecules and/or atoms. | `Header`, `TodoList`, `ProductGrid` |
| **Templates** | Page structure (layout) with "slots"; no real data. | `TodoTemplate` |
| **Pages** | Template + real data + state. This is where the application "happens". | `TodosPage` |

```
Atom  →  Molecule  →  Organism  →  Template  →  Page
Button    TodoItem     TodoList     Layout       App with state
```

### How to apply it in practice

- **It is not a rigid rule**: it is a way to name and order your components. If you hesitate between molecule and organism, it does not matter.
- **Atoms and molecules** are usually **presentational** (they receive props and hold no business state).
- **Logic and state** are concentrated in **pages** (or in specific organisms).
- It helps you build a reusable **component library** across projects.

---

## 4. Setting up the project

You need [Node.js](https://nodejs.org) installed. We will use **Vite**, the fast way to start a React project.

```bash
npm create vite@latest my-todos -- --template react
cd my-todos
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

Relevant initial structure:

```
my-todos/
├── index.html
├── package.json
└── src/
    ├── main.jsx     ← entry point: mounts <App /> in the HTML
    ├── App.jsx      ← root component
    └── index.css
```

To start clean: **empty** `App.jsx` and delete `App.css`.

```jsx
// src/main.jsx (already comes like this; shown to understand what it does)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
```

---

## 5. Mini project: a to-do list

### What we are going to build

A to-do list where you can **add**, **mark as done** and **delete** tasks.

### Step 0. Design before coding

We start from a prototype of what we want to build:

![Prototype of the to-do app: header, form to add a task and a list of tasks](./images/todo-app-prototype.svg)

Then we **draw a box around every piece and give it a name**. Each color is an Atomic Design level (see [Section 3](#3-atomic-design)), and the legend under the image names every numbered piece.

![The same prototype broken down into page, template, organisms, molecules and atoms](./images/todo-app-components.svg)


Component inventory according to Atomic Design:

| Level | Component | Contains |
|---|---|---|
| Atom | `Button` | — |
| Atom | `Checkbox` | — |
| Atom | `Input` | — |
| Molecule | `TodoItem` | `Checkbox` + text + `Button` |
| Molecule | `AddTodoForm` | `Input` + `Button` |
| Organism | `TodoList` | several `TodoItem` |
| Template | `TodoTemplate` | slots for header, form and list |
| Page | `TodosPage` | state + everything above |

> 💡 **Process rule:** we build from the **inside out** (atoms → page), and at every step the app **keeps working**.

We create the folders from the start:

```
src/
└── components/
    ├── atoms/
    ├── molecules/
    ├── organisms/
    ├── templates/
    └── pages/
```

---

### Step 1. A static "quick and dirty" version

First we check that everything works using a single component and fixed data. We are not thinking about components yet: we just want to see the result.

```jsx
// src/App.jsx
export default function App() {
  return (
    <div>
      <h1>My tasks</h1>
      <input placeholder="New task..." />
      <button>Add</button>
      <ul>
        <li>
          <input type="checkbox" /> Learn JSX <button>Delete</button>
        </li>
        <li>
          <input type="checkbox" /> Practice props <button>Delete</button>
        </li>
      </ul>
    </div>
  )
}
```

**Problem:** there are repeated elements (buttons, items). That is the signal to extract components.

---

### Step 2. First atom: `Button` and the concept of props

A button appears several times, with different texts. We extract it.

```jsx
// src/components/atoms/Button.jsx
import './Button.css'

export default function Button({ children, onClick, type = 'button', variant = 'primary' }) {
  return (
    <button type={type} className={`btn btn--${variant}`} onClick={onClick}>
      {children}
    </button>
  )
}
```

New concepts:

- **Props**: the object the component receives. Here we *destructure* it in the parameters.
- **`children`**: whatever is written between the opening and closing tags.
- **Default values**: `type = 'button'`, `variant = 'primary'`.
- **Variants** driven by props (`primary`, `danger`) instead of creating a different component for each color.

> 🎨 **About the CSS:** every component imports **its own CSS file** (`import './Button.css'`), so the style travels with the component. The CSS of all components is listed in [Section 6](#6-final-structure-and-css); until you add it the app works, it just looks unstyled. Atoms only style themselves; **molecules decide how their atoms are laid out**.

Usage:

```jsx
<Button>Add</Button>
<Button variant="danger">Delete</Button>
```

We do the same with the other two atoms:

```jsx
// src/components/atoms/Checkbox.jsx
import './Checkbox.css'

export default function Checkbox({ checked, onChange, id }) {
  return (
    <input
      id={id}
      type="checkbox"
      className="checkbox"
      checked={checked}
      onChange={onChange}
    />
  )
}
```

```jsx
// src/components/atoms/Input.jsx
import './Input.css'

export default function Input({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      className="input"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}
```

✅ **Checkpoint:** atoms know nothing about "tasks". They could be used in any other app.

---

### Step 3. First molecule: `TodoItem` (still without state)

We combine atoms. The component **only renders what it receives through props**.

```jsx
// src/components/molecules/TodoItem.jsx
import Checkbox from '../atoms/Checkbox'
import Button from '../atoms/Button'
import './TodoItem.css'

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.done ? 'todo-item--done' : ''}`}>
      <Checkbox checked={todo.done} onChange={() => onToggle(todo.id)} />
      <span className="todo-item__text">{todo.text}</span>
      <Button variant="danger" onClick={() => onDelete(todo.id)}>
        Delete
      </Button>
    </li>
  )
}
```

Notice the design of the component's **API** (its props):

- `todo` → data to render (**down**).
- `onToggle`, `onDelete` → **events up**: the item does not change anything, it only reports and says *which one* (`todo.id`).

Let's try it in `App.jsx` with a fixed task and test functions:

```jsx
// src/App.jsx (temporary test)
import TodoItem from './components/molecules/TodoItem'

export default function App() {
  const todo = { id: 1, text: 'Learn JSX', done: false }
  return (
    <ul>
      <TodoItem
        todo={todo}
        onToggle={(id) => console.log('toggle', id)}
        onDelete={(id) => console.log('delete', id)}
      />
    </ul>
  )
}
```

✅ **Checkpoint:** when you click, the console shows the events. Nothing changes on screen yet because **there is no state**.

---

### Step 4. Organism `TodoList`: lists with `map` and `key`

```jsx
// src/components/organisms/TodoList.jsx
import TodoItem from '../molecules/TodoItem'
import './TodoList.css'

export default function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return <p className="empty">No tasks yet. Add the first one!</p>
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}
```

New concepts:

- **List rendering**: `array.map(...)` returns an array of JSX elements.
- **`key`**: a **stable, unique** identifier among siblings. It helps React know which element is which. Use an `id`, **not** the array index if the list can change.
- **Conditional rendering**: `if` / ternary / `&&` to decide what to render.

Test in `App.jsx` with a fixed array:

```jsx
const todos = [
  { id: 1, text: 'Learn JSX', done: true },
  { id: 2, text: 'Practice props', done: false },
  { id: 3, text: 'Understand state', done: false },
]

// <TodoList todos={todos} onToggle={console.log} onDelete={console.log} />
```

✅ **Checkpoint:** the full list is visible (and the empty message appears if you pass `[]`). Everything is still static: **we have separated how it looks from how it works**.

---

### Step 5. Making it dynamic: state with `useState`

Now we must decide **where the state lives**. Key question: *who needs the list of tasks?* `TodoList` to render it and the form to add to it. Their common ancestor is the **page**. The state lives there.

```jsx
// src/components/pages/TodosPage.jsx
import { useState } from 'react'
import TodoList from '../organisms/TodoList'

const initialTodos = [
  { id: 1, text: 'Learn JSX', done: true },
  { id: 2, text: 'Practice props', done: false },
]

export default function TodosPage() {
  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id))
  }

  return (
    <main>
      <h1>My tasks</h1>
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </main>
  )
}
```

```jsx
// src/App.jsx
import TodosPage from './components/pages/TodosPage'

export default function App() {
  return <TodosPage />
}
```

New concepts:

- **`useState(initialValue)`** returns `[value, functionToChangeIt]`.
- Calling `setTodos` makes React **run the component again** and update the screen.
- **Immutability**: never modify state directly (`todos.push(...)` ❌). Create a new copy with `map`, `filter` or the spread operator `...` ✅.

✅ **Checkpoint:** you can now toggle and delete tasks. Notice that **`TodoItem` and `Button` have not changed a single line**: the separation paid off.

---

### Step 6. Molecule `AddTodoForm` and local state

The form needs to remember what the user is typing. That data **only matters to the form**, so its state lives **inside** it (local state). On submit, it notifies the page through `onAdd`.

```jsx
// src/components/molecules/AddTodoForm.jsx
import { useState } from 'react'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import './AddTodoForm.css'

export default function AddTodoForm({ onAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()           // prevents the browser from reloading the page
    const clean = text.trim()
    if (!clean) return
    onAdd(clean)
    setText('')
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task..."
      />
      <Button type="submit">Add</Button>
    </form>
  )
}
```

New concept: **controlled component**. The `<input>` value is governed by React state (`value` + `onChange`), not by the DOM.

We connect it in the page:

```jsx
// src/components/pages/TodosPage.jsx (fragment)
import AddTodoForm from '../molecules/AddTodoForm'

const addTodo = (text) => {
  const newTodo = { id: crypto.randomUUID(), text, done: false }
  setTodos([...todos, newTodo])
}

// ...inside the return:
<AddTodoForm onAdd={addTodo} />
<TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
```

✅ **Checkpoint:** the app now does everything we asked for.

> 🧠 **Local or lifted state?** The input text is local (only the form uses it). The task list is lifted (several components use it). Always ask yourself *"who else needs this data?"*.

---

### Step 7. Template `TodoTemplate`: composition with "slots"

So far the page mixes **structure** (what goes where) and **data** (state). The template separates the first one. It receives ready-made pieces through props and places them.

```jsx
// src/components/templates/TodoTemplate.jsx
import './TodoTemplate.css'

export default function TodoTemplate({ header, form, children }) {
  return (
    <div className="todo-template">
      <header className="todo-template__header">{header}</header>
      <section className="todo-template__form">{form}</section>
      <section className="todo-template__content">{children}</section>
    </div>
  )
}
```

And the page becomes the "glue" between state and structure:

```jsx
// src/components/pages/TodosPage.jsx (final version)
import { useState } from 'react'
import TodoTemplate from '../templates/TodoTemplate'
import AddTodoForm from '../molecules/AddTodoForm'
import TodoList from '../organisms/TodoList'

const initialTodos = [
  { id: 1, text: 'Learn JSX', done: true },
  { id: 2, text: 'Practice props', done: false },
]

export default function TodosPage() {
  const [todos, setTodos] = useState(initialTodos)

  const addTodo = (text) =>
    setTodos([...todos, { id: crypto.randomUUID(), text, done: false }])

  const toggleTodo = (id) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))

  const deleteTodo = (id) => setTodos(todos.filter((t) => t.id !== id))

  const pending = todos.filter((t) => !t.done).length   // derived data: NOT state

  return (
    <TodoTemplate
      header={<h1>My tasks ({pending} pending)</h1>}
      form={<AddTodoForm onAdd={addTodo} />}
    >
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </TodoTemplate>
  )
}
```

Look at `pending`: it is **calculated** from `todos` on every render. There is no need for another `useState`; storing derived data in state is a classic source of bugs.

---

## 6. Final structure and CSS

### Folder structure

One `.css` file next to each component, exactly one level of styling per component:

```
src/
├── App.jsx
├── main.jsx
├── index.css                  ← design tokens + global reset
└── components/
    ├── atoms/
    │   ├── Button.jsx
    │   ├── Button.css
    │   ├── Checkbox.jsx
    │   ├── Checkbox.css
    │   ├── Input.jsx
    │   └── Input.css
    ├── molecules/
    │   ├── TodoItem.jsx
    │   ├── TodoItem.css
    │   ├── AddTodoForm.jsx
    │   └── AddTodoForm.css
    ├── organisms/
    │   ├── TodoList.jsx
    │   └── TodoList.css
    ├── templates/
    │   ├── TodoTemplate.jsx
    │   └── TodoTemplate.css
    └── pages/
        └── TodosPage.jsx      ← no CSS: it only connects state and components
```

> Each component imports **its own CSS** (`import './Button.css'`). That way the style travels with the component. We use a **BEM**-like convention (`block__element--modifier`) to avoid name collisions.

Two rules keep the styles aligned with the component design:

- **Atoms style only themselves** (color, padding, border). They never decide their own width or margins in the layout.
- **Molecules and organisms decide the layout** of the pieces they contain (`display: flex`, `gap`, who grows). That is why `AddTodoForm.css` makes the input stretch, not `Input.css`.

### Global styles: design tokens

```css
/* src/index.css */
:root {
  --color-primary: #4f46e5;
  --color-danger: #dc2626;
  --color-border: #d4d4d8;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-bg: #f4f4f5;
  --radius: 8px;
  --space: 12px;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  color: var(--color-text);
  background: var(--color-bg);
}
```

### Atoms

```css
/* src/components/atoms/Button.css */
.btn {
  padding: 8px 14px;
  border: none;
  border-radius: var(--radius);
  color: white;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
}
.btn--primary { background: var(--color-primary); }
.btn--danger  { background: var(--color-danger); }
.btn:hover    { opacity: 0.9; }
.btn:focus-visible {
  outline: 2px solid var(--color-text);
  outline-offset: 2px;
}
```

```css
/* src/components/atoms/Checkbox.css */
.checkbox {
  width: 18px;
  height: 18px;
  margin: 0;
  accent-color: var(--color-primary);   /* colors the native checkbox */
  cursor: pointer;
}
```

```css
/* src/components/atoms/Input.css */
.input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  background: white;
  font: inherit;
}
.input:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 1px;
}
```

### Molecules

```css
/* src/components/molecules/TodoItem.css */
.todo-item {
  display: flex;
  align-items: center;
  gap: var(--space);
  padding: var(--space);
  list-style: none;
  background: white;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
}
.todo-item__text { flex: 1; }
.todo-item--done .todo-item__text {
  text-decoration: line-through;
  color: var(--color-muted);
}
```

```css
/* src/components/molecules/AddTodoForm.css */
.add-form {
  display: flex;
  gap: var(--space);
}
.add-form .input { flex: 1; }   /* the molecule decides that the input grows */
```

### Organism

```css
/* src/components/organisms/TodoList.css */
.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 8px;
}
.empty {
  text-align: center;
  color: var(--color-muted);
}
```

### Template

```css
/* src/components/templates/TodoTemplate.css */
/* __form and __content need no rules of their own: the grid gap already spaces them.
   They stay in the markup as styling hooks. */
.todo-template {
  max-width: 560px;
  margin: 40px auto;
  padding: 0 var(--space);
  display: grid;
  gap: var(--space);
}
.todo-template__header h1 {
  margin: 0;
  font-size: 1.75rem;
}
```

`TodosPage` has no CSS file: it contains no markup of its own, it only connects state and components.

✅ **Checkpoint:** compare the running app with the prototype from Step 0. If something looks different, find out which component owns that style and fix it there.
---

## 7. Suggested exercises

Each one practices a different idea of component-based design:

1. **New atom**: create a `Badge` that shows the number of pending tasks and use it in the header.
2. **Reuse**: use `Button` with a `secondary` variant for a "Delete completed" button.
3. **New organism**: create `TodoFilters` (All / Pending / Done). Where should the filter state live, and why?
4. **Derived data**: compute the filtered list in `TodosPage` without storing it in state.
5. **Editing**: allow editing a task's text. Local state in `TodoItem` or lifted state?
6. **Refactor**: extract the task logic into a *custom hook* `useTodos()` returning `{ todos, addTodo, toggleTodo, deleteTodo }`.

---

## 8. Summary

**React concepts covered**

| Concept | What it is for |
|---|---|
| Component | A function that returns JSX |
| JSX | Describing the UI with HTML-like syntax inside JS |
| Props | Passing data (and functions) from parent to child |
| `children` | Composing components by nesting them |
| `key` | Identifying elements in lists |
| `useState` | Giving a component memory |
| Controlled component | An input whose value is governed by React |
| Lifting state up | Moving state to the common ancestor |
| Derived data | Computing instead of storing |

**Methodology followed**

1. Sketch and **break down** the interface.
2. Classify with **Atomic Design** (atoms → molecules → organisms → templates → pages).
3. Build **static first** (props), **dynamic later** (state).
4. Decide **who owns each piece of state** (the closest component that needs it).
5. **Data down, events up**.
6. Keep components small, single-purpose, with their styles next to them.

> 🎯 **Final idea:** in React, programming is not "manipulating the screen", it is **designing small, well-defined pieces** and deciding **what data flows between them**.

### Further reading

- Official docs: <https://react.dev> (*Learn* section, especially "Thinking in React").
- Next topic: [Part 2 — `useEffect` and the component lifecycle](./02-react-useeffect-and-lifecycle.md).
