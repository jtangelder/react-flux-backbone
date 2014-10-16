var constants = require('./constants');
var dispatch = require('project/dispatcher').dispatchAction;
var _ = require('underscore');


module.exports = {
    navigate: function(fragment, trigger, replace) {
        dispatch(constants.ROUTE_NAVIGATE, {
            fragment: fragment,
            trigger: _.isUndefined(trigger) ? true : trigger,
            replace: _.isUndefined(replace) ? true : replace
        });
    }
};
