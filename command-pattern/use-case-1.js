class Light {
  on() {
    console.log("Light is ON");
  }
  off() {
    console.log("Light is OFF");
  }
}

class Fan {
  on() {
    console.log("Fan is ON");
  }
  off() {
    console.log("Fan is OFF");
  }
}

class RemoteControl {
  execute(command) {
    command.execute();
  }
}

class Command {
  constructor(execute) {
    this.execute = execute;
  }
}

function LightOnCommand(light) {
  return new Command(() => {
    light.on();
  });
}

function LightOffCommand(light) {
  return new Command(() => {
    light.off();
  });
}

function FanOnCommand(fan) {
  return new Command(() => {
    fan.on();
  });
}

function FanOffCommand(fan) {
  return new Command(() => {
    fan.off();
  });
}

const remote = new RemoteControl();
const livingRoomLight = new Light();
const ceilingFan = new Fan();

remote.execute(LightOnCommand(livingRoomLight));
remote.execute(FanOnCommand(ceilingFan));
remote.execute(LightOffCommand(livingRoomLight));
remote.execute(FanOffCommand(ceilingFan));
