// Function A takes function B as a callback parameter
function A(callback) {
  // Function A's logic
  console.log("Inside function A");

  // Invoke the callback function B
  callback(7);
}

// Function B (callback function)
function B(num) {
  console.log("Callback function B executed, number: " + num);
}

// Call function A and pass function B as a callback
A(B);
