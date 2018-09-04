//var temperatureInFahr = prompt ("Please enter temperature in Farenheit.");
//var temperatureInKelvin = temperatureInFahr-459.67;
//var temperatureInCelsius = temperatureInFahr+32;
//var temperatureInFahr = temperatureInCelsius-17.7778;

var temperatureInFahr = prompt("Please enter temperature.");

var temperature = prompt("Please enter temperature.");
var temperatureUnit = prompt("Please enter temperature unit (Kelvin, Celsius, Farenheit).");

if (temperatureUnit = "Celsius"){
    var temperatureInKelvin = temperature+273.15;
    var temperatureInFahr = temperature+32;
alert(temperature + " degC = " + temperatureInKelvin + " K = " + temperatureInFahr + " degF");
    } else if (temperature = "Kelvin"){
        var temperatureInCelsius = temperature-273.15;
        var temperatureInFahr = temperature-459.67;
        alert(temperature+" K = " + temperatureInCelsius + " degC = " + temperatureInFahr + " degF");
    } else if (temperature ="Farenheit"){
        var temperatureInKelvin = temperature+255.372;
        var temperatureInCelsius = temperature-17.7778;
        alert(temperature + " degF = " + temperatureInKelvin + " K = " + temperatureInCelsius + " degC");
    } else {alert("Invalid input");
}






