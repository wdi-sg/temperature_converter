var userInput = prompt("Input the temperature in fahrenheit");

var temperatureInFahr = userInput;

var temperatureInCelsius = (temperatureInFahr - 32) * (5 / 9);

var temperatureInKelvin = (temperatureInFahr - 32) * (5 / 9 ) + 273.15;

console.log("Temperature converted in Celsius" + " " +temperatureInCelsius + "C");
console.log("Temperature converted in Kelvin" + " " +temperatureInKelvin + "K");


// ### Part 1

// > Your application should...

// * Prompt the user for a starting `temperatureInFahr`. This should be a numerical value that represents degrees in fahrenheit.
// * After receiving input it should log that same temperature in both Kelvin and Celsius.