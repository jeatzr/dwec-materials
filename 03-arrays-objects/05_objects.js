// Create an empty object using the Object constructor
const myCar = new Object();

// Add properties to the object
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

// Access properties
console.log(`Make: ${myCar.make} Model: ${myCar.model}`);

for (prop in myCar) {
  console.log(`${prop}: ${myCar[prop]}`);
}

// Create an object with literal notation
const myCar2 = {
  make: "Seat",
  model: "600",
  year: "1965",
};

// Access properties
console.log(`Make: ${myCar2.make} Model: ${myCar2.model}`);
