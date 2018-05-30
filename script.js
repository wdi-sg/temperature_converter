var temperatureInFahr = prompt("What's the temp today(In Fahrenheit)?");

var deg = ((temperatureInFahr-32)*5/9);
var kel = ((temperatureInFahr-32)*5/9) + 273.15;

console.log(deg);
console.log(kel);

document.getElementById('deg').innerHTML = deg;
document.getElementById('kel').innerHTML = kel;