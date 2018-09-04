var temperature = prompt("What is the temperature?")
var temperatureUnit = prompt("What unit is the temperature in?")

if (temperatureUnit === "fahrenheit") {
	console.log("The Temperature in Kelvin is " + (5/9 * (temperature - 32) + 273))
	console.log("The Temperature in Celcius is " + (5/9 * (temperature - 32)))
}
else if (temperatureUnit === "celcius") {
	console.log("The Temperature in Fahrenheit is " + (9/5 * (temperature - 32) + 32))
	console.log("The Temperature in Kelvin is " + (temperature + 273))
} else if (temperatureUnit === "kelvin") {
	console.log("The Temperature in Fahrenheit is " + (9/5 * (temperature - 273) + 32))
	console.log("The Temperature in Celcius is " + (temperature - 273))
} else {
	console.log("check your temperature unit input")
}