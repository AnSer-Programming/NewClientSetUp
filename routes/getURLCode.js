const getURLCode = require('express').Router();
let uniqueURL;

function getRandom() {
  const max = 9;
  const min = 0;
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

getURLCode.get('/', async(req, res) => {
  for(let i = 0; i < 10; i++) {
    if(i == 0) {
      uniqueURL = `${getRandom()}`;
    } else {
      uniqueURL += `${getRandom()}`;
    }
  }

  res.json(uniqueURL);
});

module.exports = getURLCode;