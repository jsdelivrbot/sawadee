var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var app = express();
// API file for interacting with MongoDB
// const api = require('./server/routes/api');
// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'public/dist')));
// API location
// app.use('/api', api);
// Send all other requests to the Angular app
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/dist/index.html'));
});
//Set Port
var port = process.env.PORT || '3000';
app.set('port', port);
var server = http.createServer(app);
server.listen(port, function () { return console.log("Running on localhost:" + port); });
