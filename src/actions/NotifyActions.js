var c = require('../constants');
var dispatch = require('../dispatcher').dispatchAction;


module.exports = {
    hide: function() {
        dispatch(c.NOTIFY_HIDE);
    }
};
