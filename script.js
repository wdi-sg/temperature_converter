
var temperature = 0;

var temperatureUnit = "";

var count = 0;

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

var celsiusToKelvin = function(input) {
    var celsius = (input + 273.15);
    return celsius;
}

var kelvinToCelsius = function(input) {
    var kelvin = (input - 273.15);
    return kelvin;
}

var kelvinToFarenheit = function(input) {
    var kelvin = (((input - 273.15)* 9) / 5) + 32;
    return kelvin;
};

var statementWeather = function(input) {
    if (input < 0) {
        return "ooh it's cold out";
    } else if (input >= 40 && input < 100) {
        return "ooh it's hot out";
    } else if (input >= 100) {
        return "you're literally boiling";
    } else {
        return "";
    }
};

var inputHappened = function(currentInput){
  var output = temperature;
  var celsius = Math.round(farenheitToCelsius(temperature) * 100) / 100;
  var kelvin = Math.round(farenheitToKelvin(temperature) * 100) / 100;
  var celsiusToF = Math.round(celsiusToFarenheit(temperature) * 100) / 100;
  var kelvinToF = Math.round(kelvinToFarenheit(temperature) * 100) / 100;
  var celsiusToK = Math.round(celsiusToKelvin(temperature)* 100) / 100;
  var kelvinToC = Math.round(kelvinToCelsius(temperature) * 100) / 100;
  var statement = statementWeather(temperature);

  console.log(typeof output);

  if (count === 0){
    temperature = parseInt(currentInput);
    count += 1;
  } else if (count === 1) {
    temperatureUnit = currentInput;
    if (temperatureUnit === "farenheit"){
        return "Temperature: " + output + " Farenheit, " + celsius + " Celsius, " + kelvin + " Kelvin" + " " + statement;
    } else if (temperatureUnit === "celsius"){
        return "Temperature: " + output + " Celsius, " + celsiusToF + " Farenheit, " + celsiusToK + " Kelvin" + " " + statement;
    } else if (temperatureUnit === "kelvin") {
        return "Temperature: " + output + " Kelvin, " + kelvinToC + " Celsius, " + kelvinToF + " Farenheit" + " " + statement;
    }
  };

  console.log(temperature);
  console.log(temperatureUnit);
};