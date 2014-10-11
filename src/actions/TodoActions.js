var c = require('../constants');
var dispatch = require('../dispatcher').dispatchAction;


module.exports = {
    add: function(text) {
        dispatch(c.TODO_ADD, { text: text });
    },
    toggle: function(todo) {
        dispatch(c.TODO_TOGGLE, { todo: todo });
    },
    remove: function(todo) {
        dispatch(c.TODO_REMOVE, { todo: todo });
    }
};
