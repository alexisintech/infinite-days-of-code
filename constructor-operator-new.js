// =================================================================================================================================================== 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// ===================================================================================================================================================

// Constructor, operator "new" tasks
// Link: https://javascript.info/constructor-new

// =================================================================================================================================================== 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// ===================================================================================================================================================

// Task name: "Two functions - one object"

/* Instructions:
    Is it possible to create functions A and B so that new A() == new B()?

    function A() { ... }
    function B() { ... }

    let a = new A;
    let b = new B;

    alert( a == b ); // true
    If it is, then provide an example of their code.
*/

// My code

let obj = {};

function A() { return obj; }
function B() { return obj; }

console.log( new A() == new B() );

// =================================================================================================================================================== 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// ===================================================================================================================================================

// Task name: "Create new Calculator"

/* Instructions:
    Create a constructor function Calculator that creates objects with 3 methods:

    read() asks for two values using prompt and remembers them in object properties.
    sum() returns the sum of these properties.
    mul() returns the multiplication product of these properties.
    For instance:

    let calculator = new Calculator();
    calculator.read();

    alert( "Sum=" + calculator.sum() );
    alert( "Mul=" + calculator.mul() );
*/

// My code

function Calculator() {
    this.read = function() {
        this.a = +prompt("Value 1?", 0);
        this.b = +prompt("Value 2?", 0);
    },
    this.sum = function() {
        return this.a + this.b;
    },
    this.mul = function() {
        return this.a * this.b;
    }
}

let calculator = new Calculator();
    calculator.read();

    alert( "Sum=" + calculator.sum() );
    alert( "Mul=" + calculator.mul() );

let calculator2 = new Calculator();
    calculator2.read();
    alert( "Sum=" + calculator2.sum() );
    alert( "Mul=" + calculator2.mul() );