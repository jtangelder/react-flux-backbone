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

    getInitialState: getComponentState,
    onStoreUpdate: function() {
        this.setState(getComponentState.bind(this)());
    },

    render: function() {
        return <ul className='list-unstyled'>
            {this.state.todos.map((todo)=> <li key={todo.cid}><TodoItem todo={todo} /></li> )}
        </ul>
    }
});
