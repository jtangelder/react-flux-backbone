module.exports = {
    /**
     * set the application routes with their name defined as a constant
     * @example "url/:id": "name"
     */
    ROUTE_ROUTES: {
        "todos": 'todos',
        "flickr": 'flickr',
        "flickr/:q": 'flickr',
        "help": 'help'
    },

    ROUTE_DEFAULT: 'todos',
    ROUTE_TODOS: 'todos'
};
