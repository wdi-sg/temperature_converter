console.log("Assignment1")

// Part 1

//prompt user to give a temperature input in F
// var temperatureInFahr = prompt('What is the temperature in F?');

//Convert the temperature to degrees celsius from degrees kelvin
// var temperatureInCel = (temperatureInFahr - 32) * (5/9);

//alert the user's input in both degrees fahrenheit and celsius
// alert("userInput in F: " + temperatureInFahr + "\n" + "userInput in C: " + temperatureInCel)

// Part 2

//prompt user to give a temperature input in F
// var temperature = prompt("What is the temperature?");

//prompt user to give a temperature unit
// var temperatureUnit = prompt("What is the unit of temperature? F,C or K?");

//If input is in F, conversion to C and K will be done
// if(temperatureUnit === "F") {
//     var temperatureInCel = (temperature - 32) * (5/9);
//     var temperatureInKel = ((temperature - 32) * (5/9) + 273.15);
//     var temperatureInFahr = temperature;
//     console.log(temperatureInFahr + "°F" + "=" + temperatureInCel + "°C" + "=" + temperatureInKel + "K");
//If input is in C, conversion to F and K will be done
// } else if(temperatureUnit === "C") {
//     var temperatureInFahr = (temperature * (9/5)) + 32 ;
//     var temperatureInKel = (temperature * 1)+ 273.15 ;
//     var temperatureInCel = temperature;
//     console.log(temperatureInCel + "°C" + "=" + temperatureInFahr + "°F" + "=" + temperatureInKel + "K");
//If input is in K, conversion to C and F will be done
// } else if(temperatureUnit === "K") {
//     var temperatureInCel = temperature - 273.15;
//     var temperatureInFahr = (temperature - 273.15) * (9/5) + 32;
//     var temperatureInKel = temperature;
//     console.log(temperatureInKel + "K" + "=" + temperatureInCel + "°C" + "=" + temperatureInFahr + "°F");
// }

//Part 3

//declare an array variable
var temps = [];

//prompt user for temperature input
var temperature = prompt("What is the temperature?");

//prompt user for temperature unit
var temperatureUnit = prompt("What is the unit of temperature? F,C or K?");

//append degree symbol if temperature unit is either F or C
if(temperatureUnit === "F" || temperatureUnit === "C") {
    var temperatureUnitWithOrWithoutDegreeSymbol = "°" + temperatureUnit;
} else if (temperatureUnit === "K") {
    temperatureUnitWithOrWithoutDegreeSymbol = temperatureUnit;
}

//initialize starting temperature based on user input
var startingTemperature = temperature + "" + temperatureUnitWithOrWithoutDegreeSymbol;

//if user temperature input is in F, conversion to C and K will be done
if(temperatureUnit === "F") {
    var temperatureInCel = (temperature - 32) * (5/9);
    var temperatureInKel = ((temperature - 32) * (5/9) + 273.15);
    // console.log(startingTemperature + "=" + temperatureInCel + "°C" + "=" + temperatureInKel + "K");
    temps.push(startingTemperature, temperatureInCel, temperatureInKel);
    console.log(temps[0], temps[1] + "°C", temps[2] + "K");
//if user temperature input is in C, conversion to F and K will be done
} else if(temperatureUnit === "C") {
    var temperatureInFahr = (temperature * (9/5)) + 32 ;
    var temperatureInKel = (temperature * 1)+ 273.15 ;
    temps.push(startingTemperature, temperatureInFahr, temperatureInKel);
    console.log(temps[0], temps[1] + "°F", temps[2] + "K");
//if user temperature input is in K, conversion to C and F will be done
} else if(temperatureUnit === "K") {
    var temperatureInCel = temperature - 273.15;
    var temperatureInFahr = (temperature - 273.15) * (9/5) + 32;
    temps.push(startingTemperature, temperatureInCel, temperatureInFahr);
    console.log(temps[0], temps[1] + "°C", temps[2] + "°F");
}