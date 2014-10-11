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
        text: data.text,
        type: c.NOTIFY_ALERT,
        visible: true,
        closable: true
    });
}

NotifyStore.dispatchToken = Dispatcher.register(function(payload){
    var data = payload.data;
    switch(payload.actionType) {
        case c.NOTIFY_LOADING:
        case c.FLICKR_FIND:
            NotifyStore.set({
                text: data.text || 'Loading...',
                type: c.NOTIFY_LOADING,
                visible: true,
                closable: false
            });
            break;

        case c.NOTIFY_LOADED:
        case c.FLICKR_FIND_SUCCESS:
            if(NotifyStore.get('type') === c.NOTIFY_LOADING) {
                NotifyStore.set({
                    visible: false
                });
            }
            break;

        case c.NOTIFY_HIDE:
            NotifyStore.set({
                visible: false
            });
            break;

        case c.NOTIFY_ALERT:
            alert(data.text);
            break;

        case c.FLICKR_FIND_FAIL:
            alert('Flickr failed.');
            break;
    }
});

module.exports = NotifyStore;
