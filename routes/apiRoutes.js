const router = require('express').Router();
const fs = require('fs');

router.get('/notes', (req, res) => {
    const notes = require('./db/db.json');

    res.status(200).json(notes);
})

router.post('/notes', (req, res) => {
    const notes = ('./db/db.json');

    const { noteTitle, noteText } = req.body;
    console.log(noteText, noteTitle);

    fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
        if(err) {
            res.status(500).end();
        }else {
            res.status(200).end();
        }
    });
    res.end();
})

module.exports = router;