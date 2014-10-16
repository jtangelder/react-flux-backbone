var constants = require('./constants');
var dispatch = require('project/dispatcher').dispatchAction;


module.exports = {
    hide: function() {
        dispatch(constants.NOTIFY_HIDE);
    }
};
