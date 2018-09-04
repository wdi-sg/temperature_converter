console.log("it works")

var temperatureInFahrenheit = prompt("What is the temperature in fahrenheit?");

/**

temperatureInCelsius =
( tempuratureInFahrenheit - 32 ) / 1.8

temperatureInKelvin = temperatureInCelsius + 273

*/

// defining temp in Celsius
var temperatureInCelsius = (temperatureInFahrenheit - 32) / 1.8;

// defining temp in Kelvin
var temperatureInKelvin = temperatureInCelsius + 273;

console.log(temperatureInFahrenheit);

console.log(temperatureInCelsius);

console.log(temperatureInKelvin);

