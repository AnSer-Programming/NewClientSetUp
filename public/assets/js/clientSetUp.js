$(document).ready(function() {
  var url = window.location.pathname;
  var getQuery = url.split('/');
  var saveFile = []; // Use an array to store form data

  $('#submitButton').on('click', function(event) {
    event.preventDefault();  
    var formElements = $('.form-control');

    formElements.each(function() {
      saveFile.push({ field: this.id, value: $(this).val() });
    });
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

  $('#primaryOfficeLine, #secondaryBackLine, #tollFree').on('blur', formatPhoneNumber);

  function formatPhoneNumber(event) {
    var phoneNumberInput = event.target;
    var phoneNumber = phoneNumberInput.value.replace(/\D/g, ''); // Remove non-numeric characters

    if (phoneNumber.length === 10) {
      phoneNumberInput.value = '(' + phoneNumber.substring(0, 3) + ') ' + phoneNumber.substring(3, 6) + '-' + phoneNumber.substring(6);
      $('#error-message').hide(); // Hide error message if previously shown
    } else {
      // If the length is not 10 digits, display error message
      $('#error-message').show();
    }
  }

  console.log(getQuery[getQuery.length - 1]);
});
