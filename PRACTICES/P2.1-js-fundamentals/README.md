# Practice 2.1 - JS Fundamentals

### 2DAW - DWEC Bilingual. 

> **Student Name**:  

#### Files included in this repository:

Ennumerate and explain each one of the files included in this repo.

- File 1
- File 2
- Etc...

#### Instructions: 

- You have to create one `js` or `html` file per each proposed exercise. 

- Some exercises can be solved in a `js` file ready to be executed with `node.js`. We won’t need the browser in that case, just to be focused in JS without any interaction with the user. 

- In case we need interaction with the user we will create an `html` file with the internal JavaScript code. 


**Exercises**

1. `01_fizzBuzz.js` Write a function that prints numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
   
2. `02_untilAdult.html` Write a program that repeatedly ask the user for their age until they enter a valid adult age (18 or older). The program should continue asking if the age entered is below 18. Control also if the user input a `NaN` value. 

      Once the user has entered you can display a message in the document just modifying the `innerHTML` property of a simple div container
      
      * html:
      ```html
      <div id="container"></div>
      ```

      * JavaScript:
      ```js
      const container = document.getElementById("container");
      container.innerHTML = "<h1>Welcome to my awesome website for adult people</h1>";
      ```
   
3. `03_random.js` Create one arrow function that generates a random number between a minimum and a maximum given number. Use it to calculate 10 random numbers between:

    - 0 and 99999
    - 10 and 40
    - 18 and 90
    - 1980 and 2020
  
4. `04_lottery.js` Use the previous function to calculate 10 different lottery numbers of 5 cyphers each. 
   
5. `05_getDate.js` Write an arrow function that returns the current date and time in the format `YYYY-MM-DD HH:MM:SS`.
   
6. `06_daysBetweenDates.js` Write a normal function that calculates the number of days between two given dates.
   
7. `07_leapYear.js` Write an arrow function that checks if a given year is a leap year.
   
8. `08_calculateAge.js`: Write a function that calculates the age of a person based on their birthdate.
   
9.  `09_message.js` Write a function that takes a name and a favorite color as arguments and returns a sentence like:
    
        `"Hello [name], your favorite color is [color]!"`

    Use template literals to solve this exercise. 

10. `10_multiplicationTable.js` Write a function that prints the multiplication table of a given number. For example, for the number 5:

    ```
    5 x 1 = 5
    5 x 2 = 10
    5 x 3 = 15
    ...
    5 x 10 = 50
    ```

    Use the created function to print the multiplication table of several numbers. If you want to print the multiplication table for numbers from 1 through 10. 


#### Extra exercise

11. `11_secondsToEndOfCourse.js` Create an script that shows a message in the console every second like this:

    ```
    Seconds remaining to the end of the course: 198221312
    Seconds remaining to the end of the course: 198221311
    ...
    ```