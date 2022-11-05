// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $currentRoom: '',
  rooms: [],

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    this.$select.on('change', this.handleChange);
    this.$button.on('click', this.handleClick);
    window.roomsList = new Rooms();
  },

  render: function() {
    // TODO: Render out the list of rooms.
    // this.$select.empty();
    roomsList.retrieve().forEach((item) => {
      if (!this.rooms.includes(item)) {
        this.renderRoom(item);
      }
    });
    let options = this.$select.children();
    for (let i = 0; i < options.length; i++) {
      this.rooms.push(options[i].innerHTML);
    }
    this.$currentRoom = this.$select.find(':selected')[0].innerHTML;
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    this.$select.append(`<option value=${roomname}>${roomname}</option>`);
  },

  handleChange: function() {
    // TODO: Handle a user selecting a different room.
    this.render();
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    let roomname = prompt('Enter a room name');
    if (roomname) {
      roomsList.addRoom(roomname);
      MessagesView.render();
      roomsView.render();
    }
  }

};