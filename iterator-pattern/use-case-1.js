function createIterator(collection) {
  let index = 0;

  return {
    next: function () {
      if (index < collection.length) {
        return { value: collection[index++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}

// Usage
const myArray = [10, 20, 30];
const iterator = createIterator(myArray);

console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
