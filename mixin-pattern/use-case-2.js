// Base Class
class Vehicle {
  constructor(name) {
    this.name = name;
  }
}

// Reusable Mixins
const canHonk = {
  honk() {
    console.log(`${this.name} says: Beep beep!`);
  },
};

const canDrive = {
  drive() {
    console.log(`${this.name} is driving on the road!`);
  },
};

const canSail = {
  sail() {
    console.log(`${this.name} is sailing on water!`);
  },
};

// Specific Vehicle Classes
class Car extends Vehicle {}
class Boat extends Vehicle {}
class AmphibiousCar extends Vehicle {} // Can drive & sail

// Add Mixins to Class Prototypes
Object.assign(Car.prototype, canHonk, canDrive);
Object.assign(Boat.prototype, canHonk, canSail);
Object.assign(AmphibiousCar.prototype, canHonk, canDrive, canSail);

const myCar = new Car("Toyota");
myCar.drive(); // Toyota is driving on the road!
myCar.honk(); // Toyota says: Beep beep!

const myBoat = new Boat("Sea Rider");
myBoat.sail(); // Sea Rider is sailing on water!
myBoat.honk(); // Sea Rider says: Beep beep!

const myAmphi = new AmphibiousCar("HydraCar");
myAmphi.drive(); // HydraCar is driving on the road!
myAmphi.sail(); // HydraCar is sailing on water!
myAmphi.honk(); // HydraCar says: Beep beep!
