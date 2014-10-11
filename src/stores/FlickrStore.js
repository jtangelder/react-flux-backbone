var Backbone = require('backbone');
var c = require('../constants');
var Dispatcher = require('../dispatcher');

var NotifyActions = require('../actions/NotifyActions');
var FlickrStore = new Backbone.Collection([]);


FlickrStore.dispatchToken = Dispatcher.register(function(payload){
    var data = payload.data;
    switch(payload.actionType) {
        case c.FLICKR_FIND:
            Backbone.$.getJSON(
                "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
                    tags: data.query,
                    format: 'json'
                },
                function(results) {
                    FlickrStore.reset();
                    FlickrStore.add(results.items);

                    NotifyActions.loaded();
                });
            break;
    }
});

module.exports = FlickrStore;
