var c = require('../constants');
var Dispatcher = require('../dispatcher');
var _ = require('underscore');

module.exports = {
    navigate: function(fragment, trigger, replace) {
        Dispatcher.dispatchAction(c.ROUTE_NAVIGATE, {
            fragment: fragment,
            trigger: _.isUndefined(trigger) ? true : trigger,
            replace: _.isUndefined(replace) ? true : replace
        });
    }
};
