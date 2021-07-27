// Merge with recursion

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
      let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return merge(left,right);
}

console.log(mergeSort([1, 2, 8, 4, 9, 3, 7]));
