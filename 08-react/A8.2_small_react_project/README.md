# **Mini Project: Emoji Feedback App**

## **Overview**

In this project, you will create a React application that allows users to leave feedback by selecting an emoji. The app will consist of 4 components:

1. **App** (the main component)
2. **FeedbackList** (displays a list of emoji feedback options)
3. **FeedbackItem** (represents a single emoji feedback option)
4. **SelectedFeedbackDisplay** (shows the selected emoji and feedback message)

---

## **Goal**

Build an app where users can:

- See a list of emojis representing feedback options.
- Click on an emoji to select it.
- See their selected emoji and a corresponding feedback message.

---

## **Requirements**

### **1. State Management**

- Use the `useState` hook in the `App` component to manage the selected feedback.

### **2. Component Structure**

- **App**: Manages the state and renders the other components.
- **FeedbackList**: Receives the list of emojis as a prop and renders `FeedbackItem` components.
- **FeedbackItem**: Displays an individual emoji. When clicked, it informs the `App` component of the selected feedback using a prop.
- **SelectedFeedbackDisplay**: Displays the user’s selected emoji and its feedback message.

### **3. Props**

- Pass the list of emojis and any necessary functions via props to child components.

### **4. Logic**

- When a user clicks on an emoji, update the state in the `App` component with the selected emoji and feedback message.
- Display a friendly message in the `SelectedFeedbackDisplay` based on the emoji selected.

### **5. Predefined Emojis**

Use at least 4 emojis with corresponding feedback messages:

- 😊 = "Happy"
- 😐 = "Neutral"
- 😢 = "Sad"
- 🤔 = "Thinking"

---

## **Bonus (Optional)**

- Add a "Reset Feedback" button to clear the selection.
- Highlight the selected emoji in the `FeedbackList`.

## **Example Layout**

How was your experience?

😊 😐 😢 🤔

---

Your Feedback: 😊 - "Happy"

## Submission:

Submit a link yo your github repository.
