const user = {
  username: "john_doe",
  role: "admin",
  password: "supersecret123",
  token: "abc123xyz",
};

const secureUser = new Proxy(user, {
  get: (target, prop) => {
    if (["password", "token"].includes(prop)) {
      console.warn(`Access to "${prop}" is denied for security reasons.`);
      return undefined; // Hide sensitive data
    }
    return target[prop];
  },
  set: (target, prop, value) => {
    if (prop === "role") {
      console.warn(`Modification of "${prop}" is not allowed.`);
      return true; // Ignore assignment
    }
    target[prop] = value;
    return true;
  },
});

console.log(secureUser.username); // ✅ john_doe
console.log(secureUser.password); // ⚠ Access to "password" is denied
secureUser.role = "user";         // ⚠ Modification of "role" is not allowed
secureUser.username = "jane_doe"; // ✅ Allowed
console.log(secureUser.username); // ✅ jane_doe
console.log(user);                // Original object updated except secure fields
