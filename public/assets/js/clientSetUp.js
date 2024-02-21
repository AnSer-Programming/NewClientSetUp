var url = window.location.pathname;
var getQuery = url.split('/');
let saveFile = new Array();

$('#submitButton').on('click', function(event) {
  event.preventDefault();  
  let formElements = $('.form-control');

  for(let i = 0; i < formElements.length; i++) {
    saveFile.push({field: `${formElements[i].id}`, value: `${formElements[i].value}`});
  }
});

console.log(getQuery[getQuery.length-1]);