// declare a function as an expression (lambda)
// you have to declare before it is called
const mult = function (a, b = 1) {
  return a * b;
};

let result = add(4, 6);
let result2 = add(5);

console.log(result, result2);

console.log(mult(3, 5));

// classical way to define a function
// you can even call the function before the declaration in the script
function add(a, b = 0) {
  return a + b;
}

// arrow function
/*
const division = function (a, b) {
  return a / b;
};
*/
const division = (a, b) => a / b;

console.log(division(10, 5));

// callback should be a function
function A(callback) {
  console.log("I'm executing function A that is going to execute a callback");
  callback();
}

function B() {
  console.log("I'm function B!!!!");
}

A(() => console.log("I'm a callback!!"));
A(B);
