class Car {
  constructor(brand, model) {
    this._brand = brand;
    this._model = model;
    this._mileage = 0;
  }

  // Regular method
  drive(distance) {
    this.mileage += distance;
    console.log(`Driving ${distance} miles in ${this.brand} ${this.model}.`);
  }

  // Getter method
  get mileage() {
    return this._mileage;
  }

  get brand() {
    return this._brand;
  }

  // Setter method
  set mileage(value) {
    if (value >= 0) {
      this._mileage = value;
    } else {
      console.error("Mileage cannot be negative.");
    }
  }
}

// Create an instance of Car
const myCar = new Car("Toyota", "Corolla");

// Call regular method to drive
myCar.drive(50);
myCar.drive(30);

// Access mileage using getter method
console.log(`Total mileage: ${myCar.mileage} miles.`);
console.log(`Brand: ${myCar.brand}`);
