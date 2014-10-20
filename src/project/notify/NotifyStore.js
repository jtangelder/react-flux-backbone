var Store = require('project/libs/Store');
var Dispatcher = require('project/shared/dispatcher');

var constants = require('./constants');
var FlickrConstants = require('project/flickr/constants');

class NotifyStore extends Store.Model {
    constructor() {
        this.default = {
            text: null,
            visible: false,
            closable: true
        };
        super();
    }

    handleDispatch(payload) {
        switch(payload.actionType) {
            case FlickrConstants.FLICKR_FIND:
                this.set({
                    text: 'Loading...',
                    visible: true,
                    closable: false
                });
                break;

            case constants.NOTIFY_HIDE:
            case FlickrConstants.FLICKR_FIND_SUCCESS:
                this.set({ visible: false });
                break;

            case FlickrConstants.FLICKR_FIND_FAIL:
                this.alert('Loading failed... Please try again.');
                break;
        }
    }

    alert(text) {
        this.set({
            text: text,
            visible: true,
            closable: true
        });
    }
}

module.exports = new NotifyStore();
