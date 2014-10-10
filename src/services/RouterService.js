var c = require('../constants');
var Dispatcher = require('../dispatcher');
var Backbone = require('backbone');
var RouterActions = require('../actions/RouterActions');


var routes = {
    "help": "help",
    "search/:query": "search",
    "search/:query/p:page": "search"
};

var RouterService = new (Backbone.Router.extend({
    // make sure all routes call the `handleRoute` method
    initialize: function() {
        var name, key;
        for(key in routes) {
            if(routes.hasOwnProperty(key)) {
                name = routes[key];
                this.route(key, name, handleRoute.bind([name]))
            }
        }
    }
}));

// start the router when everything is loaded
window.addEventListener("load", function() {
    Backbone.history.start();
});

// call the router action
function handleRoute() {
    RouterActions.changed.call(RouterActions, this, arguments);
}

RouterService.dispatchToken = Dispatcher.register(function(payload){
    var data = payload.data;
    switch(payload.actionType) {
        case c.ROUTE_CHANGED:
            // nothing
            break;

        case c.ROUTE_NAVIGATE:
            RouterService.navigate(data.fragment, {
                trigger: data.trigger,
                replace: data.replace
            });
            break;
    }
});

module.exports = RouterService;
