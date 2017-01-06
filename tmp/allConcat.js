var LookUp = require('./../js/lookup.js').getDoctors;

var outputDocInfo = function(firstName, lastName, title, specialties, insurancePlan, address) {
  $('#output').append("<li id='doctor'>" + firstName + " " + lastName + ", " + title + "</li>" + "<li>" + "Specialties: " + specialties + "</li>" + "<li>" + "Insurance Plan(s): " + insurancePlan + "</li>" + "<li>" + "Address: " + address + "</li>" + "<br>");
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
