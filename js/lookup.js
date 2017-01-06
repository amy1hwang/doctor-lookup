
var apiKey = require('./../.env').apiKey;

var getDoctors = function(checkedInput, outputDocInfo) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ checkedInput +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      console.log(result);
      for(var i = 0; i < result.data.length; i++) {
        var data = result.data[i];
        var profile = data.profile;
        var lastName = profile.last_name;
        var firstName = profile.first_name;
        var title = profile.title;
        var specialties = data.specialties[0].name;
        console.log(lastName, specialties);
        for(var j = 0; j < data.insurances.length; j++) {
          var insurancePlan = data.insurances[j].insurance_plan.name;
          // console.log(insurancePlan);
        }
        var location = data.practices[0].visit_address;
        var street = location.street;
        var street2 = location.street2;
        var city = location.city;
        var state = location.state;
        var zip = location.zip;
        var address = street + " " + street2 + "<br>" + city + ", " + state + "<br>" + zip;
        console.log(address);
        outputDocInfo(firstName, lastName, title, specialties, address);
      }
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.getDoctors = getDoctors;
