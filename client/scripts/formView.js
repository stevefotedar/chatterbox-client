var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    Messages.username = App.username;
    Messages.text = message.value;
    Messages.roomname = 'Test';
    Parse.create(Messages);
    App.startSpinner();
    $('.chat').remove();
    App.fetch(App.stopSpinner);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};