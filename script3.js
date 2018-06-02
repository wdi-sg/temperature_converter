var STARTING_TEMP = parseInt(prompt("What's the temp today?"));
var temperatureUnit = prompt("What unit would you like to use?");

var temps = [];

if (temperatureUnit == "fahrenheit") {
	var fah = STARTING_TEMP;
	var deg = ((STARTING_TEMP-32)*5/9);
	var kel = ((STARTING_TEMP-32)*5/9) + 273.15;

	temps.push(fah, deg, kel);

	console.log(deg);
	console.log(kel);
	console.log(fah);

} else if (temperatureUnit == "celsius") {
	var fah = (STARTING_TEMP*9/5)+32;
	var deg = STARTING_TEMP;
	var kel = STARTING_TEMP + 273.15;

	temps.push(deg, fah, kel);

	console.log(deg);
	console.log(kel);
	console.log(fah);

} else {
	var fah = ((STARTING_TEMP-273.15)*9/5)+32;
	var deg = STARTING_TEMP = 273.15;
	var kel = STARTING_TEMP;

	temps.push(kel, deg, fah);

	console.log(deg);
	console.log(kel);
	console.log(fah);
}

//.toFixed(2) --> to round to 2 dp

document.getElementById('fah').innerHTML = fah;
document.getElementById('deg').innerHTML = deg;
document.getElementById('kel').innerHTML = kel;


