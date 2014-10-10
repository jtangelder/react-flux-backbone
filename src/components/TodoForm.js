var React = require('react');
var TodoActions = require('../actions/TodoActions');

module.exports = React.createClass({
    onSubmit: function(ev) {
        ev.preventDefault();
        TodoActions.add(this.refs.input.getDOMNode().value);
    },

    render: function() {
        return <form onSubmit={this.onSubmit}>
            <input type="text" ref="input" name="text" />
        </form>
    }
});
