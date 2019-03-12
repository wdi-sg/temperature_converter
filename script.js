
var temperatureInFahr = prompt("How many degrees do you want in Fahrenheit?");
console.log(Math.round((temperatureInFahr - 32) * 5/9 + 273.15 + "K" + " " + (temperatureInFahr - 32) * 5/9 + "°C"));


var temperature = prompt("How many degrees do you want to covert?");
var temperatureUnit = prompt("Which unit do you want?: Fahrenheit, Celsius, or Kelvin")

var fahrenheit_to_celsius = Math.round((temperature - 32) * 5/9);
var fahrenheit_to_kelvin = Math.round((temperature - 32) * 5/9 + 273.15);
var celsius_to_fehrenheit = Math.round((temperature * 9/5) + 32);
var celsius_to_kelvin = Math.round(temperature + 273.15);
var kelvin_to_fehrenheit = Math.round((temperature - 273.15) * 9/5 + 32);
var kelvin_to_celsius = Math.round(temperature - 273.15);


if (temperature >= 0 && temperatureUnit === "Fahrenheit") {
    alert(temperature + "°F = " + fahrenheit_to_celsius + "°C = " + fahrenheit_to_kelvin + "K");
} else if (temperature >= 0 && temperatureUnit === "Celsius") {
    alert(temperature + "°C = " + celsius_to_fehrenheit + "°F = " + celsius_to_kelvin + "K");
} else if (temperature >= 0 && temperatureUnit === "Kelvin") {
    alert(temperature + "K = " + kelvin_to_fehrenheit + "°F = " + kelvin_to_celsius + "°C");
} else {
    alert("Please type a number!")
}