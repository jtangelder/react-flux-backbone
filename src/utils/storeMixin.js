module.exports = function(/* args */) {
    var stores = [].slice.call(arguments, 0);
    return {
        componentDidMount: function() {
            stores.forEach(function(store) {
                store.on("all", this.onStoreUpdate.bind(this));
            }, this);
        },
        componentWillUnmount: function() {
            stores.forEach(function(store) {
                store.off(null, this.onStoreUpdate.bind(this));
            }, this);
        }
    };
};
