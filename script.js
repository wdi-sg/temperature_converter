var temperatureInFahr = prompt("What is the temperature? (in Fahrenheit)")
var temperatureInCelsius = (temperatureInFahr - 32) * (5/9) 
var temperatureInKelvin = ((temperatureInFahr - 32) * 5/9) + 273.15
console.log(temperatureInCelsius);
console.log(temperatureInKelvin);