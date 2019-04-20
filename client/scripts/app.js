var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    
    // RoomsView.$select.append(`<option value='volvo'>Volvo</option>`);
    // RoomsView.$select.append(`<option value='ford'>Ford</option>`);
    // console.log(RoomsView.$select[0].value);
    // console.log($('option').val() || []);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      for (var key of data.results) {
        MessagesView.render(key);
        RoomsView.render(key);
      }

      // MessagesView.initialize(data.results);
        
      // }
      

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
