import { WEAPON_TYPES_WITH_DAMAGE } from "../const/index.js";

class Character {
  constructor (name, attributes) {
    this._name = name;
    this._hp = attributes?.hp || 10;
    this._level = attributes?.level || 1;
    this._bag = [];
    this._weapon = attributes.weapon || 'hand';
  }

  get name(){
    return this._name;
  }

  get weapon() {
    return this._weapon;
  }

  get hp(){
    return this._hp;
  }

  get level() {
    return this._level;
  }

  get equippedWeaponDamage() {
    return WEAPON_TYPES_WITH_DAMAGE[this._weapon]
  }

  receiveHit(){
    this._hp = this._hp - 1;
  }

  isDead(){
    return this._hp === 0;
  }



}

export default Character;
