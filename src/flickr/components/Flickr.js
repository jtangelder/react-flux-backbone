var React = require('react');
var storeMixin = require('helpers/storeMixin');
var FlickrActions = require('../FlickrActions');
var FlickrStore = require('../FlickrStore');

var FlickrForm = require('./FlickrForm');
var FlickrList = require('./FlickrList');


module.exports = React.createClass({
    mixins: [storeMixin(FlickrStore)],

    getInitialState: function() {
        return { FlickrStore: FlickrStore };
    },

    onSearch: function(query) {
        FlickrActions.find(query);
    },

    render: function() {
        return <div>
            <FlickrForm onSearch={this.onSearch} />
            <FlickrList FlickrStore={this.state.FlickrStore} />
        </div>
    }
});
