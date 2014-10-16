var React = require('react');

var Header = require('./Header');
var Footer = require('./Footer');
var Notify = require('project/notify/components/Notify');
var Router = require('project/router/components/Router');


module.exports = React.createClass({
    render: function() {
        return <div>
            <Header />
            <Notify />
            <Router />
            <Footer />
        </div>;
    }
});
