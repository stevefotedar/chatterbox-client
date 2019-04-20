var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  render: function(msgObj) {
    let html = '';
    let placeHolder = {};

    if (msgObj.roomname) {
      placeHolder.roomname = _.escape(msgObj.roomname.slice(0, 10));
    } else {
      placeHolder.roomname = 'undefined';
    }

    if (msgObj.username) {
      placeHolder.username = _.escape(msgObj.username.replace('%20',' '));
    } else {
      placeHolder.username = 'Anonymous';
    }

    if (msgObj.text) {
      placeHolder.text = _.escape(msgObj.text);
    } else {
      placeHolder.text = '';
    }


    html += MessageView.render(placeHolder);
    MessagesView.$chats.append(html);
  }

};