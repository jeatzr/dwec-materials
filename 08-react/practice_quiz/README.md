# Build a Quiz App with React

*A guide with the components you need to build and a hint about what each one contains. The code is up to you.*

## The goal

Build a small quiz in React. The app must:

1. Open on a **start screen**.
2. Pick **5 random questions** from a list of 10 that you write yourself.
3. Show **one question at a time**, with a progress bar.
4. Give **instant feedback** when the user answers: the right answer turns green, a wrong choice turns red.
5. Show the **final score** with a message, and let the user **play again** with a new random set.

**Rules of the challenge**

- Use only `useState`, props and event handlers. You do **not** need `useEffect`.
- Every user action is handled in an event handler (a click), not "after render".
- No component below the page holds state.
- Style with plain CSS and **BEM** class names (no CSS Modules, no CSS-in-JS).
- No hard-coded colors or spacing in component CSS: use CSS variables.

## The plan: components first

Before writing code, look at the drawing. Every box is a component, and every component is a file.

![The quiz page and its components, in the three phases of the game](react-local-quiz-components.svg)

| Level | What it is | Your components | Rule |
|---|---|---|---|
| Atom | One UI element that knows nothing about the quiz | `Badge`, `Button`, `ProgressBar` | Props only. No state |
| Molecule | A few atoms working together | `QuestionHeader`, `AnswerOption` | Props only |
| Organism | A complete block of the screen | `StartScreen`, `QuestionCard`, `ScorePanel` | Data and callbacks come in through props |
| Page | Organisms connected to state | `QuizPage` | The only level with state |

**Import rule:** dependencies point downward. The page imports organisms, organisms import molecules, molecules import atoms. An atom never imports a molecule.

## Project setup

Create the project with Vite and the React template, remove what you do not need (`App.css`, the default content of `App.jsx`), and create this structure:

```
src/
  index.css
  main.jsx
  App.jsx
  data/
    questions.js
  pages/
    QuizPage.jsx
    QuizPage.css
  components/
    atoms/        Badge, Button, ProgressBar
    molecules/    AnswerOption, QuestionHeader
    organisms/    QuestionCard, ScorePanel, StartScreen
  utils/
    shuffle.js
    buildQuiz.js
```

Every component is a **pair of files**: `Name.jsx` and `Name.css`. The component imports its own stylesheet (`import './Name.css'`).

> **Hint: the `@` alias.** Long relative paths such as `../../components/atoms/Button` are painful. Configure Vite so that `@` means `src` (look for `resolve.alias` in the Vite docs), and add a `jsconfig.json` so VS Code understands it. Use the alias from outside `components`, and short relative paths between components.

### Styles: plain CSS with BEM

You will use two kinds of CSS files:

- **`src/index.css`** is global. It contains your design tokens as CSS variables plus a small reset. Define at least these groups: colors (background, surface, text, muted text, border, primary and a hover version, success, danger, plus a soft background for each state), font sizes, a spacing scale, border radii and one shadow.
- **`Name.css`** sits next to each component and styles that component. Plain CSS is **global**: every rule applies to the whole app, no matter which file it is in. That is why we need a naming convention that prevents clashes.

#### BEM in one minute

| Part | Meaning | Example |
|---|---|---|
| Block | The component itself, named after it in kebab-case | `.question-card` |
| Element | A part that only makes sense inside the block, joined with `__` | `.question-card__answers` |
| Modifier | A variant or a state, joined with `--` | `.answer-option--correct` |

**Rules**

- **One block per component.** The block name is the component name in kebab-case: `QuestionCard` becomes `question-card`.
- **Style with classes only.** No element selectors (`div`, `p`) and no ids in component CSS. Those belong to the reset in `index.css`.
- **Keep selectors flat:** one class per selector. Avoid `.a .b` chains.
- **Never style another component from outside.** If a component must look different, give it a modifier and pass a prop.
- **A modifier always goes together with its block:** `class='answer-option answer-option--correct'`.

> **Hint:** in JSX the class is a plain string: `className='badge'`. For conditional modifiers, build the string from an array of parts, remove the falsy ones with `filter(Boolean)` and join them with spaces.

> **Hint:** a block can contain **children blocks** (a `QuestionCard` renders `AnswerOption`s). Each child keeps its own block name. Do not turn it into `question-card__answer-option`: the child is a block of its own, and it stays reusable.

> **Bonus hint:** if you only redefine the color variables inside `@media (prefers-color-scheme: dark)`, your whole app gets a dark theme for free.

## The data

Write the questions in `src/data/questions.js` as an exported array. Use this shape for each question:

```js
{ id: 1, category: 'JavaScript', difficulty: 'easy', text: '...', correct: '...', incorrect: ['...', '...', '...'] }
```

Write **10 questions** on a topic you like (web development, music, football, your favourite series). Each needs a unique `id`, a category, a difficulty (`easy`, `medium` or `hard`), the correct answer and three wrong ones.

## Two utility functions

Pure functions with **no React** inside. Put them in `src/utils`.

**`shuffle(array)`**
- Receives an array and returns a **new** array with the same items in random order.
- *Hint:* never modify the array you receive. Make a copy first. Your question list is shared by the whole app, so changing it in place would be a nasty bug.
- *Hint:* search for the Fisher-Yates algorithm. Sorting with a random comparison looks easy but gives uneven results.

**`buildQuiz(allQuestions, amount)`**
- Returns `amount` random questions, ready for the UI. Each one must have `id`, `category`, `difficulty`, `text`, `correct` and **one `answers` array** that mixes the correct answer with the wrong ones in random order.
- *Hint:* shuffle the questions first, then keep the first `amount` (`slice`), then transform each one (`map`).

> **Check yourself:** call `buildQuiz` once in the console. Reload the page. Are the questions **and** their answers in a different order?

## The components

Build them in this order, from the smallest to the biggest. For each one you have its job, its props and a hint.

### Atoms

**`Badge`**
- *Job:* a small pill-shaped label.
- *Props:* `children`.
- *Hint:* it is just a styled `span`. Use it for the category and the difficulty.

**`Button`**
- *Job:* the generic button of the whole app.
- *Props:* `children`, `onClick`, `disabled`.
- *Hint:* style three states: normal, hover (not when disabled) and disabled. The same button will be used on three different screens.

**`ProgressBar`**
- *Job:* shows how far the user is, for example "Question 2 of 5".
- *Props:* `value`, `max`.
- *Hint:* two elements, `progress-bar__track` and `progress-bar__fill`, one inside the other. The **percentage is calculated** from the props, and it is the one place where an inline `style` for the width makes sense.
- *Hint:* for accessibility, give the track `role='progressbar'` and the attributes `aria-valuemin`, `aria-valuemax` and `aria-valuenow`.

### Molecules

**`QuestionHeader`**
- *Job:* the top of a question: two badges and the question text.
- *Props:* `id`, `category`, `difficulty`, `text`.
- *Hint:* the text is a heading, and it receives an `id` so the card can link to it for accessibility.

**`AnswerOption`**
- *Job:* one selectable answer.
- *Props:* `name`, `text`, `checked`, `status` (`'idle'`, `'correct'` or `'wrong'`), `disabled`, `onSelect`.
- *Hint:* wrap a radio `input` and the text in a `label`, so the **whole row** is clickable. Radios with the same `name` form a group.
- *Hint:* the `checked` prop makes it a **controlled input**: the state of the page decides what is selected.
- *Hint:* the look is made of modifiers: `answer-option--selected`, `answer-option--correct` and `answer-option--wrong`. Build the `className` from the block plus the modifiers that apply, and write `--correct` and `--wrong` **after** `--selected` in your CSS so that they win.
- *Hint:* hover and the pointer cursor should only apply while the question is still open. Do not style the option from the card: pass `disabled` down and add a modifier such as `answer-option--disabled`.
- *Hint:* it calls `onSelect(text)`. It does not know the question id, and it does not need to.

### Organisms

**`QuestionCard`**
- *Job:* one complete question with its four answers and its feedback.
- *Props:* `question`, `selected` (the chosen answer, or `null`), `locked` (already answered?), `onSelect`.
- *Hint:* use a `fieldset` as the container. If you set `disabled` on it, **every radio inside is disabled at once**. Also pass `disabled={locked}` to every `AnswerOption`, so each one can change its own look.
- *Hint:* write a small function that decides the `status` of each answer: not locked is `idle`; the correct answer is `correct`; the one the user picked, if wrong, is `wrong`; the rest are `idle`.
- *Hint:* when locked, show a feedback line: "Correct!" or "The right answer was: ...". It is conditional rendering with `&&` or a ternary.
- *Hint:* the card calls `onSelect(question.id, answer)`, adding the id that `AnswerOption` does not know.
- *Hint:* use `question.id` in the `name` of the radios, so that two questions never share a group.

**`StartScreen`**
- *Job:* welcomes the user and starts the game.
- *Props:* `total`, `onStart`.
- *Hint:* a title, one sentence that mentions `total`, and a `Button`.

**`ScorePanel`**
- *Job:* the final result.
- *Props:* `score`, `total`, `onPlayAgain`.
- *Hint:* show "Your score: n / total", a message that depends on the result (for example perfect, good, or keep practising) and a `Button`.
- *Hint:* the **message is calculated** from `score` and `total` with a small function. Do not store it in state.

> **Check yourself before going on:** build a throwaway test page in `App.jsx` with a hard-coded sample question and render every organism. Can you answer the sample question? Does the card lock? Do the colors change? Does everything work in dark mode? If the UI is solid now, the logic will be much easier later.

## The page: `QuizPage`

This is the only component with state, and it connects everything.

**State you need**
- `phase`: which screen to show (`'start'`, `'playing'` or `'finished'`).
- `questions`: the quiz of the current game.
- `currentIndex`: which question the user is on.
- `userAnswers`: what the user answered. An object that maps the **question id** to the chosen answer works well.

**Values you should calculate, not store**
- `question`: the current question.
- `selected`: the answer given to the current question, or `null`.
- `isLast`: is this the last question?
- `score`: how many answers match the correct one.

> **Why not store them?** Every extra piece of state is another place that can go out of sync with the rest. If you can calculate it from other state, calculate it.

**Handlers**
- `handleSelect(questionId, answer)`: saves the answer. *Hint:* create a **new** object (spread the previous one) so React notices the change, and use the function form of the state setter.
- `handleNext()`: on the last question, finish the game; otherwise move to the next question.
- `startGame()`: builds a new quiz and **resets every piece of game state**, then moves to the `playing` phase.

**Rendering**
- Show one block for each phase, using conditional rendering. A fragment (`<>...</>`) lets you group several elements without an extra `div`.
- The "next" button is disabled until the question has been answered, and its text changes on the last question.

> **Hint: lazy initial state.** If you write `useState(buildQuiz(...))`, the quiz is rebuilt on every render and thrown away. Pass a **function** instead, and React calls it only the first time. It also guarantees that `question` is never `undefined`.

## Milestones

Do not try to build everything at once. Check each milestone in the browser before moving on.

| # | Milestone | You know it works when |
|---|---|---|
| 1 | Project, folders, alias, `index.css` and the data | The app runs, and `buildQuiz` returns shuffled questions in the console |
| 2 | All components built and tested with sample data | You can answer the sample question and see green and red |
| 3 | `QuizPage` shows one question | You answer it, the card locks, and a reload gives a different question |
| 4 | Moving through the quiz | The progress bar moves, and the button is disabled until you answer |
| 5 | Phases and score | The last question leads to a correct score and message |
| 6 | Start screen and replay | You can play twice in a row, with different questions and no leftovers from the first game |

## Common traps

| Symptom | Think about... |
|---|---|
| `Cannot read properties of undefined` | Is `question` undefined? Is the index out of range? |
| Questions change on every click | Is `buildQuiz` running on every render? |
| The previous answer stays selected | Are you storing the answer per question or in a single value? |
| The score is always 0 | Are you comparing the same kind of value (answer text) in both places? |
| *Play again* shows the old game | Did you reset **all** the state? |
| An import fails with `@/` | Did you restart the dev server after changing the Vite config? |
| A component looks wrong, or changes when you edit another one | Are two components using the same class name? Is the block named after its component, in kebab-case? |
| A style does not apply at all | Did the component import its `.css` file? Did you type `__` and `--` correctly? |

## Definition of done

- [ ] The app works from the start screen to the score and back again.
- [ ] Each component lives in its own folder level (atoms, molecules, organisms) and imports only downward.
- [ ] Only `QuizPage` uses `useState`.
- [ ] Nothing that can be calculated is stored in state.
- [ ] Every component has its own BEM block, and no rule styles another component's classes.
- [ ] There are no colors or spacing values typed directly in a component `.css`: everything uses variables.
- [ ] You wrote your own 10 questions.
- [ ] The radios can be used with the keyboard, and the progress bar has its ARIA attributes.

## Level up

Choose one or more. The first four only need `useState`. The rest introduce `useEffect`, and you will see why it exists.

1. **Review screen.** At the end, list every question with your answer and the right one.
2. **Pick a category** on the start screen. The list of categories should be calculated from your data.
3. **Pick the number of questions.**
4. **Add your own questions** with a form.
5. **Countdown per question** with `setInterval`. Do not forget to clean it up.
6. **Best score** saved in `localStorage`.
7. **Questions from an API** (Open Trivia DB). Your components should not need any change if the questions keep the same shape.
8. **React Router:** separate routes for the start, the game and the results.
