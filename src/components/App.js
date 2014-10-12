var React = require('react');
var c = require('../constants');

var storeMixin = require('../helpers/storeMixin');
var RouterStore = require('../stores/RouterStore');

var Header = require('./Header');
var Notify = require('./Notify');
var Footer = require('./Footer');
var Help = require('./Help');
var Flickr = require('./Flickr');
var Todos = require('./Todos');



module.exports = React.createClass({
    mixins: [storeMixin(RouterStore)],

    getInitialState: function() {
        return { RouterStore: RouterStore };
    },

    render: function() {
        var body;
        switch(this.state.RouterStore.get('route')) {
            case c.ROUTE_HELP:
                body = <Help />;
                break;
            case c.ROUTE_FLICKR:
                body = <Flickr />;
                break;
            case c.ROUTE_TODOS:
            default:
                body = <Todos />;
        }

        return <div>
            <Header />
            <Notify />
            {body}
            <Footer />
        </div>;
    }
});
