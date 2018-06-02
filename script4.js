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

	temps.push(fah, deg, kel);

	console.log(deg);
	console.log(kel);
	console.log(fah);

} else {
	var fah = ((STARTING_TEMP-273.15)*9/5)+32;
	var deg = STARTING_TEMP = 273.15;
	var kel = STARTING_TEMP;

	temps.push(fah, deg, kel);

	console.log(deg);
	console.log(kel);
	console.log(fah);
}

for (var i = 0; i < 3; i++) {
	
	console.log('r-'+i);
	console.log(document.getElementById('r-'+i));
	document.getElementById('r-'+i).innerHTML = temps[i];

}



