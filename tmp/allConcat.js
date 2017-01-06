var LookUp = require('./../js/lookup.js').getDoctors;

var outputDocInfo = function(firstName, lastName, title, specialties, address, contact) {
  $('#outputIssue').append("<ul><li id='doctor'>" + firstName + " " + lastName + ", " + title + "</li>" + "<li>" + "<strong>Specialties: </strong>" + specialties + "</li>" + "<li>" + "<strong>Address: </strong>" + address + "</li>" + "<li>" + "<strong>contact: </strong>" + contact + "</li>" + "</ul>");
  // $('#outputInsurce').append("<li>" + insurancePlan + "</li>");
};

$(document).ready(function() {
  $("#lookup-form").submit(function(event) {
    event.preventDefault();
    var checked = $("input:checkbox:checked");
    checked.each(function() {
      var checkedInput = $(this).val();
      LookUp(checkedInput, outputDocInfo);
      $("#lookup-form").hide();
      $('#output').append("<li id='outputIssue'>" + "Medical Issue: " + checkedInput + "</li><br>");
    });
  });
});

//FIX INSURANCE FOR LOOP
//FIX OUTPUTISSUE POSITION
