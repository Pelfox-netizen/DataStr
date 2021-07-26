// String search algorithm

// Naive string search implementation

// function naiveSearch(long,short){
//     let count = 0;
//     for(let i = 0; i < long.length;i++){
//         for(let j = 0; j < short.length;j++){
//             if(short[j] !== long[i+j]) break;
//             else if(j === short.length-1) count++;
//         }
//     }
//     return count;
// }

// console.log(naiveSearch("lorie loled", "lorie"));

// Skyzone challenge

// Given 2 non empty arrays of integers write a function that determines whether the second array is subsequence of the first one

function subSequence(arr1, arr2) {
  let flag;
  let counter = 0;
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
        i++;
        counter++;
      } else {
        flag = false;
        break;
      }
    }
  }
  if (counter !== 0) {
    flag = true;
  }
  return flag;
  // return result;
}
console.log(subSequence([4,5], [1, 2, 3, 4, 5, 6, 7]));
// console.log(counter);


function isValidSubsequence(array, sequence) {
  let arrInx = 0;
  let seqInx = 0;

  while (arrInx < array.length && seqInx < sequence.length) {
    if (array[arrInx] === sequence[seqInx]) {
      seqInx++;
    }
    arrInx++;
  }
  if (sequence.length === seqInx) {
    return true;
  }
  return false;
}

