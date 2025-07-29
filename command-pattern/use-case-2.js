class GameCharacter {
  move() {
    console.log("Character moves forward");
  }
  jump() {
    console.log("Character jumps");
  }
  attack() {
    console.log("Character attacks");
  }
  defend() {
    console.log("Character defends");
  }
}

class Command {
  constructor(execute) {
    this.execute = execute;
  }
}

class Control {
  execute(command) {
    command.execute();
  }
}

function MoveCommand(character) {
  return new Command(() => {
    character.move();
  });
}

function JumpCommand(character) {
  return new Command(() => {
    character.jump();
  });
}

function AttackCommand(character) {
  return new Command(() => {
    character.attack();
  });
}

function DefendCommand(character) {
  return new Command(() => {
    character.defend();
  });
}

// Usage example
const controller = new Control();
const player = new GameCharacter();

console.log("Gaming Controller Demo:");

controller.execute(MoveCommand(player));
controller.execute(JumpCommand(player));
controller.execute(AttackCommand(player));
controller.execute(DefendCommand(player));
