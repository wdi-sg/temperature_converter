
/*
var temperatureInFahr = prompt("Enter the temperature in Fahrenheit");

var temperatureInCelsius = ((temperatureInFahr - 32) / 1.8);
console.log(temperatureInCelsius);

var temperatureInKelvin = (temperatureInCelsius + 273.15);
console.log(temperatureInKelvin);
*/

// Task 2 Define formula for all possible user input (var clothes define for Task 5)

var temperature = prompt ("Please enter the temperature value");
var temperatureUnit = prompt ("Please enter fahrenheit, celsius or kelvin");
var temperatureUnit = temperatureUnit.toLowerCase();

var getFahrenheit = function() {
    if (temperatureUnit === "celsius") {
        return temperature * 1.8 + 32;
    } else if (temperatureUnit === "kelvin") {
        return ((temperature - 273.15) * 1.8 + 32)
    } else if (temperatureUnit = "fahrenheit") {
        return temperature;
    } else {
        console.log("ERROR");
    }
};

console.log(Math.floor(getFahrenheit()));

/*
if (temperatureUnit === "fahrenheit") {
    console.log("Temperature in Fahrenheit is " + temperature);
    console.log("Temperature in Celsius is " + (temperature - 32) / 1.8);
    console.log("Temperature in Kelvin is " + temperature * 8.53);
} else if (temperatureUnit === "celsius") {
    console.log("Temperature in Celsius is " + temperature);
    console.log("Temperature in Fahrenheit is " + (temperature * 1.8 + 32));
    console.log("Temperature in Kelvin is " + 273.15);
} else if (temperatureUnit === "kelvin") {
    console.log("Temperature in Kelvin is " + temperature);
    console.log("Temperature in Celsius is " + (temperature - 273.15));
    console.log("Temperature in Fahrenheit " + ((temperature - 273.15) * 1.8 + 32));
} else {
    console.log("Please enter proper temperature type")
};

// Task 4 & 5
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
var name = prompt("What is your name?")
if (temperature <= 0) {
    console.log("ooh its cold out");
    console.log(name + " "  + "you should wear " + clothes[6]);
} else if (temperature > 40 && temperature < 100) {
    console.log("ooh it's hot out");
    console.log(name + " "  + "you should wear " + clothes[2]);
} else if (temperature > 100) {
    console.log ("You are literally burning!");
    console.log(name + " "  + "you should wear " + clothes[0]);
} else {
    console.log("CRITICAL ERROR");
};
*/



