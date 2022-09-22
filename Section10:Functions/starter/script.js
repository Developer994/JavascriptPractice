'use strict';
// // HOW PASSING ARGUMENTS WORK: VALUE VS REFERENCE

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// // // flightNum = flight;
// // const flightNum = flight;
// // const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// FUNCTIONS ACCEPTING CALLBACK FUNCTIONS

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
//   // .name is a built-in function
// };

// transformer('Javascript is the best!', upperFirstWord);

// transformer('Javascript is the best!', oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log('👋');
// };
// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// Some side work I did to understand a curried function:

// const addCustomer =
//   fn =>
//   (...args) => {
//     console.log('Saving customer info');
//     return fn(...args);
//   };

// const processOrder =
//   fn =>
//   (...args) => {
//     console.log(`processing order #${args}`);
//     return fn(...args);
//   };

// let completeOrder = (...args) => {
//   console.log(`Order #${[...args].toString()} completed.`);
// };

// completeOrder = processOrder(completeOrder);
// // console.log(completeOrder);
// completeOrder = addCustomer(completeOrder);
// completeOrder('1000');

// REVISITING SPREAD OPERATOR
// const list = [
//   'Bread',
//   'Chips',
//   'Milk',
//   'Peanut Butter',
//   'Margarine',
//   'Veg Oil',
//   'Noodles',
//   'Bananas',
// ];

// const updatedList = ['Croissant', 'Balogna', ...list];
// console.log(...updatedList);
// // console.log([...updatedList]);

// PASSING A FUNCTION AS AN ARGUMENT TO ANOTHER FUNCTION
// function foo(x, y, z) {
//   console.log(b);
// }
// var a = (g, h, i) => {
//   console.log('This is a', g, h, i);
//   return 'This is the return value of a ';
// };
// // a(100, 200, 300);

// var b = 10;
// var c = 20;
// var d = () => {
//   console.log('I am here.');
// };

// foo(d, b, c);

// const line = function (str) {
//   const firstLetterRemovedAndLowerCased = str.toLowerCase().substring(1);
//   const firstUpper = str.charAt(0).toUpperCase();
//   return firstUpper + firstLetterRemovedAndLowerCased;
// };

// function textToBeChanged(str, fn) {
//   console.log(`The old line: ${str}`);
//   console.log(`The new line: ${fn(str)}`);
//   console.log(`The function's name is: ${fn.name}`);
// }

// textToBeChanged(
//   "HEY, THIS LINE NEEDS TO BE LOWER CASED, SO PLEASE DO SO IF IT ISN'T.",
//   line
// );

// // Practice: rounding a list of numbers in an array

// // Lower-Order Function
// const rounded = function (nums) {
//   let roundedNums = [' '];
//   for (let i = 0; i < nums.length; i++) {
//     roundedNums += `${i + 1}. ` + Math.round(nums[i]) + '  ';
//   }
//   return roundedNums;
// };

// // Higher-Order function
// const string = function (nums, fn) {
//   console.log(`The numbers were: ${nums}`);
//   console.log(`They were rounded to: ${fn(nums)}`);
// };

// string([32.4, 32.9, 51.5, 94.3], rounded);

// FUNCTION RETURNING FUNCTIONS

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

const greet2 = greeting => name => {
  console.log(`${greeting} ${name}`);
};

const greet2Exec = greet2('Hi')('Rezonator');

// THE CALL AND APPLY METHODS

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LM',
  bookings: [],
  // The below is the equivalent of book: function() {}
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(239, 'Rez Onator');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// The bottom is now a regular function call and no longer the method inside the lufthansa object.
// So, the following does NOT work:
// book(23, 'Henrickton Josephine');

// The first arugment of the call method (in this case is eurowing) will always be the 'this' keyword.
// Rest of the arguments are just the arguments of the original function.
// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 39, 'Greg Heinz');
book.call(swiss, 54, 'Aiden Tans');
console.log(swiss);

// Apply method
const flightData = [584, 'George Copper'];
book.apply(swiss, flightData);
console.log(swiss);

// With modern Javascript, you don't need apply but just simply use the spread method.
book.call(swiss, ...flightData);
