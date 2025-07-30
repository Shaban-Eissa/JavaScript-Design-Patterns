const person = { name: "John Doe", age: 42 };

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    if (!(prop in obj)) {
      console.warn(`Property "${prop}" does not exist!`);
      return undefined;
    }
    console.log(`Getting ${prop}: ${obj[prop]}`);
    return obj[prop];
  },
  set: (obj, prop, value) => {
    if (prop === "age" && typeof value !== "number") {
      throw new Error("Age must be a number!");
    }
    console.log(`Setting ${prop} to ${value}`);
    obj[prop] = value;
    return true;
  },
});

personProxy.name; // Logs: Getting name: John Doe
personProxy.email; // Property email does not exist!
personProxy.age = 43; // Logs: Setting age to 43
