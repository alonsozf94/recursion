let sortButton = document.querySelector('#sort-button');
let sortInput = document.querySelector('#sort-input');
let sortResult = document.querySelector('#sort-result');

function mergeSort(array) {
  if (array.length === 1) return array;

  let half = Math.ceil(array.length / 2);
  let left = array.slice(0, half);
  let right = array.slice(half);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let sortedArray = [];
  leftCounter = 0;
  rightCounter = 0;

  console.log(left);
  console.log(right);

  while (leftCounter < left.length && rightCounter < right.length) {
    if (left[leftCounter] < right[rightCounter]) {
      sortedArray.push(left[leftCounter]);
      leftCounter++;
    } else {
      sortedArray.push(right[rightCounter]);
      rightCounter++;
    }
  }

  while (leftCounter < left.length) {
    sortedArray.push(left[leftCounter]);
    leftCounter++;
  }

  while (rightCounter < right.length) {
    sortedArray.push(right[rightCounter]);
    rightCounter++;
  }

  return sortedArray;
}

sortButton.addEventListener('click', () => {
  let array = sortInput.value.split(',').map((element) => Number(element));
  sortResult.innerHTML = `Result: [${mergeSort(array)}]`;
})