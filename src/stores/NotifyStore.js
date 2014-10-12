var Backbone = require('backbone');
var c = require('../constants');
var Dispatcher = require('../dispatcher');


var NotifyModel = Backbone.Model.extend({
    default: {
        text: null,
        visible: false,
        closable: true
    },

    initialize: function() {
        this.dispatchId = Dispatcher.register(this.handleDispatch.bind(this));
    },

    handleDispatch: function(payload) {
        switch(payload.actionType) {
            case c.FLICKR_FIND:
                this.set({
                    text: 'Loading...',
                    visible: true,
                    closable: false
                });
                break;

            case c.NOTIFY_HIDE:
            case c.FLICKR_FIND_SUCCESS:
                this.set({ visible: false });
                break;

            case c.FLICKR_FIND_FAIL:
                this.alert('Loading failed... Please try again.');
                break;
        }
    },

    alert: function(text) {
        this.set({
            text: text,
            visible: true,
            closable: true
        });
    }
});

var NotifyStore = new NotifyModel();
module.exports = NotifyStore;
