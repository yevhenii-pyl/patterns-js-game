import Dice from "../Dice/Dice.js";

class Fight {
  constructor (firstCharacter, secondCharacter) {
    this._firstCharacter = firstCharacter;
    this._secondCharacter = secondCharacter;
  }

  rollDice(character){
    return new Dice(character.level + character.equippedWeaponDamage).rollDice()
  }

  async fight(){
    let stillFighting = true;

    while (stillFighting){
      const firstCharacterRoll = this.rollDice(this._firstCharacter);
      const secondCharacterRoll = this.rollDice(this._secondCharacter);

      if (firstCharacterRoll < secondCharacterRoll) {
        this._firstCharacter.receiveHit();
        console.log(`${this._secondCharacter.name} strikes the ${this._firstCharacter.name}. ${this._firstCharacter.name} HP: ${this._firstCharacter.hp}`);
      } else if ( firstCharacterRoll > secondCharacterRoll ) {
        this._secondCharacter.receiveHit();
        console.log(`${this._firstCharacter.name} strikes the ${this._secondCharacter.name}. ${this._secondCharacter.name} HP: ${this._secondCharacter.hp}`);
      } else {
        console.log( "again" );
      }

      if (this._firstCharacter.isDead()) {
        console.log(`${this._firstCharacter.name} is dead, killed by the ${this._secondCharacter.name}`);
        stillFighting = false;
      }

      if (this._secondCharacter.isDead()) {
        console.log(`${this._secondCharacter.name} is dead, killed by the ${this._firstCharacter.name}`);
        stillFighting = false;
      }
    }
  }
}

export default Fight;
