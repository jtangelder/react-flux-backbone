var React = require('react');
var c = require('../constants');
var storeMixin = require('../helpers/storeMixin');
var RouterStore = require('../stores/RouterStore');

var Header = require('./Header');
var Notify = require('./Notify');
var Footer = require('./Footer');


module.exports = React.createClass({
    mixins: [storeMixin(RouterStore)],

    getInitialState: function() {
        return { RouterStore: RouterStore };
    },

    getBodyComponent: function() {
        switch (this.state.RouterStore.get('route')) {
            case c.ROUTE_HELP:
                return require('./Help')();

            case c.ROUTE_FLICKR:
                return require('./Flickr')();

            case c.ROUTE_TODOS:
            default:
                return require('./Todos')();
        }
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
