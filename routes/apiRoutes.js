// Dependencies
const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const notes = require('../db/db.json');

// GET request
router.get('/notes', (req, res) => {

    res.status(200).json(notes);
});

// POST request
router.post('/notes', (req, res) => {

    const notesData = notes || [];
    fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
        if (err) {
            res.status(500).end();
        }
        notesData.push(req.body);

        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notesData), (err) => {
            if (err) {
                res.status(500).end();
            } else {
                res.status(200).end();
            }
        });
    });
});

module.exports = router;