import Character from "./Character.js";
import {WEAPON_TYPES_WITH_DAMAGE} from "../const/index.js";

class Player extends Character{
  constructor (name, attributes) {
    super (name, attributes);
  }

  levelUp() {
    this._level += 1;
  }

  stashItem(item) {
    if( WEAPON_TYPES_WITH_DAMAGE[item]) {
      console.log( `You found the ${item}` );
      this.setWeapon(item)
    } else {
      console.log(`You found the ${item.name} and placed it in your bag`);
      this._bag.push( item );
    }
  }

  hasInBag(item) {
    return this._bag.includes(item);
  }

  setWeapon(item) {
    if (WEAPON_TYPES_WITH_DAMAGE[this._weapon] < WEAPON_TYPES_WITH_DAMAGE[item]) {
      console.log(`You have equipped the ${item}`);
      this._weapon = item;
      return this._weapon;
    }
  }

  get items(){
    return this._bag.map(item => item.name)
  }
}

export default Player;
