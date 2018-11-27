var temperatureInFahr = prompt("Please enter temperature in Fahrenheits");

var temperatureInK = ((temperatureInFahr - 32) * (5/9)) + 273.15;
var temperatureInC = ((temperatureInFahr - 32) * (5/9));

alert("Temperature in Kelvins is:" + temperatureInK + "\n" + "Temperature in Celcius is: " + temperatureInC);