var Backbone = require('backbone');
var BackboneStore = require('project/libs/BackboneStore');
var constants = require('./constants');
var Dispatcher = require('project/shared/dispatcher');


var FlickrResult = Backbone.Model.extend({
    getPhoto: function() {
        return this.get('media').m;
    }
});


class FlickrCollection extends BackboneStore.Collection {
    constructor() {
        this.model = FlickrResult;
        super();
    }

    handleDispatch(payload) {
        switch (payload.actionType) {
            case constants.FLICKR_FIND_SUCCESS:
                this.reset();
                this.add(payload.items);
                break;
        }
    }
}

module.exports = new FlickrCollection();
