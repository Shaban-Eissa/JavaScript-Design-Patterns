class User {
  constructor(builder) {
    this.name = builder.name;
    this.age = builder.age;
    this.phone = builder.phone;
    this.address = builder.address;
    this.email = builder.email;
  }
}

class UserBuilder {
  setName(name) {
    this.name = name;
    return this; // allows chaining
  }

  setAge(age) {
    this.age = age;
    return this;
  }

  setPhone(phone) {
    this.phone = phone;
    return this;
  }

  setAddress(address) {
    this.address = address;
    return this;
  }

  setEmail(email) {
    this.email = email;
    return this;
  }

  build() {
    return new User(this);
  }
}

// Usage
const user = new UserBuilder()
  .setName("John")
  .setAge(25)
  .setEmail("john@example.com")
  .build();

console.log(user);
