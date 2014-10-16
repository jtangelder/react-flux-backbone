var constants = require('./constants');
var dispatch = require('project/helpers/dispatch');


module.exports = {
    add: function(text) {
        dispatch(constants.TODO_ADD, { text: text });
    },
    toggle: function(todo) {
        dispatch(constants.TODO_TOGGLE, { todo: todo });
    },
    remove: function(todo) {
        dispatch(constants.TODO_REMOVE, { todo: todo });
    }
};
