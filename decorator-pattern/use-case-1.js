function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("From cache");
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

function slowSquare(n) {
  console.log("Computing...");
  return n * n;
}

const fastSquare = memoize(slowSquare);

console.log(fastSquare(5)); // Computing... 25
console.log(fastSquare(5)); // From cache 25
