var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    defaults: {
        text: "Default todo text",
        complete: false
    },

    toggleComplete: function() {
        this.set({ complete: !this.get('complete') });
    }
});
