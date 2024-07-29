import { createCar } from './api-cars.js';

const message = document.getElementById('message')
const carForm = document.getElementById('carForm');

carForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const car = {
    make: formData.get('make'),
    model: formData.get('model'),
    year: formData.get('year'),
    color: formData.get('color'),
    price: formData.get('price')
  };

  console.log(car);

  createCar(car).then(data => {
    console.log(data);
    message.textContent = 'Car added successfully!';
    message.classList.remove('error');
    message.classList.add('success');
    debugger;
    document.getElementById('carForm').reset();
  }).catch(error => {
    console.log(error);
    message.textContent = error.message;
    message.classList.remove('success');
    message.classList.add('error');
  })
  /*
    const result = await createCar(car);
    message.textContent = 'Car added successfully!';
    message.classList.remove('error');
    message.classList.add('success');
    document.getElementById('carForm').reset();
  } catch (error) {
    message.textContent = error.message;
    message.classList.remove('success');
    message.classList.add('error');
  }*/
  //console.log("Hi!")


  //message.textContent = 'Car added successfully!';
  //message.classList.remove('error');
  //message.classList.add('success');
  //document.getElementById('carForm').reset();
  debugger;
});