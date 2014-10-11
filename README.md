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
- XHR example with loading notification.

## Todo
- Find out if the current Notify/XHR component/store is implemented in a correct way. I would like to see all the 
business logic in the actions, not in the stores (the FlickrStore makes a call to NotifyActions). Something with 
promises maybe? 
