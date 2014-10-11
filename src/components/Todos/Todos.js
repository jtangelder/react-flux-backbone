var React = require('react');
var storeMixin = require('../../utils/storeMixin');

var TodoActions = require('../../actions/TodoActions');
var TodoStore = require('../../stores/TodoStore');
var TodoForm = require('./TodoForm');
var TodoList = require('./TodoList');


function getComponentState() {
    return {
        todos: TodoStore.models
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
            <TodoList todos={this.state.todos} />
        </div>
    }
});
