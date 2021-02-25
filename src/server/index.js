// dependencies
const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

// using environment variables
dotenv.config();
let textApi = {application_key: process.env.API_KEY};

// setup empty JS object to act as endpoint
let projectData = {};

const app = express();
app.use(express.static('dist'));

// configuring express to use body-parser as middleware.
// parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: false }));
// parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// cors for cross origin allowance
app.use(cors());

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

// GET request with axios for promised based request
// auto parse JSON by default, no need to do extra for data received from client
app.post('/article', function (request, response) {
    console.log(request.body.value);
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(res => {
            console.log(res.data.url);
            console.log(res.data.explanation);
        })
        .catch(error => {
            console.log('Error while GET with axios: ', error);
        });
})