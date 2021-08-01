// Factorial with for loop

function factorial(num) {
  // should return num * num -1 * num -2 etc
  let fact = 1;
  for (let i = num; i > 1; i--) {
      fact = fact * i;
  }
  return fact;
}

console.log(factorial(4));


// recursive way


function factorialRec(num){
    if(num === 1) return 1;
    return num * factorialRec(num-1);
}
