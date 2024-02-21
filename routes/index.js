const express = require('express');
const app = express();

// Declare routes
const newClientRoute = require('./newClient');
const clientSetUpRoute = require('./clientSetUp');

// Set Routes
app.use('/CodeCheck', newClientRoute);
app.use('/NewClient', newClientRoute);
app.use('/ClientSetUp', clientSetUpRoute);

module.exports = app;