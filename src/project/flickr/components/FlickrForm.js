var React = require('react');


module.exports = React.createClass({
    onSubmit: function(ev) {
        ev.preventDefault();
        this.props.onSearch(this.refs.input.getDOMNode().value);
    },

    render: function() {
        return <form className="form-group" onSubmit={this.onSubmit}>
            <input type="text" className="form-control" required
                    placeholder="Search for a Flickr tag..."
                    ref="input" name="text" />
        </form>
    }
});
