(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "030c786654c2b6ca645e6cfcc0628f62"

},{}],2:[function(require,module,exports){
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

},{"./../js/lookup.js":3}],3:[function(require,module,exports){

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

},{"./../.env":1}]},{},[2]);
