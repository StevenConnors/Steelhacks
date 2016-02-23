var express = require('express');
var bodyParser = require('body-parser');

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

app.listen(8080);
