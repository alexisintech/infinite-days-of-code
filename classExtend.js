// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// CLASS 31 - 05042022 
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *


/* Instructions: 
Add new classes that are extended from class Animal.
*/

// Original Code:

class Animal{
    constructor(name){
        this._name = name // we add _ 
    }
    get name(){ // use something called a "getter"
        return this._name // when .name is called (NOT _name), the getter is activated. the getter redirects .name to get the info from ._name
                        // getter does not allow the name property to be updated/changed.
                        // so its like accessing variable.name but redirecting variable.name to the information from variable._name
    }
    speak(){
        console.log(`${this._name} makes a sound`)
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name) // accounts for all of the body from class Animal
                    // name will get passed back to the original class Animal, get passed as an argument into the parameter there
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} barks`)
    }    
}

class Cat extends Animal{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        console.log(`${this.name} meows`)
    }    
}

// My code (addition):

class Snake extends Animal{
    constructor(name, species, commonName){
        super(name)
        this._species = species;
        this._commonName = commonName;
    }
    get species() {
        return this._species;
    }
    get commonName() {
        return this._commonName;
    }
    speak(){
        super.speak()
        console.log(`${this.name} hisses`);
    }
}

let machi = new Dog('The Machine','Pitbull');
let luna = new Cat('Luna', 'BIGCHUNKFLUFF')
let blaze = new Snake('Blaze', 'Sistrurus miliarius', 'Pygmy Rattlesnake');

blaze


let farm = [machi, luna, blaze]

// polymorphism - each of the descendant siblings have their own interfaces (speak()). getting rid of if..else if, or switch cases
for( a of farm ){
    a.speak()
}