console.log("hello script js");

var calculateCelsius = function(input) {
    var celsius = ((input - 32) * 5) / 9;
    return celsius;
}

var calculateKelvin = function(input) {
    var kelvin = (((input - 32) * 5) / 9) + 273.15;
    return kelvin;
}

var inputHappened = function(currentInput){
  var output = parseInt (currentInput);
  var celsius = Math.round(calculateCelsius(currentInput) * 100) / 100;
  var kelvin = Math.round(calculateKelvin(currentInput) * 100) / 100;
  return "Temperature: " + output + " Farenheit, " + celsius + " Celsius, " + kelvin + " Kelvin";
};