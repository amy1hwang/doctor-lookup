var LookUp = require('./../js/lookup.js').getDoctors;

var displayResult = function(city, humidityData) {
  $('.solution').text("The humidity in " + city + " is " + humidityData + "%");
}

$(document).ready(function() {
  $("#lookup-form").submit(function(event) {
    event.preventDefault();
    var checked = $("input:checkbox:checked");
    checked.each(function() {
      var checkedInput = $(this).val();
      LookUp(checkedInput);
      $("#lookup-form").hide();
      $('#outputIssue').append(checkedInput + "<br>");
      $('#output').append("<li>" + "Doctor: " + "</li>" + "<li>"+ "Specialty: " + "</li>" + "<li>"+ "Insurance Plan(s): " + "</li>" + "<li>"+ "Location: " + "</li>" + "<li>"+ "Contact: " + "</li>");
    });
    // var output = LookUp(input);
    // $("#solution").html(output);
    // var inputLetter = $('#letter').val();
    // var output = simpleLetterSearch.getLetter(inputLetter);
    // $("#solution").text(output);
    // console.log(output);
  });
});
