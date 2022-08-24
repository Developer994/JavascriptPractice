'use strict';
// CLASS WORK

// // ARRAYS
// const y = new Array(1991, 1984, 2008, 2020);

// // To get the last element of the array:
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends[friends.length - 1]);

// // Your not friends with Michael, but now your new friend is Jay.
// friends[0] = 'Jay'; // Even though cannot replace primitive values of const, we can still replace a value inside an array
// console.log(friends);

// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(years[(1, 3, 4)]));

// Although we can replace a single element, what we can't do is the following:
// friends = ['bob', 'Alice'] <- As you can see, we can't replace the array's values by adding a new array block.

// // Basic Array Operations (Methods)
// // Add elements
// const friends = ['Michael', 'Steven', 'Peter'];
// friends.push('Jay'); //.push adds new value to the end of the array
// console.log(friends);

// friends.unshift('John');
// console.log(friends);

// // Remove elements
// friends.pop(); // last
// console.log(friends);

// friends.shift(); // first
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));

// // INTRODUCTION TO OBJECTS

// // Array recap:
// const rArray = [
//   'Rez',
//   'Atcha',
//   'student',
//   2022 - 1994,
//   ['Rick', 'Dane', 'Gordon'],
// ];

// const rez = {
//   firstName: 'Rez',
//   lastName: 'Atcha',
//   age: 28,
//   job: 'student',
//   friends: ['Rick', 'Dane', 'Gordon'],
// };

// // DOT VS BRACKET NOTATION

// const rez = {
//   firstName: 'Rezwan',
//   lastName: 'Atcha',
//   age: 28,
//   job: 'student',
//   friends: ['Rick', 'Dane', 'Gordon'],
// };

// // A way of searching for the property name:

// const nameKey = 'Name';
// console.log(rez['first' + nameKey]);
// console.log(rez['last' + nameKey]);

// // const interestedIn = prompt(
// //   'What do you want to know about rez? Choose between firstName, lastName, age, job and friends'
// // );

// // // console.log(interestedIn);

// // if (rez[interestedIn]) {
// //   console.log(rez[interestedIn]); // Do not do: rez.interestdIn, as there is no property called interestedIn.
// // } else {
// //   console.log(
// //     'Wrong request! Choose between firstName, lastName, age, job and friends'
// //   );
// // }

// rez.location = 'Canada';
// rez['facebook'] = 'rezmon';
// console.log(rez);

// // Small Challenge
// // Rez has 3 friends & his best friend is called Rick
// console.log(
//   `${rez.firstName} has ${rez.friends.length} and his best friend is called ${rez.friends[0]}`
// );
// console.log(rez.friends.length);

// OJBECT METHODS
// const rez = {
//   firstName: 'Rezwan',
//   lastName: 'Atcha',
//   birthYeah: 1994,
//   age: 28,
//   job: 'student',
//   friends: ['Rick', 'Dane', 'Gordon'],
//   hasDriversLicense: true,

//   calcAge: function () {
//     console.log(this); // 'this' points to 'rez'
//     return 2037 - this.birthYeah;
//   },
//   // small challenge
//   // Rezwan is a 28-year old student, and he has a/no driver's license.

//   getSummary: function () {
//     return `${this.firstName} is a ${this.age}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
//   },
// };

// console.log(rez.getSummary());
// console.log(rez.calcAge());

// // ITERATION: THE FOOR LOOP
// // for loop running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repitition ${rep}`);
// }
// // LOOPING ARRAYS, BREAKING AND CONTINUING
// const types = [];
// const rArray = [
//   'R',
//   'A',
//   2022 - 1994,
//   'student',
//   ['Rick', 'Dane', 'Gordon'],
//   true,
// ];

// for (let i = 0; i < rArray.length; i++) {
//   // Reading from Rezwans array
//   console.log(rArray[i], typeof rArray[i]);
//   // types[i] = typeof rArray[i];

//   types.push(typeof rArray[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// // continue and break
// console.log('--- ONLY STRINGS ---');
// for (let i = 0; i < rArray.length; i++) {
//   if (typeof rArray[i] !== 'string') continue;
//   console.log(rArray[i], typeof rArray[i]);
// }

// console.log('--- BREAK WITH NUMBER ---');
// for (let i = 0; i < rArray.length; i++) {
//   if (typeof rArray[i] === 'number') break;
//   console.log(rArray[i], typeof rArray[i]);
// }

// // LOOPING BACKWARDS AND LOOPS IN LOOPS

// const rArray = [
//   'R',
//   'A',
//   'student',
//   2022 - 1994,
//   ['Rick', 'Dane', 'Gordon'],
//   true,
// ];
// //

// for (let i = rArray.length - 1; i >= 0; i--) {
//   console.log(i, rArray[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`------- Starting exercise ${exercise}
//   `);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise} Lifting weight repitition ${rep}
//     `);
//   }
// }

// // THE WHILE LOOP
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repitition: ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repitition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log('Loop is about to end...');
// }

// let upToSix = 0;

// while (upToSix < 6) {
//   upToSix++;
//   console.log(upToSix);
// }
