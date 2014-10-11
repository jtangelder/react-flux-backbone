var c = require('../constants');
var Dispatcher = require('../dispatcher');
var NotifyActions = require('../actions/NotifyActions');


module.exports = {
    find: function(query) {
        NotifyActions.loading('Searching...');

        Dispatcher.dispatchAction(c.FLICKR_FIND, {
            query: query
        });
    }
};
