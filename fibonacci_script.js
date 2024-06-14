let fibonacciButton = document.querySelector('#fib-button');
let fibonacciInput = document.querySelector('#fib-input');
let fibonacciResult = document.querySelector('#fib-result')

function fibonacciRec(n) {
  if (n <= 2) return [0, 1]
  else {
    return [...fibonacciRec(n - 1), fibonacciRec(n - 1)[fibonacciRec(n - 1).length - 1] + fibonacciRec(n - 1)[fibonacciRec(n - 1).length - 2]];
  }
}

fibonacciButton.addEventListener('click', () => {
  let num = fibonacciInput.value;
  fibonacciResult.innerHTML = `Result: [${fibonacciRec(num)}]`;
})
