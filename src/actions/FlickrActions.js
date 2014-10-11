var c = require('../constants');
var Dispatcher = require('../dispatcher');
var FlickrStore = require('../stores/FlickrStore');
var NotifyActions = require('../actions/NotifyActions');

module.exports = {
    find: function(query) {
        Dispatcher.dispatchAction(c.FLICKR_FIND, {
            query: query
        });
    }
};
