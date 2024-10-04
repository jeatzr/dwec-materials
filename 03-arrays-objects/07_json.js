// Object with multiple attributes, including an array of objects
let user = {
  name: "John Doe",
  age: 35,
  address: {
    street: "Main Street",
    city: "New York",
    country: "USA",
  },
  orderHistory: [
    { id: 1, product: "Smartphone", quantity: 1 },
    { id: 2, product: "Tablet", quantity: 2 },
    { id: 3, product: "Laptop", quantity: 1 },
  ],
};

// Convert to JSON using JSON.stringify()
let jsonUser = JSON.stringify(user);

console.log("Object converted to JSON:");
console.log(jsonUser);

// Convert back to object using JSON.parse()
let parsedObject = JSON.parse(jsonUser);

console.log("\nJSON converted back to object:");
console.log(parsedObject);
