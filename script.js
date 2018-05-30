var temperature= prompt("Enter a starting temperature");
var temperatureUnit = prompt("Enter the temperature unit","Either in K, F or Celcius");
if(temperatureUnit == "K")
{
	var temperatureInFarenheit =(temperature*9/5)-459.67;
	var temperatureInCelcius = temperature- 273.15;
	var temperatureInKelvin = temperature;
}

else if (temperatureUnit == "F")
{
	var temperatureInCelcius =(temperature-32)*5/9;
	var temperatureInKelvin =(temperature+459.67)*5/9;
	var temperatureInFarenheit=temperature;
}

else
{
var temperatureInKelvin= temperature+273.15;
var temperatureInFarenheit= ((temperature*1.8)+32);
var temperatureInCelcius= temperature;
}

console.log(temperatureInCelcius + " degrees")
console.log(temperatureInKelvin + " kelvin")
console.log(temperatureInFarenheit + " farenheit")

