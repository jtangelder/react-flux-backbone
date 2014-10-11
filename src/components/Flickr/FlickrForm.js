var React = require('react');


module.exports = React.createClass({
    onSubmit: function(ev) {
        ev.preventDefault();
        this.props.onSearch(this.refs.input.getDOMNode().value);
    },

    render: function() {
        return <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="Search for a Flickr tag..." required ref="input" name="text" />
        </form>
    }
});
