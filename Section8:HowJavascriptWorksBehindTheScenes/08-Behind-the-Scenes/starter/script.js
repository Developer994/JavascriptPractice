'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear === 1986 && birthYear === 1991) {
//       const str = `${firstName}, you're a millenial!`;
//       console.log(str);
//     }
//   }
//   printAge();

//   return age;
// }

// const firstName = 'R';
// calcAge(1991);

// // Hoisting & TDZ Practice
// // Variable hoisting
// // console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// // Functions
// // console.log(addDecl(2, 3));
// // console.log(addExpr(3, 4));
// // console.log(addArrow(4, 5));

// function addDecl(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // Example
// // if (!numProducts) deleteShoppingCart(); // numProducts is undefined, so it equals to !numProducts

// let numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// // THIS KEYWORD

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   // console.log(this);
// };
// calcAge(1991);

// const calcArrowAge = birthYear => {
//   console.log(2037 - birthYear);
//   // console.log(this);
// };

// calcArrowAge(1991);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

// // REGULAR VS ARROW FUNCTIONS
// // let firstName = 'Matilda';

// const Ros = {
//   firstName: 'Ros',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // // Solution 1
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     //   //   console.log(this);
//     //   //   console.log(this.year >= 1981 && this.year <= 1996);
//     // };

//     // Solution 2

//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => {
//     console.log(this), console.log(`Hey, ${this.firstName}`);
//   },
// };
// // Ros.greet();
// // Ros.calcAge();

// // Arguments keyword
// var addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 4);
// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

// // PRIMITIVES VS OBJECTS (PRIMITIVE VS REFERENCE TYPES)
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Ros',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me', me);

// // PRIMITIVES VS OBJECTS Practice
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// const Jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };

// const marriedJessica = Jessica;
// marriedJessica.lastName = 'Davis';
// console.log(`Before marriage:`, Jessica);
// console.log(`After marriage:`, marriedJessica);

// // marriedJessica = {};
// // console.log(marriedJessica);

// // Copying objects
// const Jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };

// const jessicaCopy = Object.assign({}, Jessica2);
// jessicaCopy.lastName = 'Davis';

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Before marriage:', Jessica2);
// console.log('After marriage:', jessicaCopy);

const myName = 'Rez';

if (myName === 'Rez') {
  console.log(`Rez is a ${job}`);
  const age = 2022 - 1994;
  console.log(age);
  var job = 'student';
}
