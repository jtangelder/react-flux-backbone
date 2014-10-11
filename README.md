react-flux-backbone
===================

React with the Flux architecture, combined with the power of Backbone's collections and models.
Goal of this project is to create a kind of bootstrap for a React application with the given tools, 
and as simple as possible without the need to learn a different framework-like layer above these libraries.

````
npm install webpack -g
npm install
webpack -d -w
python -m SimpleHTTPServer
````

## Features
- Backbone's collections/models as data store.
- Backbone's router.
- Flux architecture.
- React views.
- React Mixin for easy-listing to the stores.
- Flickr async example with loading notifications.
- Dumb stores, smart actions. The actions should contain the business logic (XHR, validation(?)), 
the stores just for data.
