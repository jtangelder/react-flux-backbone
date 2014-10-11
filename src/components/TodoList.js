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

    getInitialState: getComponentState,
    onServiceUpdate: function() {
        this.setState(getComponentState.bind(this)());
    },

    render: function() {
        return <ul className='list-unstyled'>
            {this.state.todos.map((todo)=> <li><TodoItem key={todo.cid} todo={todo} /></li> )}
        </ul>
    }
});
