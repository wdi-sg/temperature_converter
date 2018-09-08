// Let User to enter desired temperature and it's value
var temperature = prompt ("Please enter the temperature value");
var temperatureUnit = prompt ("Please enter fahrenheit, celsius or kelvin");

// Ignore the case, so later we won't be confused inside function with === operator
var temperatureUnit = temperatureUnit.toLowerCase();

// Defining function, return for every User output, including weird stuff with ERROR message

var convertTemp = function() {
if (temperatureUnit === "celsius") {
        var celsiusCels = "Celsius = " + temperature;
        var celsiusKelvin = "Kelvin = " + Math.floor(((temperature * 1) + 273.15));
        var celsiusFahr = "Fahrenheit = " + Math.floor(((temperature * 1.8) + 32));

console.log(celsiusCels, celsiusKelvin, celsiusFahr);

    } else if (temperatureUnit === "fahrenheit") {
        var fahrenheitFahr = "Fahrenheit = " + temperature;
        var fahrenheitKelvin = "Kelvin = " + Math.floor((temperature - 32) / 1.8 + 273.15);
        var fahrenheitCels = "Celsius = " + Math.floor((temperature - 32) / 1.8)

console.log(fahrenheitFahr, fahrenheitCels, fahrenheitKelvin);

        } else if (temperatureUnit === "kelvin") {
            var kelvinKelv = "Kelvin = " + temperature;
            var kelvinFahr = "Fahrenheit = " + Math.floor((temperature - 273.15) * 1.8 + 32);
            var kelvinCels = " Celsius = " + Math.floor(temperature - 273.15);

console.log(kelvinKelv, kelvinFahr, kelvinCels);

        }else {

console.log("Please, enter Fahrenheit, Celsius or Kelvin ")

        }
};

convertTemp();

// Logging the function with rounding the result, because some formulas make it very long


/*
if (temperatureUnit === "celsius") {
        console.log("Celsius = " + temperature + " Fahrenheit = " + (temperature * 1.8 + 32) + " Kelvin = " + ((temperature * 1) + 273.15))
var getFahrenheit = function() {
    if (temperatureUnit === "celsius") {
        return temperature * 1.8 + 32
    } else if (temperatureUnit === "kelvin") {
        return (temperature - 32) / 1.8 + 273.15
    } else if (temperatureUnit = "fahrenheit") {
        return temperature;
    } else {
        console.log("ERROR");
    }
};
var getKelvin = function() {
    if (temperatureUnit === "celsius") {
        return (temperature * 1) + 273.15;
    } else if (temperatureUnit === "fahrenheit") {
        return (temperature - 273.15) + 1.8 + 32
    } else if (temperature === "kelvin") {
        return temperature
    } else
        console.log("ERROR");
};
console.log("The temperature in Kelvin is " + Math.floor(getKelvin()));



    } else if (temperatureUnit === "celsius") {
        return temperature * 2
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



