/**
 * mixin to let components listen to stores in a simple way
 * the component needs to implement `onStoreUpdate` to set the state
 */
module.exports = function(/* storeA, storeB, ... */) {
    var stores = [].slice.call(arguments, 0);
    return {
        componentDidMount: function() {
            stores.forEach(function(store) {
                store.on("all", this.onStoreUpdate);
            }, this);
        },
        componentWillUnmount: function() {
            stores.forEach(function(store) {
                store.off(null, this.onStoreUpdate);
            }, this);
        }
    };
};
