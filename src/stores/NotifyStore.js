var Backbone = require('backbone');
var c = require('../constants');
var Dispatcher = require('../dispatcher');


var NotifyStore = new Backbone.Model({
    text: null,
    visible: false,
    closable: true
});

function alert(text) {
    NotifyStore.set({
        text: text,
        visible: true,
        closable: true
    });
}

NotifyStore.dispatchToken = Dispatcher.register(function(payload){
    switch(payload.actionType) {
        case c.FLICKR_FIND:
            NotifyStore.set({
                text: 'Loading...',
                visible: true,
                closable: false
            });
            break;

        case c.NOTIFY_HIDE:
        case c.FLICKR_FIND_SUCCESS:
            NotifyStore.set({
                visible: false
            });
            break;

        case c.FLICKR_FIND_FAIL:
            alert('Loading failed... Please try again.');
            break;
    }
});

module.exports = NotifyStore;
