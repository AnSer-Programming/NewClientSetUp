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


var $mailingAddressLines = $("#mailingAddressLine1, #mailingAddressLine2, #mailingAddressLine3, #mailingAddressLine4");
$('#sameAsPhysicalLocation').change(function(event) {
  event.preventDefault();
  if ($(this).is(":checked")) {
    $mailingAddressLines.addClass('hidden');
  } else {
    $mailingAddressLines.removeClass('hidden');
  }
});

document.getElementById('primaryOfficeLine').addEventListener('blur', formatPhoneNumber);
document.getElementById('secondaryBackLine').addEventListener('blur', formatPhoneNumber);
document.getElementById('tollFree').addEventListener('blur', formatPhoneNumber); 

function formatPhoneNumber (event) {
  var phoneNumberInput = event.target;
  var phoneNumber = phoneNumberInput.value.replace(/\D/g, ''); // Remove non-numeric characters

  if (phoneNumber.length === 10) {
      phoneNumberInput.value = '(' + phoneNumber.substring(0, 3) + ') ' + phoneNumber.substring(3, 6) + '-' + phoneNumber.substring(6);
      document.getElementById('error-message').style.display = 'none'; // Hide error message if previously shown
  } else {
      // If the length is not 10 digits, display error message
      document.getElementById('error-message').style.display = 'block';
  }
};



console.log(getQuery[getQuery.length-1]);