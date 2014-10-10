/**
 * mixin to let components listen to stores in a simple way
 * the component needs to implement `onStoreUpdate` to set the state
 */
module.exports = function(/* storeA, storeB, storeC, ... */) {
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
