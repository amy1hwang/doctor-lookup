
var apiKey = require('./../.env').apiKey;
// var Calculator = function() {
//
// }
// Calculator.prototype.add = function() {
//   console.log("Adding");
// }
//
// exports.Calculator = Calculator;
var getDoctors = function(checkedInput) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ checkedInput +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      console.log(result);
      for(var i = 0; i < result.data.length; i++) {
        var data = result.data[i];
        var lastName = data.profile.last_name;
        var firstName = data.profile.first_name;
        var title = data.profile.title;
        var specialties = data.specialties[0].name;
        console.log(lastName, specialties);
        for(var j = 0; j < data.insurances.length; j++) {
          var insurances = data.insurances[j];
          console.log(insurances);
        }
      }
    })
   .fail(function(error){
      console.log("fail");
    });
    console.log(apiKey);
};

exports.getDoctors = getDoctors;
