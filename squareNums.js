//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function numberSquared(arr){
    let newArr = arr.map( x => Math.pow(x, 2));
    console.log(newArr);
}

numberSquared([2,4,6]);