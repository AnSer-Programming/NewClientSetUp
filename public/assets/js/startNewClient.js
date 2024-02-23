const getURLCodes = () => 
  fetch(`/api/GetURLCode`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

$('#submitButton').on('click', async function(event) {
  event.preventDefault();  
  let formElements = $('.form-control');
  let saveFile = new Array();

  for(let i = 0; i < formElements.length; i++) {
    saveFile.push({field: `${formElements[i].id}`, value: `${formElements[i].value}`});
  }

  let urlCode = await getURLCodes();
  urlCode = await urlCode.json();

  console.log(urlCode);
});