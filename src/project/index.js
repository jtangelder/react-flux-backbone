require('./shared/polyfills/Object.assign');

var React = require('react');
var App = require('./app/components/App');


React.renderComponent(<App />, document.getElementById('app'));
