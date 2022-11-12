const express = require('express');
const fs = require('fs');
const apiRoutes = require('./routes/apiRoutes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));


app.use('/api', apiRoutes);

app.listen(3001, () => console.log('App running on http://localhost:3001/'))