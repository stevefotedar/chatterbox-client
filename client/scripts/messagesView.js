var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  render: function(msgObj) {
    let html = '';
    let placeHolder = {};

    if (msgObj.username) {
      placeHolder.username = _.escape(msgObj.username);
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