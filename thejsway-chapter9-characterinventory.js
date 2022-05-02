// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Coding Time Tasks - "Character Inventory"
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL: https://github.com/thejsway/thejsway/blob/master/manuscript/chapter09.md

/* Instructions: 
Improve the example RPG to add character inventory management according to the following rules:

A character's inventory contains a number of gold and a number of keys.

Each character begins with 10 gold and 1 key.

The character description must show the inventory state.

When a character slays another character, the victim's inventory goes to its vanquisher.

Here's the expected execution result.

*/

// ~*~*~*~*~*~* My Solution

class Character {
    constructor(name, health, strength, gold, keys) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.xp = 0; // XP is always zero for new characters
      this.gold = 10;
      this.keys = 1;
    }
    // Attack a target
    attack(target) {
      if (this.health > 0) {
        const damage = this.strength;
        console.log(
          `${this.name} attacks ${target.name} and causes ${damage} damage points`
        );
        target.health -= damage;
        if (target.health > 0) {
          console.log(`${target.name} has ${target.health} health points left`);
        } else {
          target.health = 0;
          const bonusXP = 10;
          const bonusGold = target.gold;
          const bonusKeys = 
          target.keys;
          console.log(
            `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${bonusGold} gold, and ${bonusKeys} key(s).`
          );
          this.xp += bonusXP;
          this.gold += bonusGold;
          this.keys += bonusKeys;
        }
      } else {
        console.log(`${this.name} can't attack (they've been eliminated)`);
      }
    }
    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points, ${this
        .strength} as strength, ${this.xp} XP points, ${this.gold} gold, and ${this.keys} key(s).`;
    }
  }

