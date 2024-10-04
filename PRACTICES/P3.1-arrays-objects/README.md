# **Practice 3.1 - Arrays, Objects, Classes, and Modules**

### 2DAW - DWEC Bilingual. 



> **Student Name**:  


## **Objective**

In this activity, you'll practice using JavaScript arrays, objects, and methods such as `map`, `filter`, and serialization (`JSON.stringify`/`JSON.parse`). We'll also introduce you to classes and how to organize code using modules in Node.js.

You will write functions to manipulate an array of student objects and explore real-world data operations.

---

## **Step 1: Setting Up the Project**

1. **Create the following files** in your project directory:
   - `StudentCollection.js` (to store the class with all methods)
   - `app.js` (to execute the code)
   - `package.json` (with `type` set to `module` for using ES modules)


2. **In your `package.json`**, add:

   ```json
   {
     "type": "module"
   }
   ```

  This allows you to use the modern import and export syntax instead of require.

## **Step 3: The StudentCollection Class**

In `StudentCollection.js`, define a class StudentCollection that will handle various operations related to a collection of students. The student collection have a property called `students` that stores an array of students.  We have to implement this methods:

1. `constructor`: Recieve an array of initial students and asign to the internal array. 
1. `addStudent`: Adds a new student object to the students array.
2. `getStudentByName`: Return a student by name.
3. `removeStudentByName`: Removes a student by filtering out their name from the array.
4. `updateStudentGrades`: Finds a student by name and updates their grades.
5. `calculateAverageGrade`: Returns the average of a student's grades with a given name
6. `getEnrolledStudents`: Returns an array of students who are enrolled.
7. `getStudentsAboveAge`: Returns students older than a given age.
8. `getTopStudent`: Finds the student with the highest average grade.
9. `getStudentSummaries`: Maps the students into a summary object with name and average grade.
10. `getTopStudents`: Filters students by a grade threshold.
11. `getEnrolledStudentNames`: Filters enrolled students and returns an array of their names.
12. `formatGrades`: Returns an array of strings formatting each student's grades.
13. `getHonorRollStudents`: Filters students whose average grade is 90 or above.
14. `serializeStudents`: Converts the students array to a JSON string.
15. `deserializeStudents`: Converts a JSON string back into the students array.


    ```js

    // StudentCollection.js
    export default class StudentCollection {
      constructor(students = []) {
        this.students = students;
      }

      // implement methods here 

    }
    ```

## **Step 4: Using the Class in `app.js`**

In the main file app.js, import the StudentCollection class and perform various operations on the student data.

      ```js
      // app.js
      import StudentCollection from './StudentCollection.js';

      //  Initialize the collection with some students
      const students = [
        { name: "John Doe", age: 18, grades: [88, 92, 76], isEnrolled: true },
        { name: "Jane Smith", age: 20, grades: [95, 85, 90], isEnrolled: true },
        { name: "Sam Green", age: 22, grades: [70, 75, 80], isEnrolled: false },
        { name: "Alice Brown", age: 19, grades: [90, 91, 89], isEnrolled: true },
      ];

      //  Create a new StudentCollection object
      const studentCollection = new StudentCollection(students);

      // Find a student by name and show in the screen



      // Add a new student
      studentCollection.addStudent("Emily White", 21, [88, 90, 92], true);

      // Find the top student based on grades
      const topStudent = studentCollection.getTopStudent();
      console.log("Top student:", topStudent);


      // TASK: test all the methods you have created:



      // Serialize the students to JSON
      const serializedData = studentCollection.serializeStudents();
      console.log("Serialized Data:", serializedData);


      //  Deserialize the JSON back into the collection
      studentCollection.deserializeStudents(serializedData);
      console.log("Deserialized Data:", studentCollection.students);
      ```

