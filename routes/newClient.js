const router = require('express').Router();
const { NewClientPaperWork } = require('../models');
const CryptoJS = require("crypto-js");
const dotenv = require('dotenv');
dotenv.config();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const { parse, stringify, toJSON, fromJSON } = require('flatted');

// be sure to include its associated Products
// router.get('/', async (req, res) => {
//   try {
//     const vesselListData = await VesselListTable.findAll({ });
//     res.status(200).json(vesselListData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/:clientName', async (req, res) => {
    try {
        const newClientData = await NewClientPaperWork.findOne({
            where: {
                client_name: req.params.clientName
            }
        });

        if (!newClientData) {
            res.status(404).json({ message: 'This client does not exist!' });
            return;
        }

        res.status(200).json(vesselListData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    const encrypted = toJSON(CryptoJS.AES.encrypt(text, process.env.SECRET_PHRASE));
    const decrypted = CryptoJS.AES.decrypt(fromJSON(encrypted), process.env.SECRET_PHRASE);
    // console.log("Encrypted: " + encrypted);
    var plaintext = decrypted.toString(CryptoJS.enc.Utf8);
    console.log(plaintext);
    console.log(encrypted);
    // create a new vessel/contact
    try {
        const newClientData = await NewClientPaperWork.create(req.body);
        res.status(200).json(newClientData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/ByID/:id', async (req, res) => {
    // update a category by its `id` value
    try {
        const newClientData = await NewClientPaperWork.update(req.body, {
            where: {
                index: req.params.id
            }
        });
        if (!newClientData[0]) {
            res.status(404).json({ message: `ID Error!` });
            return;
        }
        res.status(200).json(newClientData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/ByID/:id', async (req, res) => {
    try {
        const newClientData = await NewClientPaperWork.destroy({
            where: {
                index: req.params.id
            }
        });
        if (!newClientData) {
            res.status(404).json({ message: `ID Error!` });
            return;
        }
        res.status(200).json(newClientData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;