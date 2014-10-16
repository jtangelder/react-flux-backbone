var React = require('react');
var SingleInputForm = require('project/shared/components/SingleInputForm');


module.exports = React.createClass({
    onSubmit: function(value) {
        this.props.onAdd(value);
    },
    render: function() {
        return <SingleInputForm onSubmit={this.onSubmit} placeholder="Add a todo.." />
    }
});
