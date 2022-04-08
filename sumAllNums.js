//Create and array of numbers. Sum all of the numbers. Alert the sum.

let arr = [4, 6, 8, 10, 12];

let sum = 0;
arr.forEach( num => sum += num);
alert(sum);

// Leon's answer

let nums = [42,19,77,33,57];

let leonsSum = nums.reduce( (acc,c) => acc + c, 0 );

// What if..... the array had a string in it

let newNums = ["42",18,77,33,57];

let newSum = nums.reduce ( (acc,c) => acc + Number(c), 0);
//fun fact, +c and Number(c) do the same thing........