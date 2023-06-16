class Room {
  constructor (name, message, doors, monster, item) {
    this._name = name;
    this._message = message;
    this._doors = doors;
    this._monster = monster;
    this._item = item;
  }

  get name(){
    return this._name;
  }

  get doors(){
    return this._doors;
  }

  get monster(){
    return this._monster;
  }

  get message(){
    return this._message;
  }

  get item(){
    return this._item;
  }
}

export default Room;
