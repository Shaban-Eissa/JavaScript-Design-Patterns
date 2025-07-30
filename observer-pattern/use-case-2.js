class Stock {
  constructor(symbol) {
    this.symbol = symbol;
    this.price = 100;
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  notify() {
    this.observers.forEach((fn) => fn(this.price));
  }

  setPrice(newPrice) {
    this.price = newPrice;
    this.notify(); // notify all observers
  }
}

// Observers
const logPrice = (price) => console.log(`Price updated: $${price}`);
const alertPrice = (price) =>
  price > 105 && console.log(`High price: $${price}`);

// Usage
const appleStock = new Stock("APPLE");
appleStock.subscribe(logPrice);
appleStock.subscribe(alertPrice);

appleStock.setPrice(102);
appleStock.setPrice(106);
