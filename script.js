// script.js

var temperatureInFar = prompt("What is the temperature in Farenheit now?"); //gets F temp in numbers
var temparatureInCel = (temperatureInFar - 32) * 5 / 9; //formula
var temperatureinKel = ((temperatureInFar - 32) * 5 / 9) + 273.15; //formula

console.log(temparatureInCel + "C");
console.log(temperatureinKel + "K");
alert(`the temperature in Celsius is ${temparatureInCel}C. The temperature in Kelvin is ${temperatureinKel}K. `); // how to line break without /n?