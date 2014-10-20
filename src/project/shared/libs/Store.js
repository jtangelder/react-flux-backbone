var Backbone = require('backbone');
var Dispatcher = require('project/shared/dispatcher');


var baseStore = {
    initialize: function() {
        this.dispatchId = Dispatcher.register(this.handleDispatch.bind(this));
    },

    handleDispatch: function() {

    }
};

module.exports = {
    Model: Backbone.Model.extend(baseStore),
    Collection: Backbone.Collection.extend(baseStore)
};
