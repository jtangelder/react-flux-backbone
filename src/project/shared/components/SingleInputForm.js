var React = require('react');


module.exports = React.createClass({
    getInitialState: function() {
        return {
            value: this.props.value
        };
    },

    componentWillReceiveProps: function(newProps) {
        this.setState({ value: newProps.value || "" });
    },

    onChange: function() {
        this.setState({ value: this.refs.input.getDOMNode().value });
    },

    onSubmit: function(ev) {
        ev.preventDefault();
        this.props.onSubmit(this.state.value);
    },

    render: function() {
        return <form className="form-group" onSubmit={this.onSubmit}>
            <input {...this.props} ref="input" type="text"
                value={this.state.value} onChange={this.onChange} required />
        </form>
    }
});
