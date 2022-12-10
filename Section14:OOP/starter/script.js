'use strict';
// CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //   //   Never do this
//   //   //   this.calcAge = function () {
//   //   //     console.log(2037 - this.birthYear);
//   //   //   };
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

// Person.hey = function () {
//   console.log('Hey there 👋');
//   console.log(this);
// };

// Person.hey();

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

// // SETTERS AND GETTERS
// // ES6 CLASSES
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exists(in this case, it's fullName as it already declared above.)
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // STATIC METHODS
//   static hey() {
//     console.log('Hey there 👋');
//     console.log(this);
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };

// jessica.greet();

// // 1. Classes are not hoisted
// // 2. Classes are first-classed citizens
// // 3. Classes are executed in strict mode

// const walter = new PersonCl('Walter White', 1965);

// PersonCl.hey();

// SETTERS AND GETTERS

const account = {
  owner: 'Rez',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  // Setters must contain a parameter inside the paranthesis
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

// // OBJECT.CREATE

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);

// sarah.calcAge();

// // INHERITANCE BETWEEN "CLASSES": CONSTRUCTOR FUNCTIONS

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();

// mike.calcAge();

// INHERITANCE BETWEEN "CLASSES": ES6 CLASSES

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists(in this case, it's fullName as it already declared above.)
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // STATIC METHODS
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

// "extemds" links the prototype. Therefore, the StudentCl inherits from the PersonCl
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear); // Always needs to happen first! Or else, you won't have access to the 'this' keyword
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student, I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();

martha.calcAge();

// INHERITANCE BETWEEN "CLASSES": OBJECT.CREATE

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    // init is the short for initiate, so it means to create a new object
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

// ANOTHER CLASS EXAMPLE
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = []; // For internal commands, such as an array and language, you do not need to add them as paramenters for the constructor.
    this.locale = navigator.language;

    console.log(`Thanks for opening an account,${owner}`);
  }

  // Public interface
  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approvedLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approvedLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approvedLoan(1000);

console.log(acc1);
console.log(acc1.pin);
