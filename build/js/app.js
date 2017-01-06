(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "030c786654c2b6ca645e6cfcc0628f62"

},{}],2:[function(require,module,exports){


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

},{"./../js/lookup.js":3}],3:[function(require,module,exports){

var apiKey = require('./../.env').apiKey;
// var Calculator = function() {
//
// }
// Calculator.prototype.add = function() {
//   console.log("Adding");
// }
//
// exports.Calculator = Calculator;

exports.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      console.log(result);
    })
   .fail(function(error){
      console.log("fail");
    });
    console.log(apiKey);
};

},{"./../.env":1}]},{},[2]);
