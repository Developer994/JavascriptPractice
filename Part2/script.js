'use strict';
// CLASS WORK
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
// HOME WORK

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
