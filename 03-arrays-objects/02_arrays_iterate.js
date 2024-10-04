const fruits = ["Apple", "Banana", "Cherry", "Date"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output:
// Apple
// Banana
// Cherry
// Date

for (const fruit of fruits) {
  console.log(fruit);
}
// Output:
// Apple
// Banana
// Cherry
// Date

for (const index in fruits) {
  console.log(fruits[index]);
}
// Output:
// Apple
// Banana
// Cherry
// Date

fruits.forEach((fruit, index) => {
  console.log(index + ": " + fruit);
});
// Output:
// 0: Apple
// 1: Banana
// 2: Cherry
// 3: Date
