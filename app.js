var async = require('async');
var _ = require('underscore');
var njax = require('njax-socket');
var config = require('./config');

var app = njax(config);
/*
var events = require(__dirname + '/lib/events');
events(app);

var routes = require(__dirname + '/lib/routes');
routes(app);
*/



app.start(function(err, _app, server){
    console.log(err || "Server started");
});