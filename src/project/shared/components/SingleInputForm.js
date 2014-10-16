var React = require('react');


module.exports = React.createClass({
    onSubmit: function(ev) {
        ev.preventDefault();
        this.props.onSubmit(this.refs.input.getDOMNode().value);
    },

    render: function() {
        var input = this.transferPropsTo(<input type="text" className="form-control" required ref="input" name="text" />);
        return <form className="form-group" onSubmit={this.onSubmit}>{input}</form>
    }
});
