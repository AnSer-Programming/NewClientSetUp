const clientSetUp = require('express').Router();
const sendEmail = require('../nodeMailer/sendEmail');
let uniqueURL;

clientSetUp.get('/', (req, res) => {
  sendEmail();
  res.json("Test");
});

function getRandom() {
  const max = 9;
  const min = 0;
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  // sendEmail;
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

for(let i = 0; i < 10; i++) {
  if(i == 0) {
    uniqueURL = `${getRandom()}`;
  } else {
    uniqueURL += `${getRandom()}`;
  }
}

module.exports = clientSetUp;