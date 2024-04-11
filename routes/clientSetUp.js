const clientSetUp = require('express').Router();
const sendEmail = require('../nodeMailer/sendEmail');

clientSetUp.get('/', (req, res) => {
  let uniqueURL = generateUniqueURL(); // Generate a new unique URL for each request
  sendEmail(); // Assuming you want to send an email each time the route is accessed
  res.json({ uniqueURL }); // Send the unique URL as a response
});

function generateUniqueURL() {
  let uniqueURL = '';
  const max = 9;
  const min = 0;
  for (let i = 0; i < 10; i++) {
    uniqueURL += getRandom(min, max);
  }
  return uniqueURL;
}

function getRandom(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

module.exports = clientSetUp;
