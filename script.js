// prompt temp 
var STARTING_TEMP = parseInt(prompt("Input temperature"), 10);

// prompt unit
var tempUnit = prompt("Specify Unit eg. C , K or F");

var temps = [];

// converting Celsius
if (tempUnit == "C") {
	var CONVERTED_TEMP_1 = (STARTING_TEMP * (9 / 5) + 32) + " F"; 	// to Fahrenheit
	var CONVERTED_TEMP_2 = (STARTING_TEMP + 273.15) + " K"; 	// to Kelvin
	temps.push(STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2);
for (var i = 0; i < temps.length; i++) {
	console.log(temps[i]);
 };
	alert(temps);
}  
// converting Kelvin
else if (tempUnit == "K") {
	var CONVERTED_TEMP_1 = (STARTING_TEMP * (9 / 5) - 459.67) + " F";
	var CONVERTED_TEMP_2 = (STARTING_TEMP - 273.15) + " C";
	temps.push(STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2);
for (var i = 0; i < temps.length; i++) {
	console.log(temps[i]);
 };
	alert(temps);
}
// converting Fahrenheit
else {
	var CONVERTED_TEMP_1 = (STARTING_TEMP - 32 * (5 / 9)) + " C";
	var CONVERTED_TEMP_2 = (STARTING_TEMP + 459.67 * (5 / 9)) + "K";
	temps.push(STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2);
for (var i = 0; i < temps.length; i++) {
	console.log(temps[i]);
 };
	alert(temps);
};