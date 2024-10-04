const fruits = ["Apple", "Banana"];
fruits.push("Cherry");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

const lastFruit = fruits.pop();
console.log(lastFruit); // Output: Cherry
console.log(fruits); // Output: ["Apple", "Banana"]

const firstFruit = fruits.shift();
console.log(firstFruit); // Output: Apple
console.log(fruits); // Output: ["Banana"]

fruits.unshift("Apple");
console.log(fruits); // Output: ["Apple", "Banana"]

const moreFruits = ["Cherry", "Date"];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ["Apple", "Banana", "Cherry", "Date"]

console.log(fruits);

const someFruits = allFruits.slice(1, 3);
console.log(someFruits); // Output: ["Banana", "Cherry"]
console.log(allFruits);

allFruits.splice(2, 1, "Blueberry");
console.log(allFruits); // Output: ["Apple", "Banana", "Blueberry", "Date"]

let fruit = "Apple";

const index = allFruits.indexOf(fruit);

if (index >= 0) {
  console.log(`${fruit} is at index:  ${index}`);
} else {
  console.log(`there is no ${fruit} in the collection`);
}

const upperCaseFruits = allFruits.map(function (fruit) {
  return fruit.toUpperCase();
});
console.log(upperCaseFruits); // Output: ["APPLE", "BANANA", "BLUEBERRY", "DATE"]

const longNamedFruits = allFruits.filter(function (fruit) {
  return fruit.length > 5;
});
console.log(longNamedFruits); // Output: ["Banana", "Blueberry"]
