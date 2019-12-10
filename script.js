console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  var output;
  var temperatureKelvin;
  var temperatureCelsius;
  if (isNaN(currentInput) === true) {
    output = "Invalid, only numbers please!";
  } else {
    temperatureKelvin = currentInput + 273.15;
    temperatureCelsius = (currentInput - 32) * 5 / 9;
    output = "Temperature in Kelvin: " + temperatureKelvin + "\n"  + "Temperature in Celsius: " + temperatureCelsius;
  }
  return output;
};
