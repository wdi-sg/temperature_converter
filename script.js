var temperatureInFahr = parseFloat(prompt("Please enter a temperature in Fahrenheit: "));

if (isNaN(temperatureInFahr)) {
 alert("ERROR: INVALID VALUE");
} else {
	document.getElementById("Fahrenheit").innerHTML = "You entered " + temperatureInFahr + "°F";
}
var deg = (temperatureInFahr - 32) * 5/9;
var deg2sf = Math.round(deg * 100) / 100
var kel = (temperatureInFahr - 32) * 5/9 + 273.15;
var kel2sf = Math.round(kel * 100) / 100


document.getElementById("Celcius").innerHTML = "The temperature in Degrees is " + deg2sf + "°C";
document.getElementById("Kelvin").innerHTML = "The temperature in Kelvin is " + kel2sf + "K";
alert("The temperature in Degrees is " + deg2sf + "°C");
alert("The temperature in Kelvin is " + kel2sf + "K");



console.log("The temperature in Degrees is " + deg2sf + "°C");
console.log("The temperature in Kelvin is " + kel2sf + "K");