function fibonacci(n) {
  if (n <= 1) return n;

  return fibonacci(n - 2) + fibonacci(n - 1);
}

function fibonacciArr(n) {
  let arr = [];
  for (let i = 0; i < n ; i++) {
    arr.push(fibonacci(i));
  }

  return arr;
}

console.log(fibonacciArr(8));
