var fs = require('fs');
var express = require('express');
var responseTime = require('response-time');
var serveStatic = require('serve-static');
var serveIndex = require('serve-index');
var compression = require('compression');


var app = express();

app.use(compression());
app.use(serveStatic('./build'));
app.use(serveIndex('./build'));
app.use(responseTime());

/*

require('node-jsx').install();
var App = require('./project/app/components/App.js');
var indexHtml = fs.readFileSync(__dirname + '/index.html', 'utf8');

app.get('/', function(req, res) {
    var rendered = React.renderComponentToString(App());
    res.send(indexHtml.replace("{{APP}}", rendered));
});
*/

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
