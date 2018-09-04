//var temperatureInFahr = prompt ("Please enter temperature in Farenheit.");
//var temperatureInKelvin = temperatureInFahr-459.67;
//var temperatureInCelsius = temperatureInFahr+32;
//var temperatureInFahr = temperatureInCelsius-17.7778;

var temperature = prompt ("Please enter temperature.");
var temperatureUnit = prompt ("Please enter temperature unit (Kelvin, Celsius, Farenheit).");

if (temperatureUnit = "Celsius"){
    var temperatureInKelvin = temperature+273.15;
    var temperatureInFahr = temperature+32;
    alert(temperature + ' °C = ' temperatureInKelvin + ' K = ' temperatureInFahr + ' °F');
}

