function createNotification(type, message) {
  switch (type) {
    case "email":
      return { type, send: () => console.log(`Email: ${message}`) };
    case "sms":
      return { type, send: () => console.log(`SMS: ${message}`) };
    case "push":
      return { type, send: () => console.log(`Push: ${message}`) };
    default:
      throw new Error("Unknown notification type");
  }
}

const email = createNotification("email", "Welcome!");
const sms = createNotification("sms", "Weclome!");

email.send(); // Email: Welcome!
sms.send(); // SMS: Welcome!
