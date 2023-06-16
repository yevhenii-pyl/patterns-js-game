import { DICE_SIDES } from "../const/index.js";

class Dice {
  constructor (damageMultiplicator) {
    this._damageMultiplicator = damageMultiplicator;
  }

  randomGenerator(number){
    return Math.floor( Math.random() * number )
  }

  rollDice(){
    return this.randomGenerator(DICE_SIDES) + this.randomGenerator(this._damageMultiplicator);
  }
}

export default Dice;
