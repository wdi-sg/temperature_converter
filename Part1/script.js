var userInput = prompt('Enter temperature in Fahrenheit');
var temperatureInFahr = parseFloat(userInput);
var temperatureInCelsius = (temperatureInFahr - 32) * 5/9;
var temperatureInKelvin = temperatureInCelsius + 273.15
alert("Temperature in Fahrenheit: " + userInput)
alert("Temperature in Celsius: " + temperatureInCelsius);
alert("Temperature in Kelvin: " + temperatureInKelvin);

