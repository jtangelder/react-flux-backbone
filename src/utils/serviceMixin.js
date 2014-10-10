/**
 * mixin to let components listen to services in a simple way
 * the component needs to implement `onServiceUpdate` to set the state
 */
module.exports = function(/* serviceA, serviceB, ... */) {
    var services = [].slice.call(arguments, 0);
    return {
        componentDidMount: function() {
            services.forEach(function(service) {
                service.on("all", this.onServiceUpdate.bind(this));
            }, this);
        },
        componentWillUnmount: function() {
            services.forEach(function(service) {
                service.off(null, this.onServiceUpdate.bind(this));
            }, this);
        }
    };
};
