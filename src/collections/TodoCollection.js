var Backbone = require('backbone');
var Todo = require('../models/TodoModel');

module.exports = Backbone.Collection.extend({
    model: Todo
});
