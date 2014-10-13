/**
 * this file contains logic for webpack code-splitting, based on the router
 */

var React = require('react');
var c = require('../constants');
var process = require('process');
var storeMixin = require('helpers/storeMixin');
var RouterStore = require('../RouterStore');

var Header = require('./Header');
var Footer = require('./Footer');
var Notify = require('Notify/components/Notify');


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
                        this.ensureBodyComponent(route, require('App/components/Help'));
                    }.bind(this));
                    break;

                case 'flickr':
                    require.ensure([], function() {
                        this.ensureBodyComponent(route, require('Flickr/components/Flickr'));
                    }.bind(this));
                    break;

                case 'todos':
                default:
                    require.ensure([], function() {
                        this.ensureBodyComponent(route, require('Todos/components/Todos'));
                    }.bind(this));
                    break;
            }
        }
        return this.state.bodyComponent();
    },

    render: function() {
        return <div>
            <Header />
            <Notify />
            {this.getBodyComponent()}
            <Footer />
        </div>;
    }
});
