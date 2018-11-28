//var userInput = prompt('Whats your name?');
//console.log( userInput );
//var temperatureInFahr = prompt('What is the temperature today in Fahrenheit?');
//console.log(temperatureInFahr + "°F");
//var tempInKelvin = ((Number(temperatureInFahr) + 459.67) * (5/9));
//console.log(tempInKelvin + "K");
//var tempInCelsius = ((Number(temperatureInFahr) -32) * (5/9));
//console.log(tempInCelsius + "C");
//32° F = 0°C = 273.15K
var temperature = prompt('What is the temperature today?');
console.log(temperature);
var temperatureUnit = prompt('Temperature unit is in Fahrenheit, Celsius, or Kelvin?');
console.log(temperature + temperatureUnit);
switch(temperatureUnit)
{
	case "Fahrenheit":
	var tempInCelsius = ((Number(temperature) - 32) * (5/9));
	var tempInKelvin = (((Number(temperature) - 32) * (5/9)) + 273.15);    
    console.log(temperature + "°F" + "=" + tempInCelsius + "C" + "=" + tempInKelvin + "K");
    break;


	case (temperatureUnit === "Celsius"):
	var tempInFahr = ((Number(temperature) * (9/5)) + 32);
	var tempInKelvin = ((Number(temperature) + 273.15));    
    console.log(tempInFahr + "°F" + "=" + temperature + "C" + tempInKelvin + "K");
    break;

	case (temperatureUnit === "Kelvin"):
	var tempInFahr = (((Number(temperature) - 273.15)* (9/5)) + 32);
	var tempInCelsius = (Number(temperature) - 273.15);    
    console.log(tempInFahr + "°F" + "=" + tempInCelsius + "C" + temperature + "K");
}







