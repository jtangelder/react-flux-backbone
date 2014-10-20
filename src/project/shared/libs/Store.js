var Backbone = require('backbone');
var Dispatcher = require('project/shared/dispatcher');


var baseStore = {
	/**
	 * backbone init method
	 */
    initialize: function() {
        this.dispatchId = Dispatcher.register(this.handleDispatch.bind(this));
    },

	/**
	 * handle the dispatcher actions
	 * @param {Object} payload
	 */
    handleDispatch: function(payload) { }
};

module.exports = {
    Model: Backbone.Model.extend(baseStore),
    Collection: Backbone.Collection.extend(baseStore)
};
