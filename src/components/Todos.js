var React = require('react');
var TodoForm = require('./TodoForm');
var TodoList = require('./TodoList');


module.exports = React.createClass({
    render: function() {
        return <div>
            <TodoForm />
            <TodoList />
        </div>
    }
});
