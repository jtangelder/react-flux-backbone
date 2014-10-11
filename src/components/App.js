var React = require('react');
var c = require('../constants');

var serviceMixin = require('../utils/serviceMixin');
var RouterService = require('../services/RouterService');

var Header = require('./Header');
var Footer = require('./Footer');
var Help = require('./Help');
var Todos = require('./Todos');

function getComponentState() {
    return {
        route: RouterService.attributes
    };
}

module.exports = React.createClass({
    mixins: [serviceMixin(RouterService)],

    getInitialState: getComponentState,
    onServiceUpdate: function() {
        this.setState(getComponentState.bind(this)());
    },

    render: function() {
        var body;
        switch(this.state.route.name) {
            case c.ROUTE_HELP:
                body = <Help />;
                break;
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
