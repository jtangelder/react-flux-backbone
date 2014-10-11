var c = require('../constants');
var dispatch = require('../dispatcher').dispatchAction;


module.exports = {
    loading: function(text) {
        dispatch(c.NOTIFY_LOADING, { text: text });
    },
    loaded: function() {
        dispatch(c.NOTIFY_LOADED);
    },
    alert: function(text) {
        dispatch(c.NOTIFY_ALERT, { text: text });
    },
    hide: function() {
        dispatch(c.NOTIFY_HIDE);
    }
};
