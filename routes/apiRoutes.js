// Dependencies
const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const notes = require('../db/db.json');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');


//Get Request
router.get("/notes", (req, res) => {
    readFromFile('./db/db.json')
      .then((data) => {
        res.json(JSON.parse(data));
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Unable to read notes." });
      });
  });

//Post Request
router.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add`);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid()
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added`);
    } else {
        res.error('Error!');
    }
});


// // GET request to recieve notes
// router.get('/notes', (req, res) => {

//     res.json(notes);
// });

// // POST request
// router.post('/notes', (req, res) => {

//     const notesData = notes || [];
//     fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
//         if (err) {
//             res.status(500).end();
//         }
//         notesData.push(req.body);

//         fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notesData), (err) => {
//             if (err) {
//                 res.status(500).end();
//             } else {
//                 res.status(200).end();
//             }
//         });
//     });
// });

module.exports = router;