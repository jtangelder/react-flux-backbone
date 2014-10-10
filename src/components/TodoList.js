var React = require('react');
var storeMixin = require('../utils/storeMixin');
var TodoStore = require('../stores/TodoStore');
var TodoItem = require('./TodoItem');


function getComponentState() {
    return {
        todos: TodoStore.models
    };
}

module.exports = React.createClass({
    mixins: [storeMixin(TodoStore)],

    onStoreUpdate: function() {
        this.setState(getComponentState());
    },
    getInitialState: getComponentState,

    render: function() {
        return <div>
            {this.state.todos.map((todo)=> <TodoItem key={todo.cid} todo={todo} />)}
        </div>
    }
});
