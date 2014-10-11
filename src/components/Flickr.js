var React = require('react');
var storeMixin = require('../utils/storeMixin');

var NotifyActions = require('../actions/NotifyActions');
var FlickrActions = require('../actions/FlickrActions');
var FlickrStore = require('../stores/FlickrStore');
var FlickrForm = require('./FlickrForm');
var FlickrList = require('./FlickrList');


function getComponentState() {
    return {
        photos: FlickrStore.models
    };
}

module.exports = React.createClass({
    mixins: [storeMixin(FlickrStore)],

    getInitialState: getComponentState,
    onStoreUpdate: function() {
        this.setState(getComponentState.bind(this)());
    },

    onSearch: function(query) {
        FlickrActions.find(query);
    },

    render: function() {
        return <div>
            <FlickrForm onSearch={this.onSearch} />
            <FlickrList photos={this.state.photos} />
        </div>
    }
});
