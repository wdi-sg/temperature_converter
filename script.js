
//var inputHappened = function(currentInput){
//  console.log( currentInput );
//  var output = "WOW TEMPERATURE";
//  return output;
//};

// Part 1
//Your application should...

// Prompt the user for a starting temperature. This should be a numerical value that represents degrees in fahrenheit.
// After receiving input it should show that same temperature in both Kelvin and Celsius.

function temperatureConverter(input) {
    input = parseInt(input);
    document.querySelector("#outputKevin").innerHTML = (((input - 32)/1.8)+273.15).toFixed(2);
    input = parseInt(input);
    document.querySelector("#outputCelsius").innerHTML = ((input -32)/1.8).toFixed(2);
}

function temperatureConverterFromKevin(input) {
    input = parseInt(input);
    document.querySelector("#outputKevinToCelsius").innerHTML = (input -273.15).toFixed(2);
    input = parseInt(input);
    document.querySelector("#outputKevinToFahrenheit").innerHTML = (((input -273.15)*1.8)+32).toFixed(2);
}

function temperatureConverterFromCelsius(input) {
    input = parseInt(input);
    document.querySelector("#outputCelsiusToFahrenheit").innerHTML = ((input *1.8)+32).toFixed(2);
    input = parseInt(input);
    document.querySelector("#outputCelsiusToKevin").innerHTML = (input+273.15).toFixed(2);
}

if (".inputCelsius".value < 0 || ".inputKevin".value < 273.15 || ".inputFahrenheit".value < 32) {
    console.log("ooh it's cold out");
} else if (".inputCelsius".value > 40 || ".inputKevin".value > 313.15 || ".inputFahrenheit".value > 104) {
    console.log("ooh it's hot out");
} else if (".inputCelsius".value > 100 || ".inputKevin".value > 373.15 || ".inputFahrenheit".value > 212) {
    console.log("your literally boiling");
}