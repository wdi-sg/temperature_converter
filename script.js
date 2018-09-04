

var temperature = parseInt ( prompt ("What is the numerical temperature value?") );
var temperatureUnit = prompt ("Is that temperature in Fahrenheit, Celsius, or Kelvin?");

if (temperatureUnit === "Fahrenheit") {
    var temperatureInFahr = temperature;
    var temperatureInC = (5/9) * (temperature - 32);
    var temperatureInK = temperatureInC + 273;
} else if (temperatureUnit === "Celsius") {
    var temperatureInC = temperature;
    var temperatureInK = temperature + 273;
    var temperatureInFahr = (9/5) * (temperature + 32);
} else if (temperatureUnit === "Kelvin") {
    var temperatureInK = temperature;
    var temperatureInC = temperature - 273;
    var temperatureInFahr = (9/5) * (temperature - 273) + 32;
} else {
    alert ("Invalid input, please try again.")
}


// var temperatureInFahr = prompt ("What is the temperature in Fahrenheit?");

// var temperatureInC = ( temperatureInFahr - 32 ) / 1.8;
// var temperatureInK = ( temperatureInFahr - 32 ) / 1.8 + 273.15;


document.getElementById("fahr").innerHTML = "Temperature in Fahrenheit is " + temperatureInFahr + " F";
document.getElementById("celsius").innerHTML = "Temperature in Celsius is " + temperatureInC + " C";
document.getElementById("kelvin").innerHTML = "Temperature in Kelvin is " + temperatureInK + " K";

console.log( "Temperature in Fahrenheit is " + temperatureInFahr + " F");
console.log( "Temperature in Celsius is " + temperatureInC + " C");
console.log( "Temperature in Kelvin is " + temperatureInK + " K");
