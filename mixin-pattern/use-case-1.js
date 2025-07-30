class Dog {
  constructor(name) {
    this.name = name;
  }
}
class Cat {
  constructor(name) {
    this.name = name;
  }
}

const animalFunctionality = {
  walk() {
    console.log("Walking!");
  },
  sleep() {
    console.log("Sleeping!");
  },
};

const dogFunctionality = {
  bark() {
    console.log("Woof!");
  },
  wagTail() {
    console.log("Wagging my tail!");
  },
  play() {
    console.log("Playing!");
  },
};

// Merge multiple mixins into Dog prototype
Object.assign(Dog.prototype, animalFunctionality, dogFunctionality);
Object.assign(Cat.prototype, animalFunctionality);

const dog = new Dog("Buddy");
dog.walk(); // Walking!
dog.sleep(); // Sleeping!
dog.bark(); // Woof!

const cat = new Cat("Cat");
cat.walk();
cat.sleep();
