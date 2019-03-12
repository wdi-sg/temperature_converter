//Problem 1
/*
var temperatureInFahr = prompt("Please input a temperature in Farenheit?");
var temperatureInCelcius = (temperatureInFahr-32)*5/9;
var temperatureInKelvin = (temperatureInFahr-32)*5/9 +273.15;
console.log(temperatureInFahr + " deg F is equivalent to " + Math.round(temperatureInCelcius) + " deg C and " + Math.round(temperatureInKelvin) + "K");

//Problem 2
*/
var temperature = prompt("Please input a temperature?");
var temperatureUnit = prompt ("What unit is this in? Please input F for Farenheit, C for Celcius, and K for Kelvin");

if (temperatureUnit === "F") {
    console.log(temperature + " deg F = " + Math.round((temperature-32)*5/9) + " deg C = " + Math.round((temperature-32)*5/9 + 273.15) + "K");
} else if (temperatureUnit === "C") {
    console.log(temperature + " deg C = " + Math.round(temperature * 9/5 + 32) + " deg F = " + Math.round(parseInt(temperature) + 273.15) + "K");
} else if (temperatureUnit === "K") {
    console.log(temperature + "K = " + Math.round(temperature - 273.15) + " deg C = " + Math.round((temperature - 273.15)* 9/5 +32) +" deg F");
} else {
    console.log("Did you key in one of the three units?");
}

//Problem 3
var startingTemp;
var convertedTemp1;
var convertedTemp2;

startingTemp = temperature
if (temperatureUnit === "F") {
    convertedTemp1 = Math.round((temperature-32)*5/9);
    convertedTemp2 = Math.round((temperature-32)*5/9 + 273.15);
} else if (temperatureUnit === "C") {
    convertedTemp1 = Math.round(temperature * 9/5 + 32);
    convertedTemp2 = Math.round(parseInt(temperature) + 273.15);
} else if (temperatureUnit === "K") {
    convertedTemp1 = Math.round(temperature - 273.15);
    convertedTemp2 = Math.round((temperature - 273.15)* 9/5 +32);
}

var temps = [ startingTemp, convertedTemp1, convertedTemp2 ];

startingTemp = temperature
if (temperatureUnit === "F") {
    console.log(temps[0] + " deg F = " + temps[1] + " deg C = " + temps[2] + "K");
} else if (temperatureUnit === "C") {
    console.log(temps[0] + " deg C = " + temps[1] + " deg F = " + temps[2] + "K");
} else if (temperatureUnit === "K") {
    console.log(temps[0] + "K = " + temps[1] + " deg C = " + temps[2] + " deg F");
} else {
    console.log("Did you key in one of the three units?");
}

//problem 4
var temperatureInCelcius;

if (temperatureUnit === "F") {
    temperatureInCelcius = (temperature-32)*5/9;
} else if (temperatureUnit === "C") {
    temperatureInCelcius =temperature;
} else if (temperatureUnit === "K") {
    temperatureInCelcius = temperature -273.15;
}

if (temperatureInCelcius < 0) {
    console.log("ooh it's cold out");
} else if (temperatureInCelcius > 40 && temperatureInCelcius <= 100) {
    console.log("ooh it's hot out");
} else if (temperatureInCelcius > 100) {
    console.log("you are literally boiling");
}

//problem 5

var clothes = [
 'nothing',
 'swimsuit',
 'shorts and shirt',
 'sweater',
 'sweater + jacket',
 'heavy jacket',
 'heavy jacket and toe warmers',
 'dont go outside if you want to live'
];

var name = prompt("Hi, what is your name?");

if (temperatureInCelcius > 100) {
    console.log("Hi " + name + "! Based on the temperature, our clothing suggestion is:" + clothes[7]);
} else if (temperatureInCelcius > 40 && temperatureInCelcius <= 100) {
    console.log("Hi " + name + "! Based on the temperature, our clothing suggestion is:" + clothes[0]);
} else if (temperatureInCelcius > 30 && temperatureInCelcius <= 40) {
    console.log("Hi " + name + "! Based on the temperature, our clothing suggestion is:" + clothes[1]);
} else if (temperatureInCelcius > 20 && temperatureInCelcius <= 30) {
    console.log("Hi " + name + "! Based on the temperature, our clothing suggestion is:" + clothes[2]);
} else if (temperatureInCelcius > 15 && temperatureInCelcius <= 20) {
    console.log("Hi " + name + "! Based on the temperature, our clothing suggestion is:" + clothes[3]);
} else if (temperatureInCelcius > 10 && temperatureInCelcius <= 15) {
    console.log("Hi " + name + "! Based on the temperature, our clothing suggestion is:" + clothes[4]);
} else if (temperatureInCelcius > 0 && temperatureInCelcius <= 10) {
    console.log("Hi " + name + "! Based on the temperature, our clothing suggestion is:" + clothes[5]);
} else {
    console.log("Hi " + name + "! Based on the temperature, our clothing suggestion is:" + clothes[6]);
}

//problem 6