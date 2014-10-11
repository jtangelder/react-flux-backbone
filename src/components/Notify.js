var React = require('react');
var storeMixin = require('../utils/storeMixin');
var NotifyStore = require('../stores/NotifyStore');
var NotifyActions = require('../actions/NotifyActions');


function getComponentState() {
    return NotifyStore.attributes;
}

module.exports = React.createClass({
    mixins: [storeMixin(NotifyStore)],

    getInitialState: getComponentState,
    onStoreUpdate: function() {
        this.setState(getComponentState.bind(this)());
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
