//Create a function that takes in a string
//Alert if the string is a palindrome or not

function palindromeOrNot(string){
    alert( string === string.split("").reverse().join("") ? "Palindrome" : "Not a palindrome" );
}

palindromeOrNot("Racecar".toLowerCase());