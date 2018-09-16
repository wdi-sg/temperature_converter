//Part 1: ask user for temperature in Farenheit. Log input into Kelvin and Celsius.
var temperatureinFahr = prompt("What is the temperature in Farenheit? Enter a number.");
console.log("The temperature is " + ((temperatureinFahr - 32) * (5/9)) + " degrees Celsius.");

 //Part 2: Prompt user for starting temperature in numerical value. Prompt user for starting temperature unit in Farenheit, Celsius or Kelvin.
var temperature = prompt("What is the temperature? Enter a numerical value");
var temperatureUnit = prompt("What unit is the temperature measured in? Enter Farenheit, Celsius or Kelvin");

function farenheit() {
	var farenheitToCelsius = ((temperature - 32) * (5/9));
	var farenheitToKelvin = ((temperature + 459.57) * (5/9));
	if (temperatureUnit == "farenheit") {
		console.log(`The temperature is ${farenheitToCelsius} degrees Celsius.`);
		console.log(`The temperature is ${farenheitToKelvin} degrees Kelvin.`);
	} 
}
farenheit();

function celsius() {
	var celsiusToFarenheit = ((temperature * 9/5) + 32);
	var celsiusToKelvin = (temperature + 273.13);
	if (temperatureUnit == "celsius") {
		console.log(`The temperature is ${celsiusToFarenheit} degrees Farenheit.`);
		console.log(`The temperature is ${celsiusToKelvin} degrees Kelvin.`);
	}
}
celsius();

function kelvin() {
	var kelvinToCelsius = (temperature - 273.15);
	var kelvinToFarenheit = (((temperature - 273.15) * (9/5)) + 32);
	if (temperatureUnit == "kelvin") {
		console.log(`The temperature is ${kelvinToCelsius} degrees Celsius.`);
		console.log(`The temperature is ${kelvinToFarenheit} degrees Farenheit.`);
	}
}
kelvin();

//Part 3: 
var startingTemp = prompt("Enter a temperature.");
var temperatureUnit = prompt("What unit is the temperature measured in? Enter Farenheit, Celsius or Kelvin");
var temps = [startingTemp, ((startingTemp * 9/5) + 32), (startingTemp + 273.13)];

function celsius() {
	if ((startingTemp == temps[0]) && temperatureUnit == "celsius") {
		console.log(`The temperature is ${temps[1]} degrees Farenheit.`);
		console.log(`The temperature is ${temps[2]} degrees Kelvin.`);
	}
}
celsius();





