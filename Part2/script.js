'use strict';

// HOME WORK
//
// // LECTURE: Functions
// // 1. Write a function called 'describeCountry' which takes three parameters:
// // 'country', 'population' and 'capitalCity'. Based on this input, the
// // function returns a string with this format: 'Finland has 6 million people and its
// // capital city is Helsinki'
// // 2. Call this function 3 times, with input data for 3 different countries. Store the
// // returned values in 3 different variables, and log them to the console

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its
//   capital city is ${capitalCity}`;
// }

// const Finland = describeCountry('Finland', 6, 'Helinski');
// const Canada = describeCountry('Canada', 3, 'Ottawa');
// const England = describeCountry('England', 12, 'London');
// console.log(Finland, Canada, England);

// // LECTURE: Function Declarations vs. Expressions
// // 1. The world population is 7900 million people. Create a function declaration
// // called 'percentageOfWorld1' which receives a 'population' value, and
// // returns the percentage of the world population that the given population
// // represents. For example, China has 1441 million people, so it's about 18.2% of
// // the world population
// // 2. To calculate the percentage, divide the given 'population' value by 7900
// // and then multiply by 100
// // 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// // store the results into variables, and log them to the console
// // 4. Create a function expression which does the exact same thing, called
// // 'percentageOfWorld2', and also call it with 3 country populations (can be
// // the same populations)

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// let chinaPop = percentageOfWorld1(1441);
// console.log(`${chinaPop}%`);

// let canadaPop = percentageOfWorld1(3);
// console.log(`${canadaPop}%`);

// let usaPop = percentageOfWorld1(6);
// console.log(`${usaPop}%`);

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };

// chinaPop = percentageOfWorld2(1441);

// canadaPop = percentageOfWorld2(4);

// usaPop = percentageOfWorld2(6);
// console.log(chinaPop, canadaPop, usaPop);

// // LECTURE: Arrow Functions
// // 1. Recreate the last assignment, but this time create an arrow function called
// // 'percentageOfWorld3'

// const percentageOfWorld3 = (population) => (population / 7900) * 100;
// const chinaPop3 = percentageOfWorld3(1300);

// const canadaPop3 = percentageOfWorld3(2);

// const usaPop3 = percentageOfWorld3(4);

// console.log(chinaPop3, canadaPop3, usaPop3);

// // LECTURE: Functions Calling Other Functions
// // 1. Create a function called 'describePopulation'. Use the function type you
// // like the most. This function takes in two arguments: 'country' and
// // 'population', and returns a string like this: 'China has 1441 million people,
// // which is about 18.2% of the world.'
// // 2. To calculate the percentage, 'describePopulation' call the
// // 'percentageOfWorld1' you created earlier
// // 3. Call 'describePopulation' with data for 3 countries of your choice

// function describePopulation(country, population) {
//   const countryPercent = percentageOfWorld1(population);
//   return `${country} has ${population} million people,
//     // which is about ${countryPercent}% of the world.`;
// }

// function percentageOfWorld1(countryPopulation) {
//   return (countryPopulation / 7900) * 100;
// }

// console.log(percentageOfWorld1(3));

// console.log(describePopulation('Canada', 3));
// console.log(describePopulation('China', 1441));
// console.log(describePopulation('USA', 332));

// // LECTURE: Functions Calling Other Functions
// // 1. Create a function called 'describePopulation'. Use the function type you
// // like the most. This function takes in two arguments: 'country' and
// // 'population', and returns a string like this: 'China has 1441 million people,
// // which is about 18.2% of the world.'
// // 2. To calculate the percentage, 'describePopulation' call the
// // 'percentageOfWorld1' you created earlier
// // 3. Call 'describePopulation' with data for 3 countries of your choice

// //FUNCTIONS CALLING OTHER FUNCTIONS

// // IMPORTANT!: Review this section in the course if you are having a hard time with functions!

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// // LECTURE: Introduction to Arrays
// // 1. Create an array containing 4 population values of 4 countries of your choice.
// // You may use the values you have been using previously. Store this array into a
// // variable called 'populations'
// // 2. Log to the console whether the array has 4 elements or not (true or false)
// // 3. Create an array called 'percentages' containing the percentages of the
// // world population for these 4 population values. Use the function
// // 'percentageOfWorld1' that you created earlier to compute the 4
// // percentage values

// // The countries population in millions
// const Canada = 38;
// const USA = 329;
// const Afghanistan = 39;
// const Burma = 54;

// const populations = [Canada, USA, Afghanistan, Burma];
// console.log(populations.length === 4);

// function percentageOfWorld1(countryPopulation) {
//   return (countryPopulation / 7900) * 100;
// }

// const percentages = [
//   percentageOfWorld1(Canada),
//   percentageOfWorld1(USA),
//   percentageOfWorld1(Afghanistan),
//   percentageOfWorld1(Burma),
// ];

// console.log(percentages);

// // LECTURE: Basic Array Operations (Methods)
// // 1. Create an array containing all the neighbouring countries of a country of your
// // choice. Choose a country which has at least 2 or 3 neighbours. Store the array
// // into a variable called 'neighbours'
// // 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
// // your selected country. So add it to the end of the 'neighbours' array
// // 3. Unfortunately, after some time, the new country is dissolved. So remove it from
// // the end of the array
// // 4. If the 'neighbours' array does not include the country ‘Germany’, log to the
// // console: 'Probably not a central European country :D'
// // 5. Change the name of one of your neighbouring countries. To do that, find the
// // index of the country in the 'neighbours' array, and then use that index to
// // change the array at that index position. For example, you can search for
// // 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

// const neighbours = [
//   'Canada',
//   'USA',
//   'Brazil',
//   'Jamaica',
//   'Guyanna',
//   'Trinidad',
//   'Tobago',
// ];

// console.log(neighbours);
// neighbours.push('Utopia');
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes('Germany')) {
//   console.log('Probably not an American country :D');
// }

// console.log(neighbours.indexOf('Brazil'));
// neighbours[2] = 'Argentina'; // OR you can do: neighbours[neighbours.indexOf('Brazil')] = 'Argentina';
// console.log(neighbours);
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

// INTRODUCTION TO OBJECTS

// Array recap:
const rezArray = [
  'Rez',
  'Atcha',
  'student',
  2022 - 1994,
  ['Rick', 'Dane', 'Gordon'],
];

const rez = {
  firstName: 'Rez',
  lastName: 'Atcha',
  age: 28,
  job: 'student',
  friends: ['Rick', 'Dane', 'Gordon'],
};
// CHALLENGE WORK
// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores

// Arrow function example:
// const calcAge3 = birthYeah => 2037 - birthYeah;

// // DATA 1

// const calcAverage = (value1, value2, value3) => (value1 + value2 + value3) / 3;
// console.log(calcAverage(3, 4, 5));

// const avgDolphins1 = calcAverage(44, 23, 71);
// console.log(`Dolphins avg 1: ${avgDolphins1}`);
// const avgKoalas1 = calcAverage(65, 54, 49);
// console.log(`Koalas avg 1: ${avgKoalas1}`);

// const avgDolphins2 = calcAverage(85, 54, 41);
// console.log(`Dolphins avg 2: ${avgDolphins2}`);
// const avgKoalas2 = calcAverage(23, 34, 27);
// console.log(`Koalas avg 2: ${avgKoalas2}`);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log('Dolphins won!');
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log('Koalas won!');
//   } else {
//     console.log('No team won');
//   }
// }

// const avg1 = checkWinner(avgDolphins1, avgKoalas1);
// const avg2 = checkWinner(avgDolphins2, avgKoalas2);

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array)

// tip = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.2;
// console.log(tip);
// const finalValue = bill3 + tip;
// console.log(finalValue);
// console.log(`The bill was ${bill3}, the tip was ${tip}, and the total value
// ${finalValue}`);

// const billValue = 500;
function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

// calcTip(100);

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);
