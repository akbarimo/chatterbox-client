// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

class Rooms {
  constructor(data) {
    this._data = new Set();
    this._latestData = 0;
  }
  // TODO: Define how you want to store the list of rooms
  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  addRoom(roomname) {
    this._data.add(roomname.toLowerCase());
  }

  selectRoom() {

  }

  retrieve() {
    return this._data;
  }

}