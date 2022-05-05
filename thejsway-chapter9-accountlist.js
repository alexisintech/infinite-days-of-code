// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Coding Time Tasks - "Account List"
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL: https://github.com/thejsway/thejsway/blob/master/manuscript/chapter09.md

/* Instructions: 
A bank account is defined by:

A name property.
A balance property, initially set to 0.
A credit method adding the value passed as an argument to the account balance.
A describe method returning the account description.
Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. 
Next, the program credits 1000 to each account and shows its description.

*/

// ~*~*~*~*~*~* My Solution

class Account {
    constructor(name, balance){
        this.name = name;
        this.balance = 0;
    }
    credit(increase){
        this.balance += increase;
    }
    describe(){
        console.log(`owner: ${this.name}, balance: ${this.balance}`);
    }
}

let newAccounts = [];

let sean = new Account ('Sean');
newAccounts.push(sean);
sean.describe() // or newAccounts[0].describe();

let brad = new Account ('Brad');
newAccounts.push(brad); // or newAccounts[1].describe();
brad.describe();

let georges = new Account ('Georges');
newAccounts.push(georges); // or newAccounts[2].describe();
georges.describe();


// Add 1000 to each account
newAccounts.forEach((e) => e.credit(1000))
    // forEach looks for every element (e) in the array newAccounts.
    // e (the element) is the same as saying newAccounts[i] where i = index.
    // e.credit() is the same as saying newAccounts[i].credit()

newAccounts.forEach((e) => console.log(e.describe())) // check each account to see if the balance increased

