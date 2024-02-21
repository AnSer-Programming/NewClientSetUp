const notes = require('express').Router();
const CryptoJS = require("crypto-js");
const dotenv = require('dotenv');
dotenv.config();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const {parse, stringify, toJSON, fromJSON} = require('flatted');

notes.get('/', (req, res) => {
    console.info(`${ req.method } request received to add a new note`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for submitting notes
notes.post('/', (req, res) => {
    const { title, text } = req.body;
    // console.log("Text: " + text);
    const encrypted = toJSON(CryptoJS.AES.encrypt(text, process.env.SECRET_PHRASE));
    const decrypted = CryptoJS.AES.decrypt(fromJSON(encrypted), process.env.SECRET_PHRASE);
    // console.log("Encrypted: " + encrypted);
    var plaintext = decrypted.toString(CryptoJS.enc.Utf8); 
    console.log(plaintext);
    console.log(encrypted);

    if (req.body) {
        const newNotes = {
            title,
            text: {encrypted},
        };

        readAndAppend(newNotes, './db/db.json');
        res.json('Note made');
    } else {
        res.json('Error in posting notes');
    }
});

module.exports = notes;