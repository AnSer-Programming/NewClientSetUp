const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 80;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// Set the homepage for the website
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/clientSetUp', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/clientSetUp.html'))
);

app.get('/clientSetUp/*', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/clientSetUp.html'))
);

// If the user enters anything other than notes in the url they will be sent to the home page
app.get('/*', (req, res) => 
    res.sendFile(path.join(__dirname, 'public/pageNotFound.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);