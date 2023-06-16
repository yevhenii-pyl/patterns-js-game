import Character from "./Character.js";

class Monster extends Character {
  constructor (name, attributes) {
    super (name, attributes);
  }
}

class MonsterFactory{
  createMonster(name){
    switch (name){
      case 'undead':
        return new Monster('Undead', { hp: 2, weapon: "hand" })
      case 'ork':
        return new Monster('Ork', { hp: 5, weapon: "Iron Sword" })
      case 'chaosKnight':
        return new Monster('Chaos Knight', { hp: 10, weapon: "Hammer" })
    }
  }
}

export default MonsterFactory;
