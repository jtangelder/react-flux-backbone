var Backbone = require('backbone');
var constants = require('./constants');
var Dispatcher = require('project/dispatcher');


var Todo = Backbone.Model.extend({
    defaults: {
        text: "Default todo text",
        complete: false
    },
    toggleComplete: function() {
        this.set({ complete: !this.get('complete') });
    }
});


var TodoCollection = Backbone.Collection.extend({
    model: Todo,

    initialize: function() {
        this.dispatchId = Dispatcher.register(this.handleDispatch.bind(this));
    },

    handleDispatch: function(payload) {
        switch(payload.actionType) {
            case constants.TODO_ADD:
                this.add({ text: payload.text });
                break;

            case constants.TODO_TOGGLE:
                payload.todo.toggleComplete();
                break;

            case constants.TODO_REMOVE:
                this.remove(payload.todo);
                break;
        }
    }
});

module.exports = new TodoCollection();
