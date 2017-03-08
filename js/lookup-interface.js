var LookUp = require('./../js/lookup.js').getDoctors;

var outputDocInfo = function(firstName, lastName, title, specialties, address, contact, checkedInput) {
  // write all html output
  $('.outputDoctors:last').append("<li id='doctor'>" + firstName + " " + lastName + ", " + title + "</li>" + "<li>" + "<strong>Specialties: </strong>" + specialties + "</li>" + "<li>" + "<strong>Address: </strong>" + address + "</li>" + "<li class='last-li'>" + "<strong>contact: </strong>" + contact + "</li>");
};

var outputResults = function(result, checkedInput) {
   console.log(result);
   $('#output').append("<ul>" + "<li class='outputIssue'>" + "Medical Issue: " + checkedInput + "<ul class='outputDoctors'></ul></li>" + "</ul>");
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
     var address = "<ul id='address'><li>" + street + " " + street2 + "</li>" + "<li>" + city + ", " + state + "</li><li>" + zip + "</li></ul>";
     //contact number
     var contact = data.practices[0].phones[0].number;

     outputDocInfo(firstName, lastName, title, specialties, address, contact, checkedInput);
   }
 }

$(document).ready(function() {

  $("#lookup-form").submit(function(event) {
    event.preventDefault();

    if (!$("input").is(":checked")) {
      alert("Please check the medial issue(s) you have.")
    }

    var checked = $("input:checkbox:checked");
    checked.each(function() {
      var checkedInput = $(this).val();
      $("#lookup-form").hide();
      LookUp(checkedInput, outputDocInfo, outputResults);
    });
  });
});
