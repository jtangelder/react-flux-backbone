var Dispatcher = require('flux').Dispatcher;

/**
 * a bit more standardized way to dispatch actions
 * @param {String} actionType
 * @param {*} data
 * @returns {*}
 */
Dispatcher.prototype.dispatchAction = function(actionType, data) {
    return this.dispatch({
        actionType: actionType,
        data: data
    })
};

module.exports = new Dispatcher();
