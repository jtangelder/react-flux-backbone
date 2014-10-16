var Backbone = require('backbone');
var constants = require('./constants');
var Dispatcher = require('project/dispatcher');


var FlickrResult = Backbone.Model.extend({
    getPhoto: function() {
        return this.get('media').m;
    }
});

var FlickrCollection = Backbone.Collection.extend({
    model: FlickrResult,

    initialize: function() {
        this.dispatchId = Dispatcher.register(this.handleDispatch.bind(this));
    },

    handleDispatch: function(payload) {
        switch (payload.actionType) {
            case constants.FLICKR_FIND_SUCCESS:
                this.reset();
                this.add(payload.items);
                break;
        }
    }
});


module.exports = new FlickrCollection();
