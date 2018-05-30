//part 1 - fahrenheit to Kelvin and Celsius

var temperatureInFahr = prompt('Enter temperature in degrees Fahrenheit');
var temperatureInCelsius = (temperatureInFahr - 32) * 5 / 9;

var temperatureInKelvin = (temperatureInFahr + 459.67) * 5 / 9;


//part 2


var temperature = prompt('Enter temperature');
var temperatureUnit = prompt('Enter unit of temperature');
var tempFInCelsius = (temperature - 32) * 5/9;

var tempFInKelvin = (temperature + 459.67) * 5/9;
var tempCInKelvin = (temperature + 273.15);

var tempCInFahr = (temperature * 9/5 + 32);
var tempKInCelcius = (temperature - 273.15);

var tempKInFahr = (temperature - 273) * 9/5 + 32;
var fahrenheit = "F";
var celcius = "C";
var kelvin = "K";


console.log(temperature + temperatureUnit);
if (temperatureUnit === fahrenheit) {
	console.log(tempFInCelsius + celcius);
	console.log(tempFInKelvin + kelvin);
};

if (temperatureUnit === celcius){
	console.log(tempCInKelvin + kelvin);
	console.log(tempCInFahr + fahrenheit);
};

if (temperatureUnit === kelvin){
	console.log(tempKInCelcius + celcius);
	console.log(tempKInFahr + fahrenheit);
};