var c = require('../constants');
var Dispatcher = require('../dispatcher');
var Backbone = require('backbone');


var routesConfig = {
    "todos": c.ROUTE_TODOS,
    "help": c.ROUTE_HELP
};

// simple model containing the route state
var RouterService = new Backbone.Model({
    name: c.ROUTE_DEFAULT,
    args: []
});

// backbone router instance
var AppRouter = new (Backbone.Router.extend({
    // emit the router action
    emitRouteAction: function() {
        RouterService.set({
            name: this[0],
            args: [].slice.call(arguments, 0)
        });
    },

    // make sure all routes call the `handleRoute` method
    initialize: function() {
        var name, key;
        for (key in routesConfig) {
            if (routesConfig.hasOwnProperty(key)) {
                name = routesConfig[key];
                this.route(key, name, this.emitRouteAction.bind([name]));
            }
        }

        // catch all non-matching urls
        Backbone.history.handlers.push({
            route: /(.*)/,
            callback: function() {
                RouterService.set({
                    name: c.ROUTE_DEFAULT,
                    args: []
                });
            }
        });

        // start the router when everything is loaded
        Backbone.$(document).on("ready", function() {
            Backbone.history.start();
        });
    }
}));

RouterService.dispatchToken = Dispatcher.register(function(payload) {
    var data = payload.data;
    switch (payload.actionType) {
        case c.ROUTE_CHANGED:
            RouterService.set({
                name: data.name,
                args: data.args || []
            });
            break;

        case c.ROUTE_NAVIGATE:
            AppRouter.navigate(data.fragment, {
                trigger: data.trigger,
                replace: data.replace
            });
            break;
    }
});

module.exports = RouterService;
