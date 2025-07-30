function add(a, b) {
  return a + b;
}

function timingDecorator(fn) {
  return function (...args) {
    const start = performance.now();
    const result = fn(...args);
    const end = performance.now();
    console.log(`Execution time: ${(end - start).toFixed(2)}ms`);
    return result;
  };
}

const timedAdd = timingDecorator(add);

timedAdd(10000000000, 1000000000000);
// Output:
// Execution time: 0.02ms
