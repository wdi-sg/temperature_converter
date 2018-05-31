var starting_temp = parseInt(prompt("Enter a temperature"));
var temperatureUnit = prompt("What is the unit of the temperature? (fahrenheit, celsius or kelvin)")

if (temperatureUnit === "fahrenheit") {
	var converted_temp_1 = (starting_temp - 32) * (5/9);
	var converted_temp_2 = ((starting_temp - 32) * 5/9) + 273.15;

} else if (temperatureUnit === "celsius") {
	var converted_temp_1 = (starting_temp * 9/5) + 32;
	var converted_temp_2 = starting_temp + 273.15;

} else if (temperatureUnit === "kelvin") {
	var converted_temp_1 = ((starting_temp-273.15)*9/5)+32;
	var converted_temp_2 = starting_temp - 273.15;

} else {
	console.log("Unit is invalid")
}

var temps = [ starting_temp, converted_temp_1, converted_temp_2 ];
console.log(temps);

 /*

 while (typeof temperatureUnit === "number") {

} 