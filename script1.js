var temperature;
var temperatureUnit;
var temperatureCelsius;
var temperatureKelvin;
var temperatureInFahr;

temperature = parseInt(prompt("Please enter a temperature"));
temperatureUnit = prompt("please enter the temperature unit");

if (temperatureUnit == "celsius"){
	temperatureKelvin = temperature+273;
	temperatureInFahr = (9/5)*temperature+32;
	console.log(temperature+"C = "+temperatureKelvin+"K = "+temperatureInFahr+"F");
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
