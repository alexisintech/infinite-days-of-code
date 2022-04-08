// =================================================================================================================================================== 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// ===================================================================================================================================================

// Class 20 of 100Devs

// =================================================================================================================================================== 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// ===================================================================================================================================================


// Declare a variable, reassign it to your favorite food, and alert the value

let favFood = "sushi";
console.log(favFood);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

let str = "I'm in the GYM TNNN!!"
alert(str[1]);

// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function takesIn3Num(n1,n2,n3) {
    alert( (n1 / n2) * n3);
}

takesIn3Num(400, 40, 4);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function takesIn1Num(n) {
    console.log( Math.cbrt(n) );
}

takesIn1Num(40);

//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function seasons(month) {
    console.log( ( (month === "june") || (month === "july") || (month === "august") || (month === "september") ) ? "YAY" : "Boooo" );
}

seasons("january");

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function multiplesOf5(num){
    for ( let i = 1; i <= num; i++) {
        if ( i % 5 !== 0 ) {
            console.log(i);
        }
    }
}

multiplesOf5(40);

// =================================================================================================================================================== 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// ===================================================================================================================================================


// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function greetings(arr) {
    console.log( arr[0] < arr[arr.length -1] ? "Hi" : arr[0] > arr[arr.length -1] ? "Bye" : "We close in an hour.")
}

greetings([72, 7, 9, 40, 14, 20]);

// =================================================================================================================================================== 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// ===================================================================================================================================================


//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function evenNumArray(arr) {
    let newArr = [];

    arr.forEach(x => {  
        if (x % 2 === 0) {
            newArr.push(x)
        }
    })

    return newArr;
}

console.log( evenNumArray([1,2,3,4,5,6,7,8]) )
