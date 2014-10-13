var React = require('react');
var TodoActions = require('../TodoActions');


module.exports = React.createClass({
    onToggle: function() {
        TodoActions.toggle(this.props.todo);
    },

    onRemove: function(ev) {
        ev.preventDefault();
        TodoActions.remove(this.props.todo);
    },

    render: function() {
        var styles = {
            textDecoration: this.props.todo.get('complete') ? 'line-through' : 'none'
        };
        return <div>
            <input type="checkbox" onClick={this.onToggle} />{' '}
            <span style={styles}>{this.props.todo.attributes.text}</span>{' '}
            <a href="#" onClick={this.onRemove}>[x]</a>
        </div>
    }
});
