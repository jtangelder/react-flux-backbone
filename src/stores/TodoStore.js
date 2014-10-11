var Backbone = require('backbone');
var c = require('../constants');
var Dispatcher = require('../dispatcher');


var Todo = Backbone.Model.extend({
    defaults: {
        text: "Default todo text",
        complete: false
    },
    toggleComplete: function() {
        this.set({ complete: !this.get('complete') });
    }
});

var TodoStore = new Backbone.Collection([
    {text: 'todo 1'},
    {text: 'todo 2'},
    {text: 'todo 3'}
], {
    model: Todo
});

TodoStore.dispatchToken = Dispatcher.register(function(payload){
    var data = payload.data;
    switch(payload.actionType) {
        case c.TODO_ADD:
            TodoStore.add({ text: data.text });
            break;

        case c.TODO_TOGGLE:
            data.todo.toggleComplete();
            break;

        case c.TODO_REMOVE:
            TodoStore.remove(data.todo);
            break;
    }
});

module.exports = TodoStore;
