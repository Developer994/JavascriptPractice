// // CHALLANGE 1
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// const BMW = new Car('BMW', 120);
// const Mercedes = new Car('Mercedes', 95);

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// BMW.accelerate();
// BMW.accelerate();
// BMW.accelerate();
// BMW.brake();
// // BMW.accelerate();
// // console.log(`${BMW.speed}km/h`);

// // Mercedes.brake();
// // console.log(`${Mercedes.speed}km/h`);

// CHALLANGE 2

class Car2 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(km) {
    console.log(km);
    this.km = km * 1.6;
  }
}

const BMW = new Car2('BMW', 120);
console.log(BMW.speedUS);
BMW.accelerate();
BMW.brake();
BMW.speedUS = 50;
console.log(BMW);
