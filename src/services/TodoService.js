var c = require('../constants');
var Dispatcher = require('../dispatcher');
var TodoCollection = require('../collections/TodoCollection');

var TodoService = new TodoCollection([
    {text: 'todo 1'},
    {text: 'todo 2'},
    {text: 'todo 3'}
]);

TodoService.dispatchToken = Dispatcher.register(function(payload){
    var data = payload.data;
    switch(payload.actionType) {
        case c.TODO_ADD:
            var text = data.text.trim();
            if (text !== '') {
                TodoService.add({ text: text });
            }
            break;

        case c.TODO_TOGGLE:
            data.todo.toggleComplete();
            break;

        case c.TODO_REMOVE:
            TodoService.remove(data.todo);
            break;
    }
});

module.exports = TodoService;
