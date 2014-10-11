var Backbone = require('backbone');
var c = require('../constants');
var Dispatcher = require('../dispatcher');


var NotifyStore = new Backbone.Model({
    text: null,
    visible: false,
    closable: true
});

NotifyStore.dispatchToken = Dispatcher.register(function(payload){
    var data = payload.data;
    switch(payload.actionType) {
        case c.NOTIFY_LOADING:
            NotifyStore.set({
                text: data.text || 'Loading...',
                type: c.NOTIFY_LOADING,
                visible: true,
                closable: false
            });
            break;

        case c.NOTIFY_LOADED:
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
            NotifyStore.set({
                text: data.text,
                type: c.NOTIFY_ALERT,
                visible: true,
                closable: true
            });
            break;
    }
    return true;
});

module.exports = NotifyStore;
