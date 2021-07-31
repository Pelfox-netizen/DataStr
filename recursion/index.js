// What is the recursion?

// Recursion is a process(or function) that calls itself

// non recursive way

/* function countDown(num){
    for(let i = num; i > 0; i--){
        console.log(i);
    }
}
 countDown(10);
 */

// With recursion

function countDown(num) {
  if (num <= 0) {
    console.log("All done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
countDown(10);
