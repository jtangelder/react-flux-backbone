var React = require('react');
var constants = require('../constants');
var storeMixin = require('project/helpers/storeMixin');
var RouterStore = require('../RouterStore');


module.exports = React.createClass({
    mixins: [storeMixin(RouterStore)],

    getInitialState: function() {
        return { RouterStore: RouterStore };
    },

    render: function() {
        switch (this.state.RouterStore.get('route')) {
            case 'help':
                return require('project/app/components/Help')();

            case 'flickr':
                return require('project/flickr/components/Flickr')();

            case 'todos':
            default:
                return require('project/todos/components/Todos')();
        }
    }
});
