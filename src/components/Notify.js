var React = require('react');
var storeMixin = require('../helpers/storeMixin');
var NotifyStore = require('../stores/NotifyStore');
var NotifyActions = require('../actions/NotifyActions');


module.exports = React.createClass({
    mixins: [storeMixin(NotifyStore)],

    getInitialState: function() {
        return NotifyStore;
    },

    onClose: function(ev) {
        ev.preventDefault();
        NotifyActions.hide();
    },

    render: function() {
        if(this.state.visible) {
            var closeButton;
            if(this.state.closable) {
                closeButton = <a href="#" onClick={this.onClose}>[Close]</a>
            }

            return <div className="alert alert-info">
                {this.state.text}
                {closeButton}
            </div>;
        }
        return null;
    }
});
