/**
 * mixin to let components listen to stores in a simple way
 * the component needs to implement `onStoreUpdate` to set the state
 */
module.exports = function(store) {
    return {
        componentDidMount: function() {
            store.on("all", function() {
                this.forceUpdate();
            }, this);
        },
        componentWillUnmount: function() {
            store.off(null, null, this);
        }
    };
};
