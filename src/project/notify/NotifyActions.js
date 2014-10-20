var constants = require('./constants');
var dispatch = require('project/shared/helpers/dispatch');


module.exports = {
    hide: function() {
        dispatch(constants.NOTIFY_HIDE);
    }
};
