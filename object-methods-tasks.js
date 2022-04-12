// =================================================================================================================================================== 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// ===================================================================================================================================================

// Object methods tasks
// Link: https://javascript.info/object-methods

// =================================================================================================================================================== 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// ===================================================================================================================================================

// Task name: "Create a calculator"

/* Instructions:
    Create an object calculator with three methods:

    read() prompts for two values and saves them as object properties.
    sum() returns the sum of saved values.
    mul() multiplies saved values and returns the result.
    let calculator = {
      // ... your code ...
    };

    calculator.read();
    alert( calculator.sum() );
    alert( calculator.mul() );
*/

// My code

let calculator = {
    read(a,b) {
        calculator.a = +prompt('value one?', 0);
        calculator.b = +prompt('value two?', 0);
    },

    sum(){
        return calculator.a + calculator.b;
    },

    mul(){
        return calculator.a * calculator.b;
    },
}

calculator.read();
alert (calculator.sum());
alert (calculator.mul());

// =================================================================================================================================================== 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// ===================================================================================================================================================

// Task name: "Chaining"

/* Instructions:
    There’s a ladder object that allows to go up and down:

    let ladder = {
      step: 0,
      up() {
        this.step++;
      },
      down() {
        this.step--;
      },
      showStep: function() { // shows the current step
        alert( this.step );
      }
    };
    
    Now, if we need to make several calls in sequence, can do it like this:

    ladder.up();
    ladder.up();
    ladder.down();
    ladder.showStep(); // 1
    ladder.down();
    ladder.showStep(); // 0
    
    Modify the code of up, down and showStep to make the calls chainable, like this:

    ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
    Such approach is widely used across JavaScript libraries.
*/

// My code

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this;
    }
  };

  ladder.up().up().down().showStep().down().showStep();