const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/database');

// Disable DeprecationWarning
mongoose.Promise = global.Promise;

// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', function () {
  console.log('Connected to database ' + config.database);
});

// On Error
mongoose.connection.on('error', function(err) {
  console.log('Database error: ' + err);
});

const app = express();

const api = require('./routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/api', api);


// Port Number
const port = 3000;

app.listen(port, function() {
  console.log('BACKEND SERVER started on port: ', port);
});

