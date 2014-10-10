var c = require('../constants');
var Dispatcher = require('../dispatcher');

module.exports = {
    changed: function(/* args */) {
        Dispatcher.dispatchAction(c.ROUTE_CHANGED, {
            args: arguments
        });
    },

    navigate: function(fragment, trigger, replace) {
        Dispatcher.dispatchAction(c.ROUTE_NAVIGATE, {
            fragment: fragment,
            trigger: trigger,
            replace: replace
        });
    }
};
