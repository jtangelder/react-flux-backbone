var c = require('../constants');
var Dispatcher = require('../dispatcher');
var TodoCollection = require('../collections/TodoCollection');

var TodoStore = new TodoCollection([
    {text: 'todo 1'},
    {text: 'todo 2'},
    {text: 'todo 3'}
]);

TodoStore.dispatchToken = Dispatcher.register(function(payload){
    var data = payload.data;
    switch(payload.actionType) {
        case c.NOTIFY_LOADING:
            var text = data.text.trim();
            if (text !== '') {
                TodoStore.add({ text: text });
            }
            break;

        case c.NOTIFY_LOADED:
            data.todo.toggleComplete();
            break;

        case c.NOTIFY_PROMPT:
            TodoStore.remove(data.todo);
            break;

        case c.NOTIFY_ALERT:
            TodoStore.remove(data.todo);
            break;
    }
});

module.exports = TodoStore;
