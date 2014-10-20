var React = require('react');
var storeMixin = require('project/shared/helpers/storeMixin');

var RouterActions = require('project/router/RouterActions');
var FlickrActions = require('../FlickrActions');
var FlickrStore = require('../FlickrStore');

var FlickrForm = require('./FlickrForm');
var FlickrList = require('./FlickrList');


module.exports = React.createClass({
    mixins: [storeMixin(FlickrStore)],

    getInitialState: function() {
        return {
            FlickrStore: FlickrStore
        };
    },

    componentDidMount: function() {
        if(this.props.routeParams && this.props.routeParams[0]) {
            FlickrActions.find(this.props.routeParams[0]);
        }
    },

    componentWillReceiveProps: function(newProps) {
        if(newProps.routeParams && newProps.routeParams[0]) {
            FlickrActions.find(newProps.routeParams[0]);
        }
    },

    onSearch: function(query) {
        RouterActions.navigate("flickr/"+ encodeURIComponent(query));
    },

    render: function() {
        return <div>
            <FlickrForm onSearch={this.onSearch} value={this.props.routeParams[0]} />
            <FlickrList FlickrStore={this.state.FlickrStore} />
        </div>
    }
});
