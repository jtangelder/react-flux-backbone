var React = require('react');
var c = require('../constants');

var storeMixin = require('../utils/storeMixin');
var RouterStore = require('../stores/RouterStore');

var Header = require('./Header');
var Footer = require('./Footer');
var Help = require('./Help');
var Todos = require('./Todos');

function getComponentState() {
    return {
        route: RouterStore.attributes
    };
}

module.exports = React.createClass({
    mixins: [storeMixin(RouterStore)],

    getInitialState: getComponentState,
    onStoreUpdate: function() {
        this.setState(getComponentState.bind(this)());
    },

    render: function() {
        var body;
        switch(this.state.route.name) {
            case c.ROUTE_HELP:
                body = <Help />;
                break;
            case c.ROUTE_TODOS:
            default:
                body = <Todos />;
        }

        return <div>
            <Header />
            {body}
            <Footer />
        </div>;
    }
});
