var Backbone = require('backbone');
var c = require('../constants');
var Dispatcher = require('../dispatcher');


var FlickrStore = new Backbone.Collection([]);

FlickrStore.dispatchToken = Dispatcher.register(function(payload) {
    var data = payload.data;
    switch (payload.actionType) {
        case c.FLICKR_FIND_SUCCESS:
            FlickrStore.reset();
            FlickrStore.add(data.items);
            break;
    }
});

module.exports = FlickrStore;
