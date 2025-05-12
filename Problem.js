// Problem 1 =====================
const people = [
    { name: "Alice", age: 25, gender: "female" },
    { name: "Bob", age: 30, gender: "male" },
    { name: "Clara", age: 28, gender: "female" },
    { name: "David", age: 35, gender: "male" },
];

function getMaleNames(persons) {
    return persons
        .filter((person) => person.gender !== "female")
        .map((person) => person.name);
}

const Pb1Result = getMaleNames(people);
console.log(Pb1Result);
// problem 2 ==========================
const books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];

function getBookTitles(bookList) {
    return bookList.map((book) => book.title);
}
const Pb2Result = getBookTitles(books);
console.log(Pb2Result); // Output: ['The Hobbit', 'To Kill a Mockingbird'

// Problem 4 ========================
const cars = [
    { make: "Toyota", model: "Camry", year: 2018 },
    { make: "Honda", model: "Civic", year: 2015 },
    { make: "Ford", model: "Mustang", year: 2020 },
    { make: "Tesla", model: "Model 3", year: 2019 },
];

function sortCarsByYear(carList) {
    return carList.sort((a, b) => a.year - b.year);
}

const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);


// problem 5 =================
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumEvenNumbers(arr) {
  return arr.reduce((sum, num) => {
    return num % 2 === 0 ? sum + num : sum;
  }, 0);
}

const Pb5Result = sumEvenNumbers(numbers);
console.log(Pb5Result); // Output: 30

// Problem 7 =====================
const unUniqueNumbers = [1, 2, 2, 3, 4, 4, 5, 1, 6];

function getUniqueNumbers(arr) {
  return [...new Set(arr)];
}

const uniqueNumbers = getUniqueNumbers(unUniqueNumbers);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5, 6]
