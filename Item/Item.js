class Item {
  constructor(name){
    this._name = name;
  }

  get name(){
    return this._name;
  }

  isItem(){
    return true
  }
}

export default Item;
