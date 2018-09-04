var temperatureInFahr = prompt("Please input temperature in Fahrenheit");
var temperatureInKelvin = ( (5/9) * (temperatureInFahr - 32) )+ 273;
var temperatureInCelsius = (5/9) * (temperatureInFahr - 32);

console.log("User input: " + temperatureInFahr + "Fahrenheit.");
console.log("The temperature is " + temperatureInKelvin + " Kelvin.");
console.log("The temperature is " + temperatureInCelsius + " Celsius.");
