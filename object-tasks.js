// =================================================================================================================================================== 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// ===================================================================================================================================================

// Object tasks
// Link: https://javascript.info/object

// =================================================================================================================================================== 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// ===================================================================================================================================================

// Task name: "Hello, object"

/* Instructions:
    Write the code, one line for each action:

    Create an empty object user.
    Add the property name with the value John.
    Add the property surname with the value Smith.
    Change the value of the name to Pete.
    Remove the property name from the object.
*/


// My code

let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// =================================================================================================================================================== 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// ===================================================================================================================================================

// Task name: Check for emptiness

/* Instructions:
    Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

    Should work like that:

    let schedule = {};

    alert( isEmpty(schedule) ); // true

    schedule["8:30"] = "get up";

    alert( isEmpty(schedule) ); // false
*/

// My code

function isEmpty(obj) {
    for (let key in obj) {
        return false;  //the for...in loop will run if there is a key; so if there's a key, the function will return false
    } return true; //if the for...in loop doesn't run (because there is no key) the function will return true
}

let fruit = {};

isEmpty(fruit);

// =================================================================================================================================================== 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// ===================================================================================================================================================

// Task name: "Sum object properties"

/* Instructions:
    We have an object storing salaries of our team:

    let salaries = {
      John: 100,
      Ann: 160,
      Pete: 130
    }

    Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

    If salaries is empty, then the result must be 0.
*/

// My code

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}

// =================================================================================================================================================== 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// ===================================================================================================================================================

// Task name: "Multiply numeric property values by 2"

/* Instructions:
    Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

    For instance:

    // before the call
    let menu = {
      width: 200,
      height: 300,
      title: "My menu"
    };

    multiplyNumeric(menu);

    // after the call
    menu = {
      width: 400,
      height: 600,
      title: "My menu"
    };
    Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

    P.S. Use typeof to check for a number here.
*/

// My code

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }

    }
}