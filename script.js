//Part 1
var tempInFahrenheit = prompt("Enter a temperature in Fahrenheit:");
console.log( "Temperature in Fahrenheit: " + tempInFahrenheit );

//Formulae: Fahrenheit to Celsius/Kelvin
let tempInCelsius = (tempInFahrenheit - 32) * 5/9;
let tempInKelvin = tempInCelsius + 273.15;

console.log("Temperature in Celsius: " + tempInCelsius);
console.log("Temperature in Kelvin: " + tempInKelvin);


//Part 2
var temperature = prompt("Enter a temperature. This should be a numerical value that represents degrees.");
var temperatureUnit = prompt("Enter the temperature unit: 'Fahrenheit', 'Celsius', or 'Kelvin'.");

if (temperatureUnit == 'Fahrenheit') {
    alert(temperature + " \xB0 F = " + tempInCelsius + " \xB0C = " + tempInKelvin + " K.");
} else if (temperatureUnit == 'Celsius') {
    let tempInCelsius = temperature;
    let celsiusToFahrenheit = (tempInCelsius * 9/5) + 32;
    let tempInKelvin = (parseInt(tempInCelsius) + 273.15); //How do I do this?
    alert(tempInCelsius + " \xB0C = " + celsiusToFahrenheit + "\xB0 F = " + tempInKelvin + "K.");
} else if (temperatureUnit == 'Kelvin') {
    let tempInKelvin = temperature;
    let kelvinToCelsius = tempInKelvin - 273.15;
    let kelvinToFahrenheit = (tempInKelvin - 273.15) * 9/5 + 32;
    alert(tempInKelvin + "K = " + kelvinToCelsius + "\xB0C = " + kelvinToFahrenheit + "\xB0 F.")
};


//Part 3


//Part 4
if (tempInCelsius < 0) {
    console.log("Ooh, it's cold out!");
} else if (tempInCelsius > 100) {
    console.log("OMG! You're literally boiling.");
} else if (tempInCelsius > 40) {
    console.log("Ooh, it's hot out!");
};