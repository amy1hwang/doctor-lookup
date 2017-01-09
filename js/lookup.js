
var apiKey = require('./../.env').apiKey;

var getDoctors = function(checkedInput, outputDocInfo, callback) {

  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ checkedInput +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=' + apiKey)
   .then(function(result) {
     callback(result, checkedInput);
   })
   .fail(function(error){
      console.log("fail");
    });
};

exports.getDoctors = getDoctors;
