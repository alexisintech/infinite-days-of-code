// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// CLASS 29 - 04262022 
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *


/* Instructions: Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
[68, -1, 1, -7, 10, 10] => [-1, 10]
*/

// ~*~*~*~*~*~* My Solution

function multipleofOwnIndex(arr){
    return arr.filter((element,index) => element % index === 0);
}

// ~*~*~*~*~*~* Leon's Answer

function isMultiple(arr){
    return arr.filter((e,i) => e % i === 0);
}