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

// // FUNCTION RETURNING FUNCTIONS

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas');

// const greet2 = greeting => name => {
//   console.log(`${greeting} ${name}`);
// };

// const greet2Exec = greet2('Hi')('Rezonator');

// // THE CALL AND APPLY METHODS

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LM',
//   bookings: [],
//   // The below is the equivalent of book: function() {}
//   book(flightNum, name) {
//     console.log(`${name} booked a seat on ${this.iataCode}${flightNum}`);
//     this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Rez Onator');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // The bottom is now a regular function call and no longer the method inside the lufthansa object.
// // So, the following does NOT work:
// // book(23, 'Henrickton Josephine');

// // The first arugment of the call method (in this case is eurowing) will always be the 'this' keyword.
// // Rest of the arguments are just the arguments of the original function.
// // Call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 39, 'Greg Heinz');
// book.call(swiss, 54, 'Aiden Tans');
// console.log(swiss);

// // Apply method
// const flightData = [584, 'George Copper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// // With modern Javascript, you don't need apply but just simply use the spread method.
// book.call(swiss, ...flightData);

// // THE BIND METHOD
// // Bind method
// const bookEw = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEw(28, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23); // Here, whatever is put inside the parentasis of book.bind() will become constant & wont change even if you call with a different value.
// bookEW23('Rez Onator'); // As seen here, a person can only enter their name, because the airline and number are permanent.
// bookEW23('Markus Cooper');

// // With Event listeners

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   // In this situation, the 'this' keyword is the button 'Buy new plane' that has the class 'buy'.
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// // lufthansa.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVAT = value => value + value * 0.23; <- The above 'addVAT' function looks like this now

// console.log(addVAT(100));

// const addTax2 = rate => value => {
//   const calculation = value + value * rate;
//   return calculation;
// };

// const addTaxExec = addTax2(0.23);
// console.log(addTaxExec(100));

// // Some practice with Bind method

// const photoId = {
//   company: 'Photolay',
//   type: 'RX',
//   photoList: [],
//   date: 'Sept, 1,',
//   newId(year, name) {
//     console.log(
//       `Photo id for ${name}, for the year ${year}, and type ${this.type}`
//     );
//     this.photoList.push({
//       idAdded: `${this.date}`,
//       currentType: `${this.type}`,
//       name,
//     });
//   },
// };

// photoId.newId(2022, 'Ross');

// const newId = photoId.newId

// // CLOSURES
// // A closure is basically the type of function that continues it's process, even after it's called
// // It can be called numerous times, and it will continue where it left off.
// // A REGULAR FUNCTION WILL GET CALLED AND THEN POPPED OFF THE CALL STACK, BUT
// // CLOSURES WILL CONTINUE TO KEEP WORKING.
// // It's practical to assign the closure function to a constant, and call the
// // constant, as shown below, and the function will continue the operation of the function,
// // as shown below (e.g. in the console, you will see the passengerCount will keep increasing,
// // instead of just being called once. So it will not remain 'passenger = 1' for all the iterations.)
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

// // MORE CLOSURE EXAMPLES

// // Example 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// // f is assigned by g
// g();
// f();

// // Now, f is reassigned by h
// h();
// f();
// console.dir(f);

// // Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups each with ${perGroup} passengers.`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);

// CODING CHALLENGE 2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
