var LookUp = require('./../js/lookup.js').getDoctors;

var outputDocInfo = function(firstName, lastName, title, specialties, address, contact) {
  $('#outputIssue').append("<ul><li id='doctor'>" + firstName + " " + lastName + ", " + title + "</li>" + "<li>" + "<strong>Specialties: </strong>" + specialties + "</li>" + "<li>" + "<strong>Address: </strong>" + address + "</li>" + "<li>" + "<strong>contact: </strong>" + contact + "</li>" + "</ul>");
  // $('#outputInsurce').append("<li>" + insurancePlan + "</li>");
};

var outputResults = function(result) {
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
 }

$(document).ready(function() {
  $("#lookup-form").submit(function(event) {
    event.preventDefault();
    var checked = $("input:checkbox:checked");
    checked.each(function() {
      var checkedInput = $(this).val();
      LookUp(checkedInput, outputDocInfo, outputResults);
      $("#lookup-form").hide();
      $('#output').append("<li id='outputIssue'>" + "Medical Issue: " + checkedInput + "</li><br>");
    });
  });
});

//FIX INSURANCE FOR LOOP
//FIX OUTPUTISSUE POSITION
