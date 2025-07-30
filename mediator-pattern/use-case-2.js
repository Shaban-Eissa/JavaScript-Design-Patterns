class FormMediator {
  constructor() {
    this.fields = [];
  }

  registerField(field) {
    this.fields.push(field);
    field.mediator = this;
  }

  notifyChange(field) {
    // Check if all fields are valid
    const allValid = this.fields.every((f) => f.isValid());
    console.log(allValid ? "Form is valid!" : "Form has errors");
  }
}

class InputField {
  constructor(name, value = "") {
    this.name = name;
    this.value = value;
    this.mediator = null;
  }

  setValue(value) {
    this.value = value;
    if (this.mediator) this.mediator.notifyChange(this);
  }

  isValid() {
    return this.value.trim() !== "";
  }
}

const form = new FormMediator();
const username = new InputField("username");
const email = new InputField("email");

form.registerField(username);
form.registerField(email);

username.setValue(""); // Form has errors
email.setValue("test@test"); // Form has errors
username.setValue("John"); // Form is valid!
