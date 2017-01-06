

var LookUp = require('./../js/lookup.js').getDoctors;



$(document).ready(function() {
  $("#lookup-form").submit(function(event) {
    event.preventDefault();
    var input = 'headache';
    LookUp(input);
    // var inputLetter = $('#letter').val();
    // var output = simpleLetterSearch.getLetter(inputLetter);
    // $("#solution").text(output);
    // console.log(output);
  });
});
