/**
 * this file contains logic for webpack code-splitting, based on the router
 * needs to be updated to react 0.12
 */
var React = require('react');
var process = require('process');
var storeMixin = require('project/helpers/storeMixin');
var constants = require('../constants');
var RouterStore = require('../RouterStore');


module.exports = React.createClass({
    mixins: [storeMixin(RouterStore)],

    getInitialState: function() {
        return {
            RouterStore: RouterStore,
            route: null,
            bodyComponent: function() {
                return null
            }
        };
    },

    ensureBodyComponent: function(route, component) {
        process.nextTick(function() {
            this.setState({
                route: route,
                bodyComponent: component
            });
        }.bind(this));
    },

    getBodyComponent: function() {
        var route = this.state.RouterStore.get('route');

        if (this.state.route != route) {
            switch (route) {
                case 'help':
                    require.ensure([], function() {
                        this.ensureBodyComponent(route, require('project/app/components/Help'));
                    }.bind(this));
                    break;

                case 'flickr':
                    require.ensure([], function() {
                        this.ensureBodyComponent(route, require('project/flickr/components/Flickr'));
                    }.bind(this));
                    break;

                case 'todos':
                default:
                    require.ensure([], function() {
                        this.ensureBodyComponent(route, require('project/todos/components/Todos'));
                    }.bind(this));
                    break;
            }
        }
        return this.state.bodyComponent();
    },

    render: function() {
        return this.getBodyComponent();
    }
});
