var React = require('react');
var storeMixin = require('project/helpers/storeMixin');
var RouterStore = require('../RouterStore');


module.exports = React.createClass({
    mixins: [storeMixin(RouterStore)],

    getInitialState: function() {
        return { RouterStore: RouterStore };
    },

    render: function() {
        var props = {
            route: this.state.RouterStore.get('route'),
            routeParams: this.state.RouterStore.get('params')
        };

        switch (this.state.RouterStore.get('route')) {
            case 'help':
                return require('project/app/components/Help')(props);

            case 'flickr':
                return require('project/flickr/components/Flickr')(props);

            case 'todos':
            default:
                return require('project/todos/components/Todos')(props);
        }
    }
});
