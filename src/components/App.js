var React = require('react');

var TodoForm = require('./TodoForm');
var TodoList = require('./TodoList');

var RouterService = require('../services/RouterService');

module.exports = React.createClass({
    getInitialState: function() {
        return { search: "" };
    },

    componentDidMount: function() {
        RouterService.on("route:search", function(search) {
            this.setState({ search: search });
        }.bind(this))
    },

    render: function() {
        return <div>{this.state.search}
            <TodoForm />
            <TodoList search={this.state.search} />
        </div>
    }
});
