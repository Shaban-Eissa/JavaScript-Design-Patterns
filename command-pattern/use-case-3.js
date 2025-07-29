// Control multiple home devices
class TV {
  on() {
    console.log("TV is ON");
  }
  off() {
    console.log("TV is OFF");
  }
}
class AC {
  on() {
    console.log("AC is ON");
  }
  off() {
    console.log("AC is OFF");
  }
}
class Door {
  lock() {
    console.log("Door locked");
  }
  unlock() {
    console.log("Door unlocked");
  }
}

class Control {
  execute(command) {
    command.execute();
  }
}

class Command {
  constructor(execute) {
    this.execute = execute;
  }
}

function TurnOnTVCommand(device) {
  return new Command(() => {
    device.on();
  });
}

function TurnOffTVCommand(device) {
  return new Command(() => {
    device.off();
  });
}

function TurnOnACCommand(device) {
  return new Command(() => {
    device.on();
  });
}

function TurnOffACCommand(device) {
  return new Command(() => {
    device.off();
  });
}

function LockDoorCommand(device) {
  return new Command(() => {
    device.lock();
  });
}

function UnlockDoorCommand(device) {
  return new Command(() => {
    device.unlock();
  });
}
// Usage example
const remote = new Control();
const tv = new TV();
const ac = new AC();
const door = new Door();

console.log("Smart Home Remote Demo:");

// TV controls
remote.execute(TurnOnTVCommand(tv));
remote.execute(TurnOffTVCommand(tv));

// AC controls
remote.execute(TurnOnACCommand(ac));
remote.execute(TurnOffACCommand(ac));

// Door controls
remote.execute(LockDoorCommand(door));
remote.execute(UnlockDoorCommand(door));
