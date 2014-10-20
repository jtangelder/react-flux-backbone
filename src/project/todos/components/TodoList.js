var React = require('react');
var TodoItem = require('./TodoItem');


module.exports = React.createClass({
    render: function() {
        return <ul className='list-unstyled'>
            {this.props.TodoStore.map((todo)=>
                <li key={todo.cid}><TodoItem todo={todo} /></li>
            )}
        </ul>
    }
});
