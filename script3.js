var STARTING_TEMP = parseInt(prompt("Enter a temperature"));
var temperatureUnit = prompt("What is the unit of the temperature? (fahrenheit, celsius or kelvin)")

if (temperatureUnit === "fahrenheit") {
	var CONVERTED_TEMP_1 = (STARTING_TEMP - 32) * (5/9);
	var CONVERTED_TEMP_2 = ((STARTING_TEMP - 32) * 5/9) + 273.15;

} else if (temperatureUnit === "celsius") {
	var CONVERTED_TEMP_1 = (temperature * 9/5) + 32;
	var CONVERTED_TEMP_2 = temperature + 273.15;

} else if (temperatureUnit === "kelvin") {
	var CONVERTED_TEMP_1 = ((temperature-273.15)*9/5)+32;
	var CONVERTED_TEMP_2 = temperature - 273.15;

} else {
	console.log("Unit is invalid")
}

var temps = [ STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2 ];
console.log(temps);



/* --- another method

var STARTING_TEMP = parseInt(prompt("Enter a temperature"));
var temperatureUnit = prompt("What is the unit of the temperature? (fahrenheit, celsius or kelvin)")
var temps = [STARTING_TEMP];

if (temperatureUnit === "fahrenheit") {
	var CONVERTED_TEMP_1 = (STARTING_TEMP - 32) * (5/9);
	var CONVERTED_TEMP_2 = ((STARTING_TEMP - 32) * 5/9) + 273.15;
	temps.push(CONVERTED_TEMP_1, CONVERTED_TEMP_2);

} else if (temperatureUnit === "celsius") {
	var CONVERTED_TEMP_1 = (temperature * 9/5) + 32;
	var CONVERTED_TEMP_2 = temperature + 273.15;
	temps.push(CONVERTED_TEMP_1, CONVERTED_TEMP_2);


} else if (temperatureUnit === "kelvin") {
	var CONVERTED_TEMP_1 = ((temperature-273.15)*9/5)+32;
	var CONVERTED_TEMP_2 = temperature - 273.15;
	temps.push(CONVERTED_TEMP_1, CONVERTED_TEMP_2);

} else {
	console.log("Unit is invalid")
}

console.log(temps);

---- */