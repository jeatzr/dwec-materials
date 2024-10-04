const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((element) => element ** 2);

console.log(squaredNumbers);

const filteredNum = squaredNumbers.filter((num) => num % 3 == 0);

const filteredNumAlt = squaredNumbers.filter(function (num) {
  return num % 3 == 0;
});

const isDivisibleBy3 = function (num) {
  return num % 3 == 0;
}

const filteredNumAlt2 = squaredNumbers.filter(isDivisibleBy3);