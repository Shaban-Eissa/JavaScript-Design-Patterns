class TV {
  turnOn() {
    console.log("TV is ON");
  }
  turnOff() {
    console.log("TV is OFF");
  }
}

class Radio {
  turnOn() {
    console.log("Radio is ON");
  }
  turnOff() {
    console.log("Radio is OFF");
  }
}

class RemoteControl {
  constructor(device) {
    this.device = device; // Bridge to the device
  }

  pressPowerButton() {
    this.device.turnOn();
  }

  pressOffButton() {
    this.device.turnOff();
  }
}

const tvRemote = new RemoteControl(new TV());
tvRemote.pressPowerButton(); // TV is ON
tvRemote.pressOffButton(); // TV is OFF

const radioRemote = new RemoteControl(new Radio());
radioRemote.pressPowerButton(); // Radio is ON
radioRemote.pressOffButton(); // Radio is OFF
