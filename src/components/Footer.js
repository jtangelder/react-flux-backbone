var React = require('react');


module.exports = React.createClass({
    toTop: function(ev) {
        ev.preventDefault();
        window.scrollTo(0, 0);
    },

    render: function() {
        return <div>
            <hr />
            <small>
                <a href="#" onClick={this.toTop}>Top</a>
            </small>
        </div>
    }
});
