
var apiKey = require('./../.env').apiKey;

var getDoctors = function(checkedInput, outputDocInfo) {
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
          var insurancesPlan = data.insurances[j].insurance_plan.name;
          console.log(insurancesPlan);
          outputDocInfo(firstName, lastName, title, specialties, insurancesPlan);
        }
      }
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.getDoctors = getDoctors;
