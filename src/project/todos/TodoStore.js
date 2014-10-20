var Backbone = require('backbone');
var Store = require('project/shared/libs/Store');
var constants = require('./constants');


var Todo = Backbone.Model.extend({
    defaults: {
        text: "Default todo text",
        complete: false
    },
    toggleComplete: function() {
        this.set({ complete: !this.get('complete') });
    }
});


class TodoCollection extends Store.Collection {
    constructor() {
        this.model = Todo;
        super();
    }

    handleDispatch(payload) {
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
}

module.exports = new TodoCollection();
