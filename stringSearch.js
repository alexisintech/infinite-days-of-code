// Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let gymGirl = "Hittin back and bi's tonight";
console.log( gymGirl.includes('apple') );
console.log( gymGirl.search('apple')); // will return character index where that word started. if the value isn't in there, it will give -1