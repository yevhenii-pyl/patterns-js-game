class Weapon {
  constructor (name, strength) {
    this._name = name;
    this._strength = strength;
  }

  get name(){
    return this._name;
  }

  get strength(){
    return this._strength;
  }

  isWeapon() {
    return true;
  }
}

export default Weapon;
