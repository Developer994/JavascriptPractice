'use strict';
// // CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //   Never do this
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// const rez = new Person('Rez', 1994);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically returns {}

// const matilda = new Person('Matilda', 1990);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// const jay = 'Jay';

// console.log(rez instanceof Person);
// console.log(jay instanceof Person);

// // PROTOTYPES

// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// rez.calcAge();

// console.log(rez.__proto__); // The new operator performs step 3. (links the empty new object {} to prototype), hence, creating .__proto__ and setting it's value to the prototype property of the function being called.
// console.log(rez.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(rez)); // true
// console.log(Person.prototype.isPrototypeOf(matilda)); // true
// console.log(Person.prototype.isPrototypeOf(Person)); // false

// // prototype -> prototype of the linked objects

// Person.prototype.species = 'Homo Sapiens';
// console.log(rez.species, matilda.species);

// // Checking own properties, not including inherited properties:

// console.log(rez.hasOwnProperty('firstName'));
// console.log(rez.hasOwnProperty('species'));

// // PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS

// console.log(rez.__proto__);
// // Object.prototype (top of the chain )
// console.log(rez.__proto__.__proto__); // This is the prototype for the constructor object
// console.log(rez.__proto__.__proto__.__proto__); // This will give you null in the console

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 6, 5, 6, 9, 9];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);
// // Adding a method to the Array prototype
// Array.prototype.unique = function () {
//   return [...new Set(this)]; // 'Set' sets unique values, so the duplicates are removed.
// };

// console.log(arr.unique());

// // const h1 = document.querySelector('h1');
// // console.dir(h1);
// console.dir(x => x + 1);

// ES6 CLASSES
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

// 1. Classes are not hoisted
// 2. Classes are first-classed citizens
// 3. Classes are executed in strict mode
