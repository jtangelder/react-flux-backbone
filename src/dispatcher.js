var Dispatcher = require('flux').Dispatcher;

Dispatcher.prototype.dispatchAction = function(actionType, data) {
    return this.dispatch({
        actionType: actionType,
        data: data
    })
};

module.exports = new Dispatcher();
