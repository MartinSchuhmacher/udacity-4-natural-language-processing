const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const app = express();

app.use(express.static('dist'));

console.log(__dirname);

// app listens on port 8080 for incoming requests
app.listen(8080, function () {
    console.log('App runs smoothly on port 8080');
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
})