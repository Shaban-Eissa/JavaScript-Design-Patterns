class TextEditor {
  constructor() {
    this.content = "";
  }

  type(words) {
    this.content += " " + words;
  }

  // Create a memento (snapshot)
  save() {
    return new Memento(this.content);
  }

  // Restore from memento
  restore(memento) {
    this.content = memento.getState();
  }

  getContent() {
    return this.content;
  }
}

class Memento {
  constructor(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }
}

class History {
  constructor() {
    this.history = [];
  }

  push(memento) {
    this.history.push(memento);
  }

  pop() {
    return this.history.pop();
  }
}

const editor = new TextEditor();
const history = new History();

editor.type("Hello");
editor.type("World");
history.push(editor.save()); // Save state 1

editor.type("This is my document.");
history.push(editor.save()); // Save state 2

console.log(editor.getContent());
// Output: " Hello World This is my document."

// Undo (restore to last save)
editor.restore(history.pop());
console.log(editor.getContent());
// Output: " Hello World"

// Undo again
editor.restore(history.pop());
console.log(editor.getContent());
// Output: " Hello"
