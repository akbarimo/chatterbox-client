// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

class Messages {
  // TODO: Define how you want to store your messages.

  constructor() {
    this._data = [];
    this._latestData = 0;
  }
  sort(newData) {
    newData.forEach((messageObject, i, collection) => {
      if (!messageObject.roomname || !messageObject.roomname[0]) {
        messageObject.roomname = 'lobby';
      }
      messageObject.roomname = messageObject.roomname.toLowerCase();
      if (!messageObject.username || !messageObject.username[0]) {
        messageObject.username = 'Anonymous';
      }
      if (!messageObject.text || messageObject.text.length === 0) {
        return collection.splice(i, 1);
      }
      if (this._latestData < messageObject['message_id']) {
        this._latestData = messageObject['message_id'];
        roomsList._latestData = messageObject['message_id'];
      }
      this._data.push(messageObject);
      roomsList.addRoom(messageObject.roomname);
    });
  }

  updateMessages(data) {
    if (this._latestData === 0) {
      this.sort(data);
      return;
    }
    for (var i = 0; i < data.length; i++) {
      // if newData's messageid <= latestData
      if (data[i]['message_id'] === this._latestData) {
        // invoke sort with remaining data(collection.slice(0, i))
        this.sort(data.slice(0, i));
        return;
      }
    }
  }

  retrieve() {
    return this._data;
  }

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

}