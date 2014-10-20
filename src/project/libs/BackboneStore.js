var Backbone = require('backbone');
var Dispatcher = require('project/shared/dispatcher');


function initialize() {
    this.dispatchId = Dispatcher.register(this.handleDispatch.bind(this));
}


class ModelStore extends Backbone.Model {
    constructor() {
        super();
    }
    initialize() {
        initialize.call(this);
    }
}

class CollectionStore extends Backbone.Collection {
    constructor() {
        super();
    }
    initialize() {
        initialize.call(this);
    }
}


module.exports.Model = ModelStore;
module.exports.Collection = CollectionStore;
