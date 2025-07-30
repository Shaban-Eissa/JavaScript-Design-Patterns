function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function cacheDecorator(fn) {
  const cache = {};
  return function (n) {
    if (n in cache) {
      console.log(`From cache: ${n}`);
      return cache[n];
    }
    const result = fn(n);
    cache[n] = result;
    return result;
  };
}

const fastFibonacci = cacheDecorator(fibonacci);

console.log(fastFibonacci(10)); // Calculates
console.log(fastFibonacci(10)); // From cache
