class Bag {
  constructor (name, capacity) {
    this._name = name;
    this._capacity = capacity;
    this._items = [];
  }

  stash(item) {
    if (this.size >= this._capacity) {
      console.log ("Your bag is full, you have to drop an item first");
    }

    if (item.isItem) {
      this._items.push(item);
      console.log(`You stashed the ${item.name} in ${this._name}`);
    } else {
      console.error( `A bag can only be filled with items not ${typeof item}'s`);
    }
  }

  drop(itemName) {
    const item = this._items.find(stashedItem => stashedItem.name === itemName);

    if(!item){
      console.error( "You can't drop an item you don't have!")
    }

    const index = this._items.indexOf(item);
    this._items.splice(index, 1);
  }

  get size() {
    return this._items.length;
  }

  get items() {
    return this._items.map(item => item.name);
  }

}

export default Bag;
