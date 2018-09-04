//constants are marked with all caps)
var temps = [STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2];

var STARTING_TEMP;
var temperatureUnit;
var CONVERTED_TEMP_1;
var CONVERTED_TEMP_2;

temps[0] = parseInt(prompt("Please enter a temperature"));
temperatureUnit = prompt("please enter the temperature unit");

if (temperatureUnit == "celsius"){
	temps[1] = temps[0]+273;
	temps[1] = temps[1]+"K";
	temps[2] = (9/5)*temps[0]+32;
	temps[2] = temps[2]+"F";
	temps[0] = temps[0]+"C";
	for (var i=0; i<temps.length; i++){
		console.log(temps[i]);
	}
}

if (temperatureUnit == "kelvin"){
	temperatureCelsius = temperature-273;
	temperatureInFahr = (9/5)*(temperature-273)+32;
	console.log(temperature+"K = "+temperatureCelsius+"C = "+temperatureInFahr+"F");
}

if (temperatureUnit == "fahrenheit"){
	temperatureCelsius = (5/9)*(temperature-32);
	temperatureKelvin = temperatureCelsius+273;
	console.log(temperature+"F = "+temperatureCelsius+"C = "+temperatureKelvin+"K");
}
