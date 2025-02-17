# P9.2 - **Final React Practice Assignment**

## Objective

The goal of this assignment is to develop a **Single Page Application (SPA) using React** with multiple routes. This will be achieved using **React Router** and **TypeScript**. The application must retrieve data via **AJAX requests**, either from a custom API, a third-party API, or both.

## Project Requirements

Each team (composed of two students) must define the requirements of their application, including the type of data it will handle and whether it will use a third-party data API. Teams must submit their application specification on a panel provided by the instructor in **Google Classroom**.

## Technical Specifications

### Project Structure

The project should be structured as follows:

- **routes/** – Contains all route components.
- **layout/** – Holds different layout components.
- **components/** – Includes atomic, molecular, and organism components, organized either by **type** or **feature**.
- **services/** – Contains libraries for API requests.
- **types/** – Stores TypeScript interfaces defining the data formats used in the application.

### Component Organization

The project should include a variety of component types:

- **Atomic Components** – Smallest UI elements (buttons, inputs, etc.).
- **Molecular Components** – Combinations of atomic components forming reusable UI elements.
- **Organism Components** – More complex UI sections composed of multiple molecular components.
- **Layout Components** – Defines the overall structure of the application.
- **Route Components** – Pages that define different views within the application.

### Routing & API Requirements

- The project must include a sufficiently **complex use of routes and API integrations**.
- There should be **at least two distinct routes** for different types of searches within the API.
- The application must include **data filtering functionalities**.
- The project must implement **a route with a parameter** (e.g., `/route/:id`) to use dynamic route parameters.

### Styling Guidelines

- Any styling method is acceptable (CSS, SASS, Bootstrap, Tailwind CSS).
- Styles **must be located within the component’s folder**.
- No global stylesheet files should be used.
- If using **vanilla CSS**, the **BEM (Block-Element-Modifier)** methodology must be followed for class naming conventions.

## Project Submission

Each team must submit the following:

- A **GitHub repository** link containing the complete project.
- The GitHub repository should reflect **progressive development** (repositories with few but massive commits will not be accepted).

## README File

The repository must include a **README.md** file, which will serve as the project documentation and should include:

1. **Objectives** – Describe the main goals of the project.
2. **Features** – Outline the main functionalities of the application.
3. **Figma Prototype** – A link to a **basic wireframe or prototype** of the application.
4. **Technologies Used** – List the frameworks, libraries, and APIs used.
5. **Installation Instructions** – Explain how to set up and run the project locally.
6. **Usage Guide** – Provide an overview of how the application works.
7. **API Documentation** – If applicable, document any API endpoints used in the project.
8. **Implementation Notes** – Explain the various components that make up the application, the different routes, and the layouts used.
9. **Deployed Application** – A link to the **live deployed version** of the project (e.g., GitHub Pages, Vercel).

## Grading Criteria (Rubric)

The project will be evaluated based on the following aspects:

| Criteria                 | Description                                                                       | Points  |
| ------------------------ | --------------------------------------------------------------------------------- | ------- |
| **Project Structure**    | Proper folder organization and modularity                                         | 10      |
| **Component Design**     | Usage of atomic, molecular, organism, layout, and route components                | 15      |
| **Routing & Navigation** | Implementation of React Router for SPA functionality, including dynamic routes    | 10      |
| **API Integration**      | Correct use of AJAX requests, multiple API searches, and filtering                | 10      |
| **Styling**              | Appropriate usage of CSS methodologies and styles within components               | 10      |
| **Documentation**        | Complete README with all necessary sections, including Figma and deployment links | 15      |
| **Code Quality**         | Clean, readable, and maintainable code                                            | 10      |
| **Presentation & Q&A**   | Clarity and depth of oral presentation and responses to questions                 | 20      |
| **Total**                | **Final score out of 100**                                                        | **100** |

Each member will receive an **individual grade** based on their participation in the presentation and their responses during the Q&A session.

This final project will serve as a **practical demonstration** of the students’ ability to work with **React, TypeScript, React Router, API integration, component architecture, and styling methodologies**.
