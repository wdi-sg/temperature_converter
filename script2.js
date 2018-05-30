var temperature = prompt("Please input a numerical temperature");
var unit = prompt("Please input a temperature unit, either Fahrenheit, Celcius or Kelvin");

function fToC(Fahrenheit){
	return ((Fahrenheit - 32) * 5/9).toFixed(2);
}

function fToK(Fahrenheit){
	return ((Fahrenheit - 32) * 5/9 + 273.15).toFixed(2);
}

function cToF(Celcius){
	return ((Celcius * 1.8) + 32).toFixed(2);
}

function cToK(Celcius){
	return ((Celcius * 1) + 273.15).toFixed(2);
}

function kToF(Kelvin){
	return ((Kelvin * 9/5) - 459.67).toFixed(2);
}

function kToC(Kelvin){
	return ((Kelvin * 1) - 273.15).toFixed(2);
}

if((unit[0] == "f") || (unit[0] == "F")){
 document.getElementById("conversion").innerHTML = (temperature + "°F" + " = " + fToC(temperature) + "°C" + " = " + fToK(temperature) + "K");
}

if((unit[0] == "c") || (unit[0] == "C")){
 document.getElementById("conversion").innerHTML = (temperature + "°C" + " = " + cToF(temperature) + "°F" + " = " + cToK(temperature) + "K");
}

if((unit[0] == "k") || (unit[0] == "K")){
 document.getElementById("conversion").innerHTML = (temperature + "K" + " = " + kToF(temperature) + "°F" + " = " + kToC(temperature) + "°C");
}