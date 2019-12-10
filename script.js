console.log("hello script js");

var inputHappened = function( input ) {
  var fahrenheit = parseInt( input );
  var Celsius = (fahrenheit-32)/18;
  var Kelvin = Celsius + 273.15;
  var output = Celsius + " Celsius and " + Kelvin + " Kelvin";
  return output;


};
console.log("yay");