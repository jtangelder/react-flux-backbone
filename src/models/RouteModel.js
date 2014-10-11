var c = require('../constants');
var Dispatcher = require('../dispatcher');
var Backbone = require('backbone');


module.exports = Backbone.Model.extend({
    defaults: {
        name: c.ROUTE_DEFAULT,
        args: []
    }
});
