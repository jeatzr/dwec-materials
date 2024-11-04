# P5.1 Pet Store Pet Profile Management

### 2DAW - DWEC Bilingual.

> **Student Name**:

### Description

In this practice, you will develop a pet profile management application for a fictional online pet store. Each pet profile will include a photo, name, description, birthdate, price, a unique pet code, and a status for whether the pet is "sold." The application should allow users to add, edit, delete, and view each pet profile, including data validation and DOM manipulation.

### Objectives

1. **DOM Manipulation**: Create and modify elements in the interface, including images and "sold" status.
2. **Event Handling**: Capture form and button events.
3. **Form Validation**: Ensure required fields are completed, the image URL is valid, the birthdate is in the past, and the pet code follows a specific format.
4. **CRUD in Memory**: Create, Read, Update, and Delete pet profiles within a JavaScript array.
5. **Boolean Handling**: Use a checkbox to toggle a pet's "sold" status and update the display accordingly.

### Application Specifications

1. **Pet Form**: The application should include the following fields in a form:

   - **Pet Name** (text input).
   - **Description** (text input).
   - **Image URL** (URL input for the pet's image).
   - **Birthdate** (date input).
   - **Price** (numeric input).
   - **Pet Code** (text input, validation format: three letters followed by three numbers, e.g., "CAT123").
   - **Sold** (checkbox to indicate if the pet is sold).
   - An **Add Pet** button.

2. **Pet List**: Display each pet profile in a list with options to **edit**, **delete**, and **toggle sold status**.

3. **Validation**:

   - Ensure that the name, image URL, birthdate, price, and pet code are completed.
   - **Image URL**: Ensure that the link is valid, allowing image formats like .jpg, .jpeg, .png, or .gif.
   - **Birthdate**: Validate that the entered date is in the past or present, not in the future.
   - **Price**: Must be a positive number greater than zero.
   - **Pet Code**: Validate that it follows the specific format of three letters followed by three numbers (e.g., "DOG001" or "CAT123").

4. **CRUD Functionality**:

   - **Create**: Add pets to the list.
   - **Read**: Display pet profiles in the DOM.
   - **Update**: Edit a pet’s profile, including its sold status.
   - **Delete**: Remove a pet from the list.

5. **Sold Status Display**: Each pet profile should show an indicator (such as a badge or label) if the pet is marked as sold. The user should be able to toggle this status.

6. **Image Display**: Each profile should show the pet's image using the provided URL.

### File Structure

1. **HTML** (`index.html`): Contains the base structure for the form and the container for the list of pets.
2. **CSS** (`styles.css`): Basic styles for the form, pet profiles layout, and sold status indicator.
3. **JavaScript** (`script.js`): Logic to handle DOM manipulation, form validation, and CRUD operations.

### Development Suggestions

1. **Form Submission**: Use `addEventListener` to handle the `submit` event and add a pet to the list. Make sure to clear the form after adding.
2. **URL Validation**: Use regular expressions to validate that the image link is in a valid format.
3. **Birthdate Validation**: Check that the date is not in the future by using `Date`.
4. **Code Validation**: Use a regular expression to ensure the pet code follows the format of three letters followed by three numbers.
5. **In-Memory CRUD**: Use an array `pets` to store each pet as an object. Implement functions to add, edit, delete, and display pets in the DOM.
6. **Rendering**: Every time an operation (add, edit, delete, toggle sold status) is performed, update the list in the DOM by calling a function `renderPets`.

### Technical Requirements

- The application should be responsive and user-friendly on different devices.
- The interface should update in real-time based on the operations performed.

### Interface Example

- **Pet Form**: A form with fields for name, description, image URL, birthdate, price, pet code, and a "sold" checkbox, along with an "Add Pet" button.
- **Pet List**: Each pet profile should display:
  - Pet Image.
  - Name.
  - Description.
  - Birthdate.
  - Price.
  - Pet Code.
  - Sold status (indicator if marked as sold).
  - Edit, Delete, and Toggle Sold buttons.
