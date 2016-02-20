/*
 *  Node/Mongo server
 *
 *
 */


var express = require('express');
var bodyParser = require('body-parser');

// Logging
var morgan = require('morgan');

var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	    extended: true
	}));

// Log all requests
app.use(morgan("dev"));


app.use('/',express.static(__dirname + '/public'));
app.use('/assets',express.static(__dirname + '/assets'));
//app.use('/dist',express.static(__dirname + '../../../dist'));
//app.use('/libs',express.static(__dirname + '../../../libs'));

// Prevent, 304 (Not changed) for api
//app.disable('etag');

app.listen(10080);
