// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Coding Time Tasks - "DOGS"
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL: https://github.com/thejsway/thejsway/blob/master/manuscript/chapter09.md

/* Instructions: 
Complete the following program to add the definition of the Dog class.

Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!".

// TODO: define the Dog class here

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

*/

// ~*~*~*~*~*~* My Solution

class Dog {
    constructor(name, species, size){
        this.name = name;
        this.species = species;
        this.size = size;
    }
    bark(){
        console.log('Woof woof!');
    }
}

// ~*~*~*~*~*~* Leon's Solution


