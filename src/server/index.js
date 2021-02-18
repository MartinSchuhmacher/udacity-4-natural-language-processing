var path = require('path');
const express = require('express');

const app = express();

app.use(express.static('dist'));

console.log(__dirname);

// app listens on port 8080 for incoming requests
app.listen(8080, function() {
    console.log('App runs smoothly on port 8080');
})