var Dispatcher = require('flux').Dispatcher;


var dispatcher = new Dispatcher();

/**
 * a bit more standardized way to dispatch actions
 * @param {String} actionType
 * @param {*} payload
 * @returns {*}
 */
dispatcher.dispatchAction = function(actionType, payload) {
    payload = payload || {};
    payload.actionType = actionType;
    return dispatcher.dispatch(payload)
};

module.exports = dispatcher;
