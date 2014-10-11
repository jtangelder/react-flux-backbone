var c = require('../constants');
var Dispatcher = require('../dispatcher');

module.exports = {
    loading: function(text) {
        Dispatcher.dispatchAction(c.NOTIFY_LOADING, {
            text: text
        });
    },
    loaded: function() {
        Dispatcher.dispatchAction(c.NOTIFY_LOADED);
    },
    alert: function(text) {
        Dispatcher.dispatchAction(c.NOTIFY_ALERT, {
            text: text
        });
    },
    hide: function() {
        Dispatcher.dispatchAction(c.NOTIFY_HIDE);
    }
};
