var React = require('react');
var storeMixin = require('project/helpers/storeMixin');
var TodoActions = require('../TodoActions');
var TodoStore = require('../TodoStore');

var TodoForm = require('./TodoForm');
var TodoList = require('./TodoList');


module.exports = React.createClass({
    mixins: [storeMixin(TodoStore)],

    getInitialState: function() {
        return { TodoStore: TodoStore };
    },

    onAdd: function(text) {
        TodoActions.add(text);
    },

    render: function() {
        return <div>
            <TodoForm onAdd={this.onAdd} />
            <TodoList TodoStore={this.state.TodoStore} />
        </div>
    }
});
