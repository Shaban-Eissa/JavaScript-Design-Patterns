class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers.pop(fn);
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

// Create observable
const observable = new Observable();

// Example observers
function logger(data) {
  console.log(`LOG: ${Date.now().toString()} - ${data}`);
}

function alertUser(data) {
  console.log(`NOTIFICATION: ${data}`);
}

// Subscribe
observable.subscribe(logger);
observable.subscribe(alertUser);

// Trigger notifications
observable.notify("User clicked the button!");
observable.notify("New message received.");
