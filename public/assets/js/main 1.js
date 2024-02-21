const phoneNumberRegex = /(\d{3})+-(\d{3})+-(\d{4})/;

const phoneNumberArray = ["000-000-0000", "(000)000-0000", "000 - 000 - 0000", "0000000000", "000000-0000", "132-452-9045", "(252)-456-9852"];

for(let i = 0; i < phoneNumberArray.length; i++) {
  console.log(`Phone Number: ${phoneNumberArray[i]} | Index: ${i} | Match? ${phoneNumberArray[i].match(phoneNumberRegex)}`);
}