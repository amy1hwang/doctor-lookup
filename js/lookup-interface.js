var LookUp = require('./../js/lookup.js').getDoctors;

var outputDocInfo = function(firstName, lastName, title, specialties, insurancesPlan) {
  $('#output').append("<li id='doctor'>" + firstName + " " + lastName + ", " + title + "</li>" + "<li>" + "Specialties: " + specialties + "</li>" + "<li>" + "Insurance Plan(s): " + "<ul>" + "<li>" + insurancesPlan + "</li>" + "</ul>" + "</li>" + "<br>");
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
    // var output = LookUp(input);
    // $("#solution").html(output);
    // var inputLetter = $('#letter').val();
    // var output = simpleLetterSearch.getLetter(inputLetter);
    // $("#solution").text(output);
    // console.log(output);
  });
});
