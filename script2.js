var temperature = prompt("What's the temp today?");
var temperatureUnit = prompt("What unit would you like to use?");


if (temperatureUnit == "fahrenheit") {
	var fah = temperature;
	var deg = ((temperature-32)*5/9);
	var kel = ((temperature-32)*5/9) + 273.15;

	console.log(deg);
	console.log(kel);
	console.log(fah);

} else if (temperatureUnit == "celsius") {
	var fah = (temperature*9/5)+32;
	var deg = temperature;
	var kel = deg + 273.15;

	console.log(deg);
	console.log(kel);
	console.log(fah);

} else {
	var fah = ((temperature-273.15)*9/5)+32;
	var deg = temperature = 273.15;
	var kel = temperature;

	console.log(deg);
	console.log(kel);
	console.log(fah);
}

	document.getElementById('fah').innerHTML = fah;
	document.getElementById('deg').innerHTML = deg;
	document.getElementById('kel').innerHTML = kel;


