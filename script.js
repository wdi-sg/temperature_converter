console.log("Assignment1")

// Part 1

//prompt user to give a temperature input in F
// var temperatureInFahr = prompt('What is the temperature in F?');

//Convert the temperature to degrees celsius from degrees kelvin
// var temperatureInCel = (temperatureInFahr - 32) * (5/9);

//alert the user's input in both degrees fahrenheit and celsius
// alert("userInput in F: " + temperatureInFahr + "\n" + "userInput in C: " + temperatureInCel)

// Part 2

var temperature = prompt("What is the temperature?");

var temperatureUnit = prompt("What is the unit of temperature? F,C or K?");

if(temperatureUnit === "F") {
    var temperatureInCel = (temperature - 32) * (5/9);
    var temperatureInKel = ((temperature - 32) * (5/9) + 273.15);
    var temperatureInFahr = temperature;
    console.log(temperatureInFahr + "°F" + "=" + temperatureInCel + "°C" + "=" + temperatureInKel + "K");
} else if(temperatureUnit === "C") {
    var temperatureInFahr = (temperature * (9/5)) + 32 ;
    var temperatureInKel = (temperature * 1)+ 273.15 ;
    var temperatureInCel = temperature;
    console.log(temperatureInCel + "°C" + "=" + temperatureInFahr + "°F" + "=" + temperatureInKel + "K");
} else if(temperatureUnit === "K") {
    var temperatureInCel = temperature - 273.15;
    var temperatureInFahr = (temperature - 273.15) * (9/5) + 32;
    var temperatureInKel = temperature;
    console.log(temperatureInKel + "K" + "=" + temperatureInCel + "°C" + "=" + temperatureInFahr + "°F");
}