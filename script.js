var temperatureInFahr =prompt("what is the temperature in fahrenheit?");
console.log("The temperature in fahrenheit is " + temperatureInFahr + " degrees fahrenheit");
var celcius = (temperatureInFahr - 32) * .5556;
console.log("The temperature is " + celcius + " degrees celcius");
var kelvin = (temperatureInFahr - 32) * 5/9 + 273.15;
console.log("The temperature is " + kelvin + " degrees kelvin");


var temperature = prompt("what is the temperature?");
var temperatureUnit = prompt("what is the unit?");
console.log(temperatureInFahr + " F " + " = " + celcius + " C " + " = " + kelvin + "K");


var checktemp = function(temp) {
if (temp > 40) {
console.log("the temperature is" + temperatureInFahr + "degree fahrenheit");	
}
else if ( 20 <= temp <= 40) {
console.log("temperature is" + celcius + "degree celcius");	
}
else {
console.log("temperature is" + kelvin + "degree kelvin");	
}
};




 	


