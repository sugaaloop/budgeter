'use strict';

var express = require('express');
var path = require('path');
//var html = require('html');

var config = require('./config/config');

var app = express();
var router = express.Router();

app.set('views', path.join(__dirname, 'public/app'));
//app.set('view engine', 'pug');
app.engine('html', require('ejs').renderFile);

app.use(router);
app.use(express.static(path.join(__dirname, 'public')));

router.get('/', function (req, res) {
    res.render('index.html');
});

app.listen(config.port);
console.log("\nListening on port " + config.port + " ...");

