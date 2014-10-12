var React = require('react');
var process = require('process');
var c = require('../constants');
var storeMixin = require('../helpers/storeMixin');
var RouterStore = require('../stores/RouterStore');

var Header = require('./Header');
var Notify = require('./Notify');
var Footer = require('./Footer');


module.exports = React.createClass({
    mixins: [storeMixin(RouterStore)],

    getInitialState: function() {
        return {
            RouterStore: RouterStore,
            route: null,
            bodyComponent: function() { return null }
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

        // example of code-splitting with webpack
        // this causes some overhead since it includes Modernizr
        // when you think this is unneeded, then you can just return the component with a simple switch statement
        if(this.state.route != route) {
            switch (route) {
                case c.ROUTE_HELP:
                    require.ensure([], function() {
                        this.ensureBodyComponent(route, require('./Help'));
                    }.bind(this));
                    break;

                case c.ROUTE_FLICKR:
                    require.ensure([], function() {
                        this.ensureBodyComponent(route, require('./Flickr'));
                    }.bind(this));
                    break;

                case c.ROUTE_TODOS:
                default:
                    require.ensure([], function() {
                        this.ensureBodyComponent(route, require('./Todos'));
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
