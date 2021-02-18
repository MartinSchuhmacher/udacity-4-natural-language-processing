const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

dotenv.config();
let textApi = {application_key: process.env.API_KEY};

const app = express();
app.use(express.static('dist'));

// show directory of running server file
console.log(__dirname);

// app listens on port 8080 for incoming requests
app.listen(8081, function () {
    console.log('App runs smoothly on port 8081');
})

// to test GET request via mockAPI
app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
})

// home route to use built index file from dist folder
app.get('/', function (req, res) {
    res.sendFile('dist.index.html');
})