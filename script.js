//prompt user for starting temperature in fahrenheit and save as variable
var temperatureInFahr = prompt("What is the temperature (Fahrenheit)?");

//Convert temperature to Celcius and Kelvin
var temperatureInCelcius = ((temperatureInFahr -32) * (5/9));
var temperatureInKelvin = (temperatureInCelcius + 273.15);

//Log data
console.log(temperatureInFahr + " F = " + temperatureInCelcius + " C = " + temperatureInKelvin +"K");



