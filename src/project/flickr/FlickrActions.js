var constants = require('./constants');
var dispatch = require('project/dispatcher').dispatchAction;
var Backbone = require('backbone');


module.exports = {
    find: function(query) {
        dispatch(constants.FLICKR_FIND, { query: query });
        Backbone.$.getJSON(
            "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
                tags: query,
                format: 'json'
            }, function(results) {
                if(results && results.items) {
                    dispatch(constants.FLICKR_FIND_SUCCESS, { items: results.items });
                } else {
                    dispatch(constants.FLICKR_FIND_FAIL);
                }
            });
    }
};
