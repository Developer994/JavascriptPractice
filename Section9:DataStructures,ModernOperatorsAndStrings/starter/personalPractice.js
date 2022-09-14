const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    console.log(this);
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// restaurant.orderDelivery({
//   time: '22.30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // SPREAD OPERATOR
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // COPY ARRAY
// const mainMenuCopy = [...restaurant.mainMenu];

// // JOIN TWO ARRAYS OR MORE
// const joinedMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(joinedMenu);

// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);
// // console.log(`${...str} Sch`) -> multiple values separated by a comma are usually only expected
// // when we pass argunments into a function, or when we built a new array

// // Real-world example
// const ingredients = [
//   //   prompt(`Please choose your ingredients: Ingredient 1:`),
//   //   prompt('Ingredient 2:'),
//   //   prompt('Ingredient 3:'),
// ];

// // console.log(ingredients);

// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients); // This is the equivalent of the above.

// // Objects
// const newRestaurant = { foundIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// REST PATTERNS & PARAMETERS

// 1) Destructuring
// SPREAD, because on the RIGHT side of =
const arr = [1, 2, ...[3, 4, 5]];
console.log(arr);

// REST because on the LEFT side of
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions

const add = function (...numbers) {
  //   console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 6, 9, 10);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');

restaurant.orderPizza('mushrooms');
