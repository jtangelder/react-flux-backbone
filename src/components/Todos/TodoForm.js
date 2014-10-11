var React = require('react');

module.exports = React.createClass({
    onSubmit: function(ev) {
        ev.preventDefault();
        this.props.onAdd(this.refs.input.getDOMNode().value);
    },

    render: function() {
        return <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="Add a todo..." required ref="input" name="text" />
        </form>
    }
});
