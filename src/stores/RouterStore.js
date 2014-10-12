var c = require('../constants');
var Dispatcher = require('../dispatcher');
var Backbone = require('backbone');


// set the application routes with their name defined as a constant
var routesConfig = {
    "todos": c.ROUTE_TODOS,
    "flickr": c.ROUTE_FLICKR,
    "help": c.ROUTE_HELP
};


var RouterModel = Backbone.Model.extend({
    defaults: {
        name: c.ROUTE_DEFAULT,
        args: []
    },

    initialize: function() {
        this.router = new AppRouter(this, routesConfig);
        this.dispatchId = Dispatcher.register(this.handleDispatchAction.bind(this));
    },

    handleDispatchAction: function(payload) {
        switch(payload.actionType) {
            case c.ROUTE_NAVIGATE:
                this.router.navigate(payload.fragment, {
                    trigger: payload.trigger,
                    replace: payload.replace
                });
                break;
        }
    }
});

// setup a Backbone router instance
var AppRouter = Backbone.Router.extend({
    // make sure all routes call the `handleRoute` method
    initialize: function(store, routes) {
        this.store = store;

        var name, key;
        for (key in routes) {
            if (routes.hasOwnProperty(key)) {
                name = routes[key];
                this.route(key, name, function(/* name, args... */) {
                    this.emitRouteAction.apply(this, arguments);
                }.bind(this, name));
            }
        }

        // catch all non-matching urls
        Backbone.history.handlers.push({
            route: /(.*)/,
            callback: function() {
                store.set({
                    name: c.ROUTE_DEFAULT,
                    args: []
                });
            }
        });

        // start the router when everything is loaded
        Backbone.$(document).on("ready", function() {
            Backbone.history.start();
        });
    },

    // emit the router action
    emitRouteAction: function(/* name, args... */) {
        this.store.set({
            name: arguments[0],
            args: [].slice.call(arguments, 1)
        });
    }
});


// this store is just a simple model containing the route state
var RouterStore = new RouterModel();
module.exports = RouterStore;
