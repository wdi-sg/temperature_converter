//prompt user for starting temperature in fahrenheit and save as variable
var temperatureInFahr = prompt("What is the temperature (Fahrenheit)?");

//Convert temperature to Celcius and Kelvin
var temperatureInCelcius = Math.round((temperatureInFahr -32) * (5/9));
var temperatureInKelvin = Math.round(temperatureInCelcius + 273.15);

//Log data
console.log(temperatureInFahr + " DegF = " + temperatureInCelcius + " DegC = " + temperatureInKelvin +" K");



