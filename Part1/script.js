// // HOME WORK
// const continent = 'North America';
// const language = ['English', 'French'];
// const myCountry = 'Canada';

// let population = 3000000;

// console.log(population / 2 / 2);

// const description = `${myCountry} is in ${continent}, and its ${population} people speak ${language}`;

// console.log(description);
// population++;
// console.log(population);

// let Finland = 6000000;
// console.log(population > Finland);

// let avg = 33000000;
// console.log(avg > population);

// // LECTURE: Strings and Template Literals
// const country = 'Canada';
// let population = 3000000;
// let average = 33000000;

// if (population > average) {
//   console.log(`My Country's population is above average`);
// } else {
//   const difference = average - population;
//   console.log(`${country}'s population is ${difference} below the average.`);
// }

// // LECTURE: Type Conversion and Coercion
// // 1. Predict the result of these 5 operations without executing them:
// // '9' - '5' = 4;
// // '19' - '13' + '17';
// // '19' - '13' + 17;
// // '123' < 57;
// // 5 + 6 + '4' + 9 - 4 - 2;
// // 2. Execute the operations to check if you were right
// console.log('9' - '5');
// console.log('19' - '13' + '17');
// console.log('19' - '13' + 17);
// console.log('123' < 57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);

// LECTURE: Equality Operators: == vs. ===
// 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country
// have?');
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// == for now)
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this
// situation

// var numNeighbours = Number(
//   prompt('How many neighbour countries does your country have?')
// );

// if (numNeighbours === 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//   console.log('More than one border');
// } else {
//   console.log('No borders');
// }

// LECTURE: The switch Statement
// 1. Use a switch statement to log the following string for the given 'language':
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D

// const language = 'Gujarati';

// switch (language) {
//   case 'chinese':
//   case 'mandarin':
//     console.log('MOST number of native speakers!');
//     break;
//   case 'spanish':
//     console.log('2nd most number of native speakers');
//     break;
//   case 'english':
//     console.log('3rd place');
//     break;
//   case 'hindi':
//     console.log('4th place');
//     break;
//   case 'arabic':
//     console.log('5th most spoken language');
//     break;
//   default:
//     console.log('Great language too!');
// }

// // LECTURE: The Conditional (Ternary) Operator
// // 1. If your country's population is greater than 33 million, use the ternary operator
// // to log a string like this to the console: 'Portugal's population is above average'.
// // Otherwise, simply log 'Portugal's population is below average'. Notice how only
// // one word changes between these two sentences!
// // 2. After checking the result, change the population temporarily to 13 and then to
// // 130. See the different results, and set the population back to original

// const Canada = 3000000;
// const average = 33000000;
// const greaterOrLessThanaverage =
//   Canada > average
//     ? `Canada's population is above average`
//     : `Canada's population is below average`;
// console.log(greaterOrLessThanaverage);

// COURSE WORK

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear); // Number -> Turns a string into a number
// console.log(Number(inputYear) + 18);

// const day = 'monday';

// if (day === 'monday') {
//   console.log('Go to work');
//   console.log('Revisit the schedule of this week');
// } else if (day === 'tuesday') {
//   console.log('Cleanup the house');
// } else if (day === 'wednesday' || day === 'thursday') {
//   console.log('Write some codes');
// } else if (day === 'friday') {
//   console.log('Get grocery');
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log('Enjoy your weekend!');
// } else {
//   console.log('Invalid day');
// }

// switch (day) {
//   case 'monday':
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory vids');
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//   case 'friday':
//     console.log('Record videos');
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend');
//   default:
//     console.log('Not a valid day!');
// }

// CHALLENGE WORK

// // Challenge 1
// const MarkMass1 = 78; //kg
// const MarkHeight1 = 1.69; //meters
// const JohnMass1 = 92; //kg
// const JohnHeight1 = 1.95; //meters

// const BMIMarkOne = MarkMass1 / MarkHeight1 ** 2;
// console.log('Mark BMI1:', BMIMarkOne);

// const BMIJohnOne = JohnMass1 / JohnHeight1 ** 2;
// console.log('John BMI1:', BMIJohnOne);

// const markHigherBmi1 = BMIMarkOne > BMIJohnOne;
// console.log(markHigherBmi1);

// const MarkMass2 = 95; //kg
// const MarkHeight2 = 1.88; //meters
// const JohnMass2 = 85; //kg
// const JohnHeight2 = 1.76; //meters

// const BMIMarkTwo = MarkMass2 / MarkHeight2 ** 2;
// console.log('Mark BMI2:', BMIMarkTwo);

// const BMIJohnTwo = JohnMass2 / JohnHeight2 ** 2;
// console.log('John BMI2:', BMIJohnTwo);

// const markHigherBmi2 = BMIMarkTwo > BMIJohnTwo;
// console.log(markHigherBmi2);

// // Challenge work 2
// let BMIRecipient1 = 'Mark';
// let BMIRecipient2 = 'John';
// const MarkMass1 = 78; //kg
// const MarkHeight1 = 1.69; //meters
// const JohnMass1 = 92; //kg
// const JohnHeight1 = 1.95; //meters

// const BMIMarkOne = MarkMass1 / MarkHeight1 ** 2;
// console.log('Mark BMI1:', BMIMarkOne);

// const BMIJohnOne = JohnMass1 / JohnHeight1 ** 2;
// console.log('John BMI1:', BMIJohnOne);

// if (BMIMarkOne > BMIJohnOne) {
//   console.log(
//     `${BMIRecipient1}'s BMI (${BMIMarkOne}) is Higher than ${BMIRecipient2}(${BMIJohnOne})!`
//   );
// } else {
//   console.log(
//     `${BMIRecipient2}'s BMI (${BMIJohnOne}) is Higher than ${BMIRecipient1}(${BMIMarkOne})!`
//   );
// }

// // Challenge work 3

// const dolphinAverage = (108 + 96 + 89) / 3;
// console.log('Dolphins:', dolphinAverage);
// const koalaAverage = (88 + 91 + 110) / 3;
// console.log('Koalas', koalaAverage);

// if (dolphinAverage > koalaAverage) {
//   console.log('Dolphins Win!');
// } else if (koalaAverage > dolphinAverage) {
//   console.log('Koalas Win!');
// } else if (dolphinAverage === koalaAverage) {
//   console.log('Its a draw');
// } else {
//   console.log('No score');
// }

// const bonusDolphinAverage1 = (97 + 112 + 101) / 3;
// console.log('Dolphin bonus 1 avg:', bonusDolphinAverage1);
// const bonusKoalaAverage1 = (109 + 95 + 123) / 3;
// console.log('Koala Bonus 1 avg:', bonusKoalaAverage1);

// const minimumScore = 100;
// if (bonusDolphinAverage1 && bonusKoalaAverage1 >= minimumScore) {
//   console.log('Both the teams beat the minimum score');
// } else if (bonusKoalaAverage1 >= 100) {
//   console.log('Koalas beat the minimum score');
// } else if (bonusDolphinAverage1 >= 100) {
//   console.log('Dolphins beat the minimum score');
// } else {
//   console.log('Neither team beat the minimum score');
// }

// const bonusDolphinAverage2 = (97 + 112 + 101) / 3;
// console.log(bonusDolphinAverage2);
// const bonusKoalaAverage2 = (109 + 95 + 106) / 3;
// console.log(bonusKoalaAverage2);

// if (
//   bonusDolphinAverage2 > bonusKoalaAverage2 &&
//   bonusDolphinAverage2 >= minimumScore
// ) {
//   console.log('Dolphins won the trophy');
// } else if (
//   bonusKoalaAverage2 > bonusDolphinAverage2 &&
//   bonusKoalaAverage2 >= minimumScore
// ) {
//   console.log('Koalas won the trophy');
// } else if (
//   bonusDolphinAverage2 === bonusKoalaAverage2 &&
//   bonusDolphinAverage2 &&
//   bonusKoalaAverage2 >= minimumScore
// ) {
//   console.log('Both won the trophy');
// } else {
//   console.log('No one won the trophy');
// }

// Challenge work 4
const bill1 = 275;
const bill2 = 40;
const bill3 = 430;

tip = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2;
console.log(tip);
const finalValue = bill1 * tip;
console.log(first);
// console.log(`The bill was ${bill1}, the tip was ${tip}, and the total value
// 316.25`);
