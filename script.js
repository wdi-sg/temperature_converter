/*var temperatureInFahr = prompt ("What is your temperature now?");
var Celsius = 5/9 * (temperatureInFahr - 32);
var Kelvin = 5/9 * (temperatureInFahr - 32) + 273;

console.log(Celsius + " " + "Celsius");
console.log(Kelvin + " " + "Kelvin");
*/
var temperature = prompt("What your temperature in degrees");
var temperatureUnit = prompt("Fahrenheit, Celsius or Kelvin");


if (temperatureUnit="Celsius") {
console.log(9/5 * (temperature + 32) + " "+ "Fahrenheit");
console.log((temperature + 273) + " " + "Kelvin");
}

else if (temperatureUnit = "Kelvin"){
    console.log(9/5 *(temperature - 273) + 32+ " " + "Fahrenheit");
    console.log(temperature - 273+" "+"Celsius" );
}

else if (temperatureUnit = "Fahrenheit"){
    console.log((5/9 (temperature - 32) + 273)+ " " +"Kelvin");
    console.log(5/9 (temperature - 32) + " " + "Celsius");
}