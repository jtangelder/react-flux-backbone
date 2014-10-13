var React = require('react');
var c = require('../constants');
var storeMixin = require('helpers/storeMixin');
var RouterStore = require('../RouterStore');

var Header = require('./Header');
var Notify = require('Notify/components/Notify');
var Footer = require('./Footer');


module.exports = React.createClass({
    mixins: [storeMixin(RouterStore)],

    getInitialState: function() {
        return { RouterStore: RouterStore };
    },

    getBodyComponent: function() {
        switch (this.state.RouterStore.get('route')) {
            case 'help':
                return require('App/components/Help')();

            case 'flickr':
                return require('Flickr/components/Flickr')();

            case 'todos':
            default:
                return require('Todos/components/Todos')();
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
