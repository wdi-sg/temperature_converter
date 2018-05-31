var temperature = prompt("What is the temperature?")
var temperatureUnit = prompt("What is the unit of the temperature? (fahrenheit, celsius or kelvin)")

if (temperatureUnit === "fahrenheit") {
	var temperatureInCelsius = (temperature - 32) * (5/9);
	var temperatureInKelvin = ((temperature - 32) * 5/9) + 273.15;
	console.log(temperature + "\xB0F = " + temperatureInCelsius + "\xB0C = " + temperatureInKelvin + "K");
} else if (temperatureUnit === "celsius") {
	var temperatureInFahr = (temperature * 9/5) + 32;
	var temperatureInKelvin = temperature + 273.15;
	console.log(temperature + "\xB0F = " + temperatureInCelsius + "\xB0C = " + temperatureInKelvin + "K");
} else if (temperatureUnit === "kelvin") {
	var temperatureInFahr = ((temperature-273.15)*9/5)+32;
	var temperatureInCelsius = temperature - 273.15;
	console.log(temperature + "\xB0F = " + temperatureInCelsius + "\xB0C = " + temperatureInKelvin + "K");
} else {
	console.log("Unit is invalid")
}