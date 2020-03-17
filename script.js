console.log("hello script js");

var inputHappened = function(currentInput){
  var inKelvin = (((parseInt(currentInput))+459.67)*(5/9));
  console.log(inKelvin)
  var inCelcius = (((parseInt(currentInput)) - 32)*(5/9));
  console.log(inCelcius);
  var output = "Converted to Kelvin is: " + inKelvin + " and converted to celcius is: " + inCelcius;
  return output;
};