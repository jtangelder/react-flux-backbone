var React = require('react');
var storeMixin = require('../utils/storeMixin');

var TodoActions = require('../actions/TodoActions');
var TodoStore = require('../stores/TodoStore');
var TodoForm = require('./Todos/TodoForm');
var TodoList = require('./Todos/TodoList');


function getComponentState() {
    return {
        TodoStore: TodoStore
    };
}

module.exports = React.createClass({
    mixins: [storeMixin(TodoStore)],

    getInitialState: getComponentState,
    onStoreUpdate: function() {
        this.setState(getComponentState.bind(this)());
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
