/*
Write a function called maxSubArraySum which accepts an array of integers and a number called n.
The function should calculate the maximum sum of n consecutive elements int the array.

*/

// Naive solution

// function maxSubArraySum(arr, num) {
//   // if number is greater than elements in the array return null
//   if (num > arr.length) {
//     return null;
//   }
//   // max variable to compare agains the sum of num
//   let max = -Infinity;
//   // first loop is needed to grab num digit and sum them in temp variables also we are setting the limit to the end of array to avoid index out of bound
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     temp = 0;
//     // second loop adding sum of n numbers to the temp variable
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//     //console.log(temp, max);
//   }
//   return max;
// }

function maxSubArraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
    console.log('First loop max sum',maxSum);
  }
  tempSum = maxSum;
  //       i = 3                   i = 4
  for (let i = num; i < arr.length; i++) {
      // tempSum = 6 = 6 - 1 + 4
    tempSum = tempSum - arr[i - num] + arr[i];
    console.log('Temp sum',tempSum);
    console.log('arr[i-num]',arr[i-num]);
    console.log('arr[i]',arr[i]);
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubArraySum([2,4,6,3,5,6,7,9],3));
