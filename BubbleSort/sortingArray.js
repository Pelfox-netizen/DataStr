// Sorting is the process of rearranging the items in a collection so that items are in some kind of order

// sorting smallest ot largest
// sorting names alphabetically
// Sorting movies based on release year

// bubble sort algorith is where the largest values bubble up to the top

// function ascendSort(arr) {
//   let temp = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

//  console.log(ascendSort([4, 3, 8, 1, 3, 9]));

function sortArr(arr) {
  let temp = 0;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

//console.log(sortArr([3,5,1,2,9,6,8]));

//
function sortArr1(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// console.log(sortArr1([9, 8, 7, 6, 5, 4, 3, 2, 1]));

// optimazied code with no swap flag;

function sortArr2(arr) {
  let swap;
  for (let i = arr.length; i > 0; i--) {
    swap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = false;
      }
    }
    if (swap) break;
  }
  return arr;
}

console.log(sortArr2([9, 8, 7, 6, 5, 4, 3, 2, 1]));