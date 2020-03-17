console.log("hello script js");

let temperatureFahrenheit;
let temperatureCelsius;
let temperatureKelvin;

convertFahrenheittoCelsius = function (currentInput) {
    temperatureFahrenheit = currentInput;
    temperatureCelsius = (temperatureFahrenheit - 32) * 0.56;
    temperatureKelvin = (temperatureCelsius +273.15);
    return temperatureCelsius, temperatureKelvin;
}

var inputHappened = function(currentInput){
  console.log( currentInput );
  var output = "WOW TEMPERATURE";
  convertFahrenheittoCelsius(currentInput);
  var output = "The temperature in Celsius is " + temperatureCelsius + "C. The temperature in Kelvin is " + temperatureKelvin + "K.";
  return output;
};