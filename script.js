
var temperatureinFahr = prompt("What is the temperature in Farenheit?")
	console.log("The temperature is " + ((temperatureinFahr - 32) * (5/9)) + " degrees Celsius.");
    console.log("The temperature is " + ((temperatureinFahr + 459.57) * (5/9)) + " Kelvin.");

var temperature = prompt("What is the temperature?");
var temperatureUnit = prompt("What unit is the temperature measured in?");

if (temperatureUnit === "farenheit") {
	console.log("The temperature is " + ((temperature - 32) * (5/9)) + " degrees Celsius.");
    console.log("The temperature is " + ((temperature + 459.57) * (5/9)) + " Kelvin.");
} else if (temperatureUnit === "celsius") {
	console.log("The temperature is " + ((1.8 * temperature) + 32) + " degrees Farenheit.");
	console.log("The temperature is " + (temperature + 273.15) + " Kelvin.");
} else if (temperatureUnit === "kelvin") {
	console.log("The temperature is " + (temperature - 273.15) + " degrees Celsius.");
	console.log("The temperature is" + ((temperature * 9/5) - 459.67) + " degrees Farenheit.");
}

var temps = [[temperature, ((temperature - 32) * (5/9)), ((temperature + 459.57) * (5/9))], [temperature, ((1.8 * temperature) + 32), (temperature + 273.15)], [temperature, (temperature - 273.15), ((temperature * 9/5) - 459.67)]];
var userName = prompt("What is your name?");
var clothes = ["nothing", "swimsuit", "shorts and shirt", "sweater", "sweater + jacket", "heavy jacket", "heavy jacket and toe warmers", "don't got outside if you want to live"];

if (temps[[0]] > 100) {
	console.log("You're literally boiling.");
	console.log("Consider wearing " + clothes[0] + " or " + clothes[1] + ".");
} else if (temps[[0]] > 40) {
	console.log("Ooh, it's hot out.");
	console.log("Consider wearing " + clothes[1] + ".");
} else if (temps[[0]] < 0) {
	console.log("Ooh, it's cold out.");
	console.log("Consider wearing " + clothes[4] + " or " + clothes[5] + ".");
}



