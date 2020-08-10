console.log("hello script js");

// define global variables
var celsius = 0;
var fahrenheit = 0;
var kelvin = 0;
var state = "default";
var temp = 0;

/*
currentInput -> string (temperature, units)

temperature will be converted from string to int

inputHappened function reads and executes the conversion functions (line 80 to 114) and feeling function (line 62 to 77).
*/

var inputHappened = function(currentInput){
  console.log(currentInput);
  if (state === "default") {
    if (isNaN(currentInput)) {
      var output = "Please enter a valid number";
      state = "default";
      return output;
    } else {
      state = "unit";
      temp = parseInt(currentInput);
      var output = "Please enter the unit (F = Fahrenheit, K = Kelvin, C = Celsius)";
      return output;
    }
  } else if (state === "unit") {
      if (currentInput === "F") {
      celsius = fahrenheitToCelsius(temp);
      fahrenheit = temp;
      kelvin = fahrenheitToKelvin(temp);
      message = feeling(celsius);
      var output = "F: " + fahrenheit + " C: " + celsius + " K: " + kelvin + " " + message;
      return output;
    } else if (currentInput === "K") {
      celsius = kelvinToCelsius(temp);
      fahrenheit = kelvinToFahrenheit(temp);
      kelvin = temp;
      message = feeling(celsius);
      var output = "F: " + fahrenheit + " C: " + celsius + " K: " + kelvin + " " + message;
      return output;
    } else if (currentInput === "C") {
      celsius = temp;
      fahrenheit = celsiusToFahrenheit(temp);
      kelvin = celsiusToKelvin(temp);
      message = feeling(celsius);
      var output = "F: " + fahrenheit + " C: " + celsius + " K: " + kelvin + " " + message;
      return output;
    } else {
      var output = "Please enter a valid unit from the list (F, K, C)";
      state = "unit";
      return output;
    }
  }
}

// Feeling function below
var feeling = function(celsius) {
  var c = parseInt(celsius);
  if (c < 0) {
    var output = "ooh it's cold out";
    return output;
  } else if (c > 40 && c < 100) {
    var output = "ooh it's hot out";
    return output;
  } else if (c >= 100) {
    var output = "you're literally boiling";
    return output;
  } else {
    var output = "";
    return output;
  }
}

// Conversion functions below
function celsiusToKelvin(temp) {
  celsius = parseInt(temp);
  kelvin = celsius - 273;
  return kelvin;
}

function kelvinToCelsius(temp) {
  kelvin = parseInt(temp);
  celsius = kelvin + 273;
  return celsius;
}

function fahrenheitToCelsius(temp) {
  fahrenheit = parseInt(temp);
  celsius = (5 / 9 * (fahrenheit - 32)).toFixed(1);
  return celsius;
}

function fahrenheitToKelvin(temp) {
  fahrenheit = parseInt(temp);
  kelvin = (5 / 9 * (fahrenheit - 32) + 273).toFixed(1);
  return kelvin;
}

function celsiusToFahrenheit(temp) {
  celsius = parseInt(temp);
  fahrenheit = ((9 / 5 * celsius) + 32).toFixed(1);
  return fahrenheit;
}

function kelvinToFahrenheit(temp) {
  kelvin = parseInt(temp);
  fahrenheit = ((9 / 5 * (kelvin - 273)) + 32).toFixed(1);
  return fahrenheit;
}