const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  email,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
});

// Create users
const user1 = createUser({
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.com",
});
const user2 = createUser({
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@doe.com",
});

console.log(user1.fullName()); // John Doe
console.log(user2.fullName()); // Jane Doe
