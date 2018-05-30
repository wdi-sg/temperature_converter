// prompt temp in F
var tempInFar = prompt("Temperature in Fahrenheit");
//convert temp to C
var tempInCel = (tempInFar - 32) * (5 / 9)
console.log(tempInCel + " C");
//convert temp to K
var tempInKel = (tempInFar + 459.67) * (5 / 9)
console.log(tempInKel + " K");

