const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const BMW = new Car('BMW', 120);
const Mercedes = new Car('Mercedes', 95);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

BMW.accelerate();
BMW.accelerate();
BMW.accelerate();
BMW.brake();
// BMW.accelerate();
// console.log(`${BMW.speed}km/h`);

// Mercedes.brake();
// console.log(`${Mercedes.speed}km/h`);
