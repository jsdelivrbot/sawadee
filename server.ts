import {ApiController} from "./app/controllers/api.controller";
import {UsersController} from "./app/controllers/users.controller";
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

const isProd = true;
const angularFolder = isProd ? 'public/dist' : 'public/src';

// API file for interacting with MongoDB
// const api = require('controllers/users');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, angularFolder)));

// API location
// app.use('/api', new ApiController().getRouter());

app.get('/users', new UsersController().getRouter())

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, angularFolder + '/index.html'));
});

//Set Port
const port = (process.env as any).PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));