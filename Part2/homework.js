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

// // LECTURE: Introduction to Objects
// // 1. Create an object called 'myCountry' for a country of your choice, containing
// // properties 'country', 'capital', 'language', 'population' and
// // 'neighbours' (an array like we used in previous assignments)

// const myCountry = {
//   country: 'Canada',
//   capital: 'Ottawa',
//   languages: ['English', 'French'],
//   population: 39000000,
//   neighbours: ['USA', 'Alaska'],
// };

// // LECTURE: Iteration: The for Loop
// // 1. There are elections in your country! In a small town, there are only 50 voters.
// // Use a for loop to simulate the 50 people voting, by logging a string like this to
// // the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting`);
// }

// // LECTURE: Looping Arrays, Breaking and Continuing
// // 1. Let's bring back the 'populations' array from a previous assignment
// // 2. Use a for loop to compute an array called 'percentages2' containing the
// // percentages of the world population for the 4 population values. Use the
// // function 'percentageOfWorld1' that you created earlier
// // 3. Confirm that 'percentages2' contains exactly the same values as the
// // 'percentages' array that we created manually in the previous assignment,
// // and reflect on how much better this solution is

// // The countries population in millions

// const populations = [38, 329, 39, 54];

// function percentageOfWorld1(countryPopulation) {
//   return (countryPopulation / 7900) * 100;
// }

// const percentages2 = [];

// for (let i = 0; i < populations.length; i++) {
//   const currentPop = percentageOfWorld1(populations[i]);
//   percentages2.push(currentPop);
// }
// console.log(percentages2);

// // LECTURE: Looping Backwards and Loops in Loops
// // 1. Store this array of arrays into a variable called 'listOfNeighbours'
// // [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// // 2. Log only the neighbouring countries to the console, one by one, not the entire
// // arrays. Log a string like 'Neighbour: Canada' for each country
// // 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
// // worry if it's too difficult for you! But you can still try to figure this out anyway

// const listOfNeighbours = [
//   ['Canada', 'Mexico'],
//   ['Spain'],
//   ['Norway', 'Sweden', 'Russia'],
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let y = 0; y < listOfNeighbours[i].length; y++) {
//     console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
//   }
// }

// // LECTURE: The while Loop
// // 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
// // but this time using a while loop (call the array 'percentages3')
// // 2. Reflect on what solution you like better for this task: the for loop or the while
// // loop?

// // The countries population in millions

// const populations = [38, 329, 39, 54];

// function percentageOfWorld1(countryPopulation) {
//   return (countryPopulation / 7900) * 100;
// }

// const percentages3 = [];

// let i = 0;

// while (i < populations.length) {
//   percentages3.push(percentageOfWorld1(`${populations[i]}`));
//   console.log(`Percentage ${i}: ${percentages3}`);
//   i++;
// }
