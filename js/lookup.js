
var apiKey = require('./../.env').apiKey;

var getDoctors = function(checkedInput, outputDocInfo) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ checkedInput +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      console.log(result);
      for(var i = 0; i < result.data.length; i++) {
        var data = result.data[i];
        ///profile
        var profile = data.profile;
        var lastName = profile.last_name;
        var firstName = profile.first_name;
        var title = profile.title;
        //specialties
        var specialties = data.specialties[0].name;
        //location
        var location = data.practices[0].visit_address;
        var street = location.street;
        var street2 = location.street2;
        var city = location.city;
        var state = location.state;
        var zip = location.zip;
        var address = "<ul><li>" + street + " " + street2 + "</li><li>" + city + ", " + state + "</li><li>" + zip + "</li></ul>";
        //contact number
        var contact = data.practices[0].phones[0].number;
        //insurances
        for(var j = 0; j < data.insurances.length; j++) {
          var insurancePlan = data.insurances[j].insurance_plan.name;
        }
        outputDocInfo(firstName, lastName, title, specialties, address, contact);
      }
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.getDoctors = getDoctors;
