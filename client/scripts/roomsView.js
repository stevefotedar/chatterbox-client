var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$select.change(function() {
      $('.chat').show()
      let fltrOption = $('option:selected').val();
      $('.chat').not('#' + fltrOption + '').hide();
    });
  },

  render: function(msgObj) {
    let bool = false;
    $('option').each(function () {
      if (msgObj.roomname) {
        if ($(this).val() === msgObj.roomname.slice(0, 10)) {
          bool = true;
          return false;
        }
      }
    });
    if (!bool && msgObj.roomname) {
      let room = _.escape(msgObj.roomname.slice(0, 10));
      RoomsView.$select.append(`<option value='${room}'>${room}</option>`);
    }
  }

};
