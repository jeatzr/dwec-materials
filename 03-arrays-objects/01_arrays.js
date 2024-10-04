const a1 = new Array(); // New empty array
console.log(a1.length);

const a2 = new Array(4); // New array with 4 elements

// New array with 3 defined elements
const artist = new Array("Michael Jackson", "Taylor Swift", "David Bowie");

// Fill a1 new array with random values
for (let i = 0; i < 10; i++) {
  a1[i] = Math.random();
}

// Showing length and array
console.log(a1.length);
console.log(a2.length);
console.log(artist.length);
console.log(a1);
console.log(a2);
console.log(artist);

console.log(a1[2]);
console.log(a2[2]);
console.log(artist[2]);

// Declare an array
const colors = ["Red", "Green", "Blue", "Yellow"];

// Access elements by index
console.log(colors[0]); // Output: Red
console.log(colors[1]); // Output: Green
console.log(colors[2]); // Output: Blue
console.log(colors[3]); // Output: Yellow

// Access the last element using the length property
console.log(colors[colors.length - 1]); // Output: Yellow

// Modify an element by index
colors[1] = "Purple";
console.log(colors); // Output: ["Red", "Purple", "Blue", "Yellow"]

function callbackColors(color, index) {
  console.log(index + ": " + color);
}

// Loop through the array to access each element
colors.forEach(callbackColors);
// Output:
// 0: Red
// 1: Purple
// 2: Blue
// 3: Yellow
