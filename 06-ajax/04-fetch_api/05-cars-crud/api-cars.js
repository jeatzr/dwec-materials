// api-cars.js
const URLCars = 'http://localhost:3000/cars';

export async function createCar(car) {
  try {
    const response = await fetch(URLCars, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(car)
    });
    if (!response.ok) {
      throw new Error('Error: Failed to add car.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw "Error: " + error;
  }
}