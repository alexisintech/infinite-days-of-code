//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

// Begin by creating a function
// function multiNumsInArray() {}

// We know that our parameter is an array, because the function is taking in and playing with the array
// function multiNumsInArray(arr) {}

// Now we need to tell the function to get a number from the array and multiply it to the number that was grabbed before it.
// We can use a forEach loop to grab the numbers from the array. 
// We can tell the forEach loop that every time it grabs a number, multiply it by the product AND reassign the product to the new answer.
/* function multiNumsInArr(arr) {
    arr.forEach( num => product *= num );            <--- *= we are getting a number, multiplying it by the previous product, and reassigning 'product' to the new product
}
*/

// If the function runs and grabs the first number from the array, and attempts to multiply it by the product, it will not work.
// This is because 'product' does not exist and isn't declared.
// We must declare product
/* function multiNumsInArr(arr) {
    let product = 1;        <--- we declare product and set it to '1' so that the first number from the array that we grab is multiplied by 1 (gives a product of itself)
    arr.forEach( num => product *= num );
}
*/

// Lastly, we need to alert our product.

function multiNumsInArr(arr) {
    let product = 1;
    arr.forEach( num => product *= num );
    alert(product);
}

multiNumsInArr([10,2,3])