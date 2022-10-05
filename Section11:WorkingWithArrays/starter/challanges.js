// // CHALLANGE 1

// function checkDogs(jDogsCorrect, kData) {
//   const jDogsOnly1 = jDogsCorrect.slice(1, 3);

//   const jCorrectAndKData1 = jDogsOnly1.concat(kData);
//   console.log(jCorrectAndKData1);

//   jCorrectAndKData1.forEach(function (mov, i, arr) {
//     if (mov < 3) {
//       console.log(`Dog number ${i + 1} is a puppy `);
//     } else {
//       console.log(`Dog number ${i + 1} is an adult.`);
//     }
//   });
// }

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// // CHALLANGE 2

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const over18 = humanAges.filter(age => age >= 18);
//   console.log(over18);
//   const averageAge = over18.reduce((acc, cur, i, arr) => {
//     return acc + cur / arr.length;
//   }, 0);
//   console.log(averageAge);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
