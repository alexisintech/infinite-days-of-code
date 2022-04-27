// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// CLASS 29 - 04262022 
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *


/* Instructions: Given two integer arrays a, b, both of length >= 1, create a program that 
returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
*/

// ~*~*~*~*~*~* My solution

function compareArrays(a1,a2){
    return a1.reduce((acc,c) => acc + c**2, 0) > a2.reduce((acc, c) => acc + c**3, 0)
}

// ~*~*~*~*~*~* Leon's Solution

function compareSquareAndCube(a,b){
    return a.reduce((acc,c) => acc + c**2, 0) > b.reduce((acc, c) => acc + c**3, 0)
}

compareSquareAndCube([2,2,2],[2,2,2]);

// Remember, reduce reduces the array to a singular value. 
// Starting with "a.reduce", our accumulator starts off as 0, the first "c" value is 2 (in this case)
// 2**2 = 4 added to 0 = 4. Then pass in second element of array (which is 2 in this case) 2**2 = 4 added to that previous 4 = 8. 
// Then 2**2 added to that 8 = 12 ... a.reduce becomes 12
// Moving on to "b.reduce", our accumulator starts off as 0, the first "c" value is 2 (in this case)
// 2**3 = 8 added to 0 = 4. Then pass in second element of array (which is 2 in this case) 2**3 = 8 added to that previous 8 = 16. 
// Then pass in last element (which is 2 in this case) 2**3 added to that previous 16 = 24 ... b.reduce becomes 24.
// We add the " ,0" because it helps with the initial value being 0, so it does type conversion for you. If the element is a string, it will be converted to a number.