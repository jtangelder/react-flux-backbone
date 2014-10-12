var React = require('react');
var RouterActions = require('../actions/RouterActions');


module.exports = React.createClass({
    navigate: function(ev) {
        ev.preventDefault();
        var fragment = ev.target.getAttribute('href');
        RouterActions.navigate(fragment, true);
    },

    render: function() {
        return <div>
            <h1>My reactfluxbackbone-app</h1>
            <ul className="list-inline">
                <li><a href="todos" onClick={this.navigate}>Todos</a></li>
                <li><a href="flickr" onClick={this.navigate}>Flickr</a></li>
                <li><a href="help" onClick={this.navigate}>Help</a></li>
            </ul>
            <hr />
        </div>
    }
});
