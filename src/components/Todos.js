var React = require('react');
var storeMixin = require('../helpers/storeMixin');
var TodoActions = require('../actions/TodoActions');
var TodoStore = require('../stores/TodoStore');

var TodoForm = require('./Todos/TodoForm');
var TodoList = require('./Todos/TodoList');


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
