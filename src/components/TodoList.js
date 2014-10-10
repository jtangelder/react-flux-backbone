var React = require('react');
var serviceMixin = require('../utils/serviceMixin');
var TodoService = require('../services/TodoService');
var TodoItem = require('./TodoItem');


function getComponentState() {
    return {
        todos: TodoService.models
    };
}

module.exports = React.createClass({
    mixins: [serviceMixin(TodoService)],

    onServiceUpdate: function() {
        this.setState(getComponentState.bind(this)());
    },
    getInitialState: getComponentState,

    render: function() {
        return <div>
            {this.state.todos.map((todo)=> <TodoItem key={todo.cid} todo={todo} />)}
        </div>
    }
});
