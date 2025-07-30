class ChatRoom {
  constructor() {
    this.users = [];
  }

  // Register user in the chatroom
  register(user) {
    this.users.push(user);
    user.chatroom = this;
  }

  // Send message from one user to another or broadcast
  sendMessage(message, fromUser, toUser = null) {
    if (toUser) {
      // Direct message to a specific user
      console.log(`${fromUser.getName()} to ${toUser.getName()}: ${message}`);
    } else {
      // Broadcast message to all except the sender
      this.users.forEach((user) => {
        if (user !== fromUser) {
          console.log(`${fromUser.getName()} to ${user.getName()}: ${message}`);
        }
      });
    }
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }

  getName() {
    return this.name;
  }

  // Send message through mediator
  send(message, toUser = null) {
    if (!this.chatroom) {
      console.log(`${this.name} is not registered in any chatroom!`);
      return;
    }
    this.chatroom.sendMessage(message, this, toUser);
  }
}

const chatroom = new ChatRoom();

const john = new User("John");
const jane = new User("Jane");
const alice = new User("Alice");

// Register users in the chatroom (mediator)
chatroom.register(john);
chatroom.register(jane);
chatroom.register(alice);

// Users communicate via the mediator
john.send("Hello everyone!"); // Broadcast to Jane & Alice
jane.send("Hey John!", john); // Private message to John
alice.send("Hi Jane and John!"); // Broadcast to John & Jane
