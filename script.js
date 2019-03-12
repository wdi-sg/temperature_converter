//Problem 1
/*
var temperatureInFahr = prompt("Please input a temperature in Farenheit?");
var temperatureInCelcius = (temperatureInFahr-32)*5/9;
var temperatureInKelvin = (temperatureInFahr-32)*5/9 +273.15;
console.log(temperatureInFahr + " deg F is equivalent to " + Math.round(temperatureInCelcius) + " deg C and " + Math.round(temperatureInKelvin) + "K");

//Problem 2

var temperature = prompt("Please input a temperature?");
var temperatureUnit = prompt ("What unit is this in? Please input F for Farenheit, C for Celcius, and K for Kelvin");

if (temperatureUnit === "F") {
    console.log(temperature + " deg F = " + Math.round((temperature-32)*5/9) + " deg C = " + Math.round((temperature-32)*5/9 + 273.15) + "K");
} else if (temperatureUnit === "C") {
    console.log(temperature + " deg C = " + Math.round(temperature * 9/5 + 32) + " deg F = " + Math.round(parseInt(temperature) + 273.15) + "K");
} else if (temperatureUnit === "K") {
    console.log(temperature + "K = " + Math.round(temperature - 273.15) + " deg C = " + Math.round((temperature - 273.15)* 9/5 +32) +" deg F");
} else {
    console.log("Did you key in one of the three units?");
}
*/
//Problem 3

var startingTemp = prompt("Please input a temperature?");
var temperatureUnit = prompt ("What unit is this in? Please input F for Farenheit, C for Celcius, and K for Kelvin");

var temps = [ STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2 ]