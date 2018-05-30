var tempValue = prompt("Please enter temperature in Fahrenheit:")
var temperatureInFahr = parseInt(tempValue)
var temperatureInCels;//((temperatureInFahr - 32) % 1.8)
var temperatureinKel; //= (((temperatureInFahr - 32) % 1.8) + 273.15)
var temp = prompt("Please enter a starting temperature: ")
var startingTemp = parseInt(temp)
var temperatureUnit = prompt("Enter a Temperature Unit: F / K / C")

var temperatureF = function(temperatureInFahr) {
	console.log(temperatureInFahr+ "°F")
};

 var temperatureC = function(temperatureInFahr) {	
 	var temperatureInCels = ((temperatureInFahr - 32) % 1.8)
 	console.log(temperatureInCels+ "°C")
};

var temperatureK = function(temperatureInFahr) {
	var temperatureinKel = (((temperatureInFahr - 32) % 1.8) + 273.15)
	console.log(temperatureinKel+ "K")
};

temperatureF(temperatureInFahr);
temperatureC(temperatureInFahr);
temperatureK(temperatureInFahr);
//|| startingTemp === !false

if (startingTemp === 32 && temperatureUnit === "F") 
{
	console.log("32°F = 0°C= 273.15K")
} 
else if (startingTemp == 0 && temperatureUnit === "C")
{
	//var temperatureInCels = ((temperatureInFahr - 32) % 1.8)
	//console.log("°C: " + temperatureInCels)
	console.log("0°C = 32°F = 273.15K")
}
else if (startingTemp == 273.15 && temperatureUnit == "K")
{
	console.log("273.15K = 0°C = 32°F")
}
else {

}