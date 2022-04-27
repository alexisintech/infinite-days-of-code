// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// CLASS 29 - 04262022 
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *


/* Instructions: Given an array of integers as strings and numbers, 
return the sum of the array values as if all were numbers. Return your answer as a number.
*/

// ~*~*~*~*~*~* My Solution

const s = r => r.reduce((a,c) => +a+ +c, 0)

console.log(['5', 3, '2', 1]);

// ~*~*~*~*~*~* Leon's Solution

function sumOfValues(arr){
    return arr.reduce((acc, c) => acc + Number(c), 0)
}

console.log(['5', 3, '2', 1]);