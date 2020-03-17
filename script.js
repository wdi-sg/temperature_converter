console.log("hello script js");

//prompt for input
alert("Please input a temperature in degree fahrenheit.");


//Get input in degF and convert to degC and K
var inputHappened = function(currentInput) {
  console.log( parseInt(currentInput) );
  var fahrenheit = parseInt(currentInput);
  var output = Math.floor((fahrenheit - 32) * 5/9);
  var outputK = Math.floor(output + 273.15);
  return currentInput + " degF = " + output + " degC or " + outputK + " K";
};