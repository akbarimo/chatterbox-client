// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    window.messageList = new Messages();
    this.$chats.on('click', '.username', this.handleClick);
  },

  render: function() {
    // TODO: Render _all_ the messages.
    // Iterate and display all the messages for current room
    this.$chats.empty();
    messageList.retrieve().forEach((message) => {
      if (message.roomname === RoomsView.$currentRoom) {
        this.renderMessage(message);
      }
    });
  },

  renderMessage: function(obj) {
    this.$chats.append(MessageView.render(obj));
  },

  handleClick: function(e) {

    let username = $(e.target).data('username');
    if (username === 'anonymous') {
      return;
    }

    friendsList.toggleStatus(username, this.render);
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};