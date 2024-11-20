# Practice 6.1 Final Ajax Project

## Guidelines

This practice will be carried out in groups of 2 people and must be presented in class.  
**Delivery date:** December 9.  
**Defenses:** December 11.

The objective is to create an **APP** that accesses a **Public REST API** and, using JavaScript and the methods covered in class, retrieves various data provided by the API with different methods and filters to finally render them on the screen.  
It will be appreciated if you also access a **Private REST API** (using `json-server`) to perform write operations without any issues.  
Both APIs can be combined, for example, to save the relevant data from the public API into the private one or even make combined requests to both.

You must choose an API from the proposals listed on [https://github.com/public-apis/public-apis](https://github.com/public-apis/public-apis) and publicly propose it to the instructor on The Fig Jam file.
[Fig Jam link](https://www.figma.com/board/1cIHZVs6HtAbxNT25xKhfF/Untitled?node-id=0-1&t=JwNKTV87YIDD0tqa-1)

---

## Requirements for the Application

1. Use the API to retrieve data, filtering by **three or more search parameters**. The functions to access the API must be created in a separated JS module.
2. Allow searches in **two categories** (e.g., characters and episodes for a Rick and Morty app).
3. Display results with **style**.
4. Implement at least **two levels of nested searches.**  
   For example, in a Rick and Morty app, a character's details would include episodes they appear in, with links redirecting to each episode's information.
5. Include **error handling** for the input form, if required by the search data.
6. Include **error handling** in case the HTTP request fails.
7. The application must be developed in a **private GitHub project**, where all team members and the instructor will have access.
8. Deliver a **practice report document** explaining how the chosen API was accessed, highlighting the most important functions of the application, and describing its functionality from a user perspective. The format should be a README.md in **markdown**.
9. The presentation will be conducted by all group members and should not exceed **10 minutes**.
   - Explain the key points from the submitted report:
     - Accessing the data API
     - Application programming
     - Functional examples
   - At the end, the instructor may ask questions about the application. For every question a group member fails to answer, **1 point will be deducted** from the presentation grade.

---

## Correction Rubric

### **Application Functionality**

**Maximum: 5 points**

1. Meets basic functions: data access, styled results display, and error checking.
2. Performs searches with three or more parameters.
3. Implements two types of searches.
4. Links results from one search to another.
5. Uses a private API.

### **Practice Report**

**Maximum: 2 points**  
The project will have a Markdown file containing the specified elements of the practice. Explaining how is connecting to the selected API and yor own if you created one, the different endpoint and so.
Also you have to specify the structure of the folders in the proyect and the purpose of each file.
The PDF must include a table at the end detailing the percentage of participation of each group member in both the practice and the documentation generation.

### **Presentation and Defense**

**Maximum: 3 points**  
The quality of the presentation will be evaluated.  
**1 point will be deducted** for each question a member fails to answer.
