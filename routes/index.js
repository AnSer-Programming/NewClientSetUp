const express = require('express');
const notesRoute = require('./newClient');
const app = express();

app.use('/NewClient', notesRoute);

module.exports = app;