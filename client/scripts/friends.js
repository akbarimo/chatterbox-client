// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

class Friends {
  // TODO: Define how you want to store your list of friends.
  constructor() {
    this._data = new Set();
  }

  items() {
    return [...this._data];
  }

  isFriend(name) {
    return this._data.has(name);
  }

  toggleStatus(name, callback = () => {}) {
    if (this.isFriend(name)) {
      this._data.delete(name);
      callback(false);
    } else {
      this._data.add(name);
      callback(true);
    }
  }

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

}