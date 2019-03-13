var temperatureInFahr = prompt("What's the temperature in Fahrenheit?");
console.log(temperatureInFahr);

var temperatureInCelsius = (temperatureInFahr-32) * (5/9);
var temperatureInKelvin = temperatureInCelsius + 273.15;

alert("The temperature in celsius is "+temperatureInCelsius+"c."+" "+"While the temperature in kelvin is "+temperatureInKelvin+"k.");

var temperature = prompt("What is the temperature in (any) degrees?")
console.log(temperature);

var temperatureUnit = prompt("Now what unit will this temperature take? Choose between Fahrenheit, kelvin, and celsius.");
console.log(temperatureUnit);

var temps = {}

if (temperatureUnit === "Fahrenheit") {
	temps["Fahrenheit"] = temperature;
	temps["celsius"] = (temperature - 32) * (5/9);
	temps["kelvin"] = (temperature - 32) * (5/9) + 273.15;
} else if (temperatureUnit === "kelvin") {
	temps["kelvin"] = temperature;
	temps["Fahrenheit"] = (temperature - 273.15) * (9/5) + 32;
	temps["celsius"] = temperature - 273.15;  
} else if (temperatureUnit === "celsius") {
	temps["celsius"] = temperature;
	temps["kelvin"] = temperature + 273.15;
	temps["Fahrenheit"] = (temperature - 273.15) * (9/5) +32;
 } else {
 	alert("Invalid value");
 };

 console.log(temps);

 for (var key in temps) {
 	alert(key + ": " +temps[key]);
 };
