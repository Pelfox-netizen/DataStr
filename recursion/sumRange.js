// Sum Range recursion


function sumRange(num){

    if(num === 1) return 1;

    return num + sumRange(num -1);
          //3  +  sumRange(2)
                     // 2 + sumRange(1)
                              // if num === 1 returns 1
                                 // 1
       //  3   +     2       + 1                     
}

console.log(sumRange(3));