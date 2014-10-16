var Dispatcher = require('flux').Dispatcher;


var AppDispatcher = new Dispatcher();

/**
 * a bit more standardized way to dispatch actions
 * @param {String} actionType
 * @param {Object} [payload={}]
 * @returns {*}
 */
AppDispatcher.dispatchAction = function(actionType, payload) {
    payload = payload || {};
    payload.actionType = actionType;
    return AppDispatcher.dispatch(payload)
};

module.exports = AppDispatcher;
