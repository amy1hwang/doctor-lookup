var LookUp = require('./../js/lookup.js').getDoctors;

var outputDocInfo = function(firstName, lastName, title, specialties, address, contact, insurancePlan) {
  $('#output').append("<li id='doctor'>" + firstName + " " + lastName + ", " + title + "</li>" + "<li>" + "Specialties: " + specialties + "</li>" + "<li>" + "Address: " + address + "</li>" + "<li>" + "contact: " + contact + "</li>" + "<li>" + "Insurance Plan(s): " + insurancePlan + "</li>"+ "<br>");
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
      $('#outputIssue').append(checkedInput + "<br>");
    });
  });
});

//FIX INSURANCE FOR LOOP
