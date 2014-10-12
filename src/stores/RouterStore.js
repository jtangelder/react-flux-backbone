var c = require('../constants');
var Dispatcher = require('../dispatcher');
var Backbone = require('backbone');


/**
 * set the application routes with their name defined as a constant
 * @example "url/:id": "name"
 */
var routesConfig = {
    "todos": c.ROUTE_TODOS,
    "flickr": c.ROUTE_FLICKR,
    "help": c.ROUTE_HELP
};


var RouterModel = Backbone.Model.extend({
    defaults: {
        route: c.ROUTE_DEFAULT,
        args: []
    },

    initialize: function() {
        this._router = new AppRouter(this, routesConfig);
        this.dispatchId = Dispatcher.register(this.handleDispatch.bind(this));
    },

    handleDispatch: function(payload) {
        switch(payload.actionType) {
            case c.ROUTE_NAVIGATE:
                this._router.navigate(payload.fragment, {
                    trigger: payload.trigger,
                    replace: payload.replace
                });
                break;
        }
    }
});

var AppRouter = Backbone.Router.extend({
    initialize: function(store, routes) {
        this.store = store;

        var route, key;
        for (key in routes) {
            if (routes.hasOwnProperty(key)) {
                route = routes[key];
                this.route(key, route, function(/* route, args... */) {
                    this.emitRouteAction.apply(this, arguments);
                }.bind(this, route));
            }
        }

        // catch all non-matching urls
        Backbone.history.handlers.push({
            route: /(.*)/,
            callback: function() {
                store.set({
                    route: c.ROUTE_DEFAULT,
                    args: []
                });
            }
        });

        Backbone.$(document).on("ready", function() {
            Backbone.history.start();
        });
    },

    emitRouteAction: function(/* route, args... */) {
        this.store.set({
            route: arguments[0],
            args: [].slice.call(arguments, 1)
        });
    }
});

module.exports = new RouterModel();
