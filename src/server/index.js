// dependencies
const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

// using environment variable
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

// app listens on port 8081 for incoming requests in production mode
app.listen(8081, function () {
    console.log('App runs smoothly on port 8081');
})

// home route to use built index file from dist folder
app.get('/', function (req, res) {
    res.sendFile('dist.index.html');
})

// GET request with axios for promised based request
// auto parse JSON by default, no need to do extra for data received from client
app.post('/article', function (request, response) {
    console.log(request.body.value);
    projectData = {url: request.body.value};
    //axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    axios.get('https://api.meaningcloud.com/sentiment-2.1?key='+textApi.application_key+'&of=json&lang=en&url='+projectData.url)
    .then(res => {
        addData(res);
        response.send(true);
    })
    .catch(error => {
        console.log('Error while POST with axios: ', error);
    });
});

function addData(response) {
    let newData = response.data;
    projectData.model = newData.model;
    projectData.score = newData.score_tag;
    projectData.polarityBetween = newData.agreement;
    projectData.subjectivity = newData.subjectivity;
    projectData.confidence = newData.confidence;
    projectData.irony = newData.irony;
    console.log(projectData);
}

app.get('/all', (req, res) => res.send(projectData));