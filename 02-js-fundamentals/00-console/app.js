alert("Hi there!"); // alert dialog

console.log("Hello World!"); // general message
console.info("This is an info message"); // info message

// debugger; // Execution will stop for debugging

console.warn("Be careful!!"); // warning message
console.error("Fatal Error"); //error message

let userInput = prompt("Please enter your name:");
console.log("User entered: " + userInput);

let userConfirmed = confirm("Do you really want to delete this item?");
if (userConfirmed) {
  console.log("User confirmed the action.");
} else {
  console.log("User canceled the action.");
}
