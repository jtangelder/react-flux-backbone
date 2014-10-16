var React = require('react');
var RouterLink = require('project/router/components/RouterLink');


module.exports = React.createClass({
    render: function() {
        return <div>
            <h1>My reactfluxbackbone-app</h1>
            <ul className="list-inline">
                <li><RouterLink href="todos">Todos</RouterLink></li>
                <li><RouterLink href="flickr">Flickr</RouterLink></li>
                <li><RouterLink href="help">Help</RouterLink></li>
            </ul>
            <hr />
        </div>
    }
});
