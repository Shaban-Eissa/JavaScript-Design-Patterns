// Shared flyweight object
class CarIcon {
  constructor(image) {
    this.image = image; // shared among all cars
  }

  render(x, y) {
    console.log(`Drawing ${this.image} at (${x}, ${y})`);
  }
}

// Factory to manage flyweights
const iconFactory = {
  icons: {},
  getIcon(type) {
    if (!this.icons[type]) {
      this.icons[type] = new CarIcon(`${type}.png`);
    }
    return this.icons[type];
  },
};

// Store unique cars (extrinsic state)
const cars = [];

function addCar(type, latitude, longitude) {
  const icon = iconFactory.getIcon(type); // shared
  cars.push({ icon, latitude, longitude });
}

// Example
addCar("car", 30.12, 31.22);
addCar("car", 30.13, 31.25);
addCar("car", 30.18, 31.28);

console.log("Total cars:", cars.length);
console.log("Unique icons in memory:", Object.keys(iconFactory.icons).length);

// Render cars
cars.forEach((c) => c.icon.render(c.latitude, c.longitude));
