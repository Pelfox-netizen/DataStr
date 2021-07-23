// Similar to buble sorting but instead of first placing large values into sorted position it places
// small values into sorted position

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
      // or Es16 way to swap swap(arr,i,lowest)
    }
  }
  return arr;
}

console.log(selectionSort([5, 5, 43, 6, 5, 6, 3, 675, 4]));
