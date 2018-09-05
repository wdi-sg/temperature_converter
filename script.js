/*var temperatureInFahr = prompt ("What is your temperature now?");
var Celsius = 5/9 * (temperatureInFahr - 32);
var Kelvin = 5/9 * (temperatureInFahr - 32) + 273;

console.log(Celsius + " " + "Celsius");
console.log(Kelvin + " " + "Kelvin");
*/
var temperature = parseInt (prompt("What your temperature in degrees"), 10);
var userTemperature = parseInt(temperature);
var temperatureUnit = prompt("Fahrenheit, Celsius or Kelvin");
var celsiusToFahrenhit = (9/5 * userTemperature + 32);
var celsiusToKelvin = (userTemperature + 273);
var fahrenheitToKelvin = 5/9 * (userTemperature - 32) + 273;
var fahrenheitToCelsius = 5/9 * (userTemperature - 32);
var kelvinToFahrenheit = 9/5 * (userTemperature - 273) + 32;
var kelvinToCelsius = userTemperature - 273;

if (userTemperature && (temperatureUnit = "Celsius")){
    console.log((celsiusToFahrenhit + " " + "Fahrenheit") + " " + "and" + " " + (celsiusToKelvin + " " + "Kelvin"));

     }

if (userTemperature && (temperatureUnit = "Fahrenheit")){

console.log((fahrenheitToKelvin + " " + "Kelvin") + " " + "and" + " " + (fahrenheitToCelsius + " " + "Celsius"));
}

if (userTemperature && (temperatureUnit = "Kelvin")){
    console.log((kelvinToFahrenheit + " " + "Fahrenheit") + " " + "and" + " " + (kelvinToCelsius + " " + "Celsius"));
}




// if (temperatureUnit="Celsius") {
// console.log(9/5 * (STARTING_TEMP + 32) + " "+ "Fahrenheit");
// console.log((STARTING_TEMP + 273) + " " + "Kelvin");
// }

// else if (temperatureUnit = "Kelvin"){
//     console.log(9/5 *(STARTING_TEMP - 273) + 32+ " " + "Fahrenheit");
//     console.log(tSTARTING_TEMP - 273+" "+"Celsius" );
// }

// else if (temperatureUnit = "Fahrenheit"){
//     console.log((5/9 (STARTING_TEMP - 32) + 273)+ " " +"Kelvin");
//     console.log(5/9 (STARTING_TEMP - 32) + " " + "Celsius");
// }
