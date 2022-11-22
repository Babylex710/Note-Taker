// Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const app = express();
const PORT = process.env.PORT || 3001;

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
app.listen(PORT, () => console.log('App running on http://localhost:3001/'))