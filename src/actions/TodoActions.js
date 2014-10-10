var c = require('../constants');
var Dispatcher = require('../dispatcher');

module.exports = {
    add: function(text) {
        Dispatcher.dispatchAction(c.TODO_ADD, {
            text: text
        });
    },
    toggle: function(todo) {
        Dispatcher.dispatchAction(c.TODO_TOGGLE, {
            todo: todo
        });
    },
    remove: function(todo) {
        Dispatcher.dispatchAction(c.TODO_REMOVE, {
            todo: todo
        });
    }
};
