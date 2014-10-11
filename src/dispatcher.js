var Dispatcher = require('flux').Dispatcher;


var dispatcher = new Dispatcher();

/**
 * a bit more standardized way to dispatch actions
 * @param {String} actionType
 * @param {*} data
 * @returns {*}
 */
dispatcher.dispatchAction = function(actionType, data) {
    return dispatcher.dispatch({
        actionType: actionType,
        data: data
    })
};

module.exports = dispatcher;
