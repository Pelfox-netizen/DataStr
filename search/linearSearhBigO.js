// Binary Search
//Write a function that accept an array an an element, search for the element in an arrray otherwise return -1;

// function

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (elem !== arr[middle] && start <= end) {
    elem < arr[middle] ? (end = middle - 1) : (start = middle + 1);
    middle = Math.floor((start + end) / 2);
  }
  return elem === arr[middle] ? middle : -1;
}

//0 1 2 3 4 5 6 7
console.log(binarySearch([2, 3, 4, 5, 6, 7, 8, 9], 9));
