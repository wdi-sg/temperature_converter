
var farenheitToCelsius = function(input) {
    var celsius = ((input - 32) * 5) / 9;
    return celsius;
};

var farenheitToKelvin = function(input) {
    var kelvin = (((input - 32) * 5) / 9) + 273.15;
    return kelvin;
};

var celsiusToFarenheit = function(input) {
    var farenheit = (((input * 9) / 5) + 32);
    return farenheit;
};

var kelvinToFarenheit = function(input) {
    var kelvin = (((input - 273.15)* 9) / 5) + 32;
    return kelvin;
};

var statementWeather = function(input) {
    if (input < 0) {
        return "ooh it's cold out";
    } else if (input > 40 && input < 100) {
        return "ooh it's hot out";
    } else if (input > 100) {
        return "you're literally boiling";
    } else {
        return "";
    }
};

var inputHappened = function(currentInput){
  var output = currentInput;
  var celsius = Math.round(farenheitToCelsius(currentInput) * 100) / 100;
  var kelvin = Math.round(farenheitToKelvin(currentInput) * 100) / 100;
  // var celsiusToFarenheit = Math.round(celsiusToFarenheit(currentInput) * 100) / 100;
  // var kelvinToFarenheit = Math.round(kelvinToFarenheit(currentInput) * 100) / 100;
  var statement = statementWeather(currentInput);
  console.log(typeof output);
  if (output) {
    return "Temperature: " + output + " Farenheit, " + celsius + " Celsius, " + kelvin + " Kelvin" + " " + statement;
  }
};