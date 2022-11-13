// Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');
const app = express();

// Parse incoming json data
app.use(express.json());

// Parse incoming string data
app.use(express.urlencoded({extended: true}));

// static
app.use(express.static('public'));

// route middleware
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listener
app.listen(3001, () => console.log('App running on http://localhost:3001/'))