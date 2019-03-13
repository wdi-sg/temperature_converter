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

// declare an array variable
// var temps = [];

// //prompt user for temperature input
// var temperature = prompt("What is the temperature?");

// //prompt user for temperature unit
// var temperatureUnit = prompt("What is the unit of temperature? F,C or K?");

// //append degree symbol if temperature unit is either F or C
// if(temperatureUnit === "F" || temperatureUnit === "C") {
//     var temperatureUnitWithOrWithoutDegreeSymbol = "°" + temperatureUnit;
// } else if (temperatureUnit === "K") {
//     temperatureUnitWithOrWithoutDegreeSymbol = temperatureUnit;
// }

// //initialize starting temperature based on user input
// var startingTemperature = temperature + "" + temperatureUnitWithOrWithoutDegreeSymbol;

// //if user temperature input is in F, conversion to C and K will be done
// if(temperatureUnit === "F") {
//     var temperatureInCel = (temperature - 32) * (5/9);
//     var temperatureInKel = ((temperature - 32) * (5/9) + 273.15);
//     // console.log(startingTemperature + "=" + temperatureInCel + "°C" + "=" + temperatureInKel + "K");
//     temps.push(startingTemperature, temperatureInCel, temperatureInKel);
//     console.log(temps[0], temps[1] + "°C", temps[2] + "K");
// //if user temperature input is in C, conversion to F and K will be done
// } else if(temperatureUnit === "C") {
//     var temperatureInFahr = (temperature * (9/5)) + 32 ;
//     var temperatureInKel = (temperature * 1)+ 273.15 ;
//     temps.push(startingTemperature, temperatureInFahr, temperatureInKel);
//     console.log(temps[0], temps[1] + "°F", temps[2] + "K");
// //if user temperature input is in K, conversion to C and F will be done
// } else if(temperatureUnit === "K") {
//     var temperatureInCel = temperature - 273.15;
//     var temperatureInFahr = (temperature - 273.15) * (9/5) + 32;
//     temps.push(startingTemperature, temperatureInCel, temperatureInFahr);
//     console.log(temps[0], temps[1] + "°C", temps[2] + "°F");
// }

//Part 4

//declare an array variable
// var temps = [];

// //prompt user for temperature input
// var temperature = prompt("What is the temperature?");

// //temperature check based on user's input
// if(temperature < 0) {
//     console.log("ohh it's cold out");
//     alert("ohh it's cold out");
// } else if(temperature > 40 && temperature <= 100) {
//     console.log("ohh it's hot out");
//     alert("ohh it's hot out");
// } else if(temperature > 100) {
//     console.log("your literally boiling");
//     alert("your literally boiling");
// }

// //prompt user for temperature unit
// var temperatureUnit = prompt("What is the unit of temperature? F,C or K?");

// //append degree symbol if temperature unit is either F or C
// if(temperatureUnit === "F" || temperatureUnit === "C") {
//     var temperatureUnitWithOrWithoutDegreeSymbol = "°" + temperatureUnit;
// } else if (temperatureUnit === "K") {
//     temperatureUnitWithOrWithoutDegreeSymbol = temperatureUnit;
// }

// //initialize starting temperature based on user input
// var startingTemperature = temperature + "" + temperatureUnitWithOrWithoutDegreeSymbol;

// //if user temperature input is in F, conversion to C and K will be done
// if(temperatureUnit === "F") {
//     var temperatureInCel = (temperature - 32) * (5/9);
//     var temperatureInKel = ((temperature - 32) * (5/9) + 273.15);
//     // console.log(startingTemperature + "=" + temperatureInCel + "°C" + "=" + temperatureInKel + "K");
//     temps.push(startingTemperature, temperatureInCel, temperatureInKel);
//     console.log(temps[0], temps[1] + "°C", temps[2] + "K");
// //if user temperature input is in C, conversion to F and K will be done
// } else if(temperatureUnit === "C") {
//     var temperatureInFahr = (temperature * (9/5)) + 32 ;
//     var temperatureInKel = (temperature * 1)+ 273.15 ;
//     temps.push(startingTemperature, temperatureInFahr, temperatureInKel);
//     console.log(temps[0], temps[1] + "°F", temps[2] + "K");
// //if user temperature input is in K, conversion to C and F will be done
// } else if(temperatureUnit === "K") {
//     var temperatureInCel = temperature - 273.15;
//     var temperatureInFahr = (temperature - 273.15) * (9/5) + 32;
//     temps.push(startingTemperature, temperatureInCel, temperatureInFahr);
//     console.log(temps[0], temps[1] + "°C", temps[2] + "°F");
// }

//Part 5

// //declare an array variable
// var temps = [];

// //prompt user for temperature input
// var name = prompt("What is your name?");
// var temperature = prompt("What is the temperature?");

// //initialize an array of clothes for suggestion to user
// var clothes = [
//  'nothing',
//  'swimsuit',
//  'shorts and shirt',
//  'sweater',
//  'sweater + jacket',
//  'heavy jacket',
//  'heavy jacket and toe warmers',
//  'dont go outside if you want to live'
// ];

// //temperature check based on user's input
// if(temperature < 0) {
//     //output message to user which suggest what clothes to wear based on the input temperature
//     console.log("ohh it's cold out." + "\n" + "Hi " + name + ", you should be wearing " + clothes[6]);
//     alert("ohh it's cold out." + "\n" + "Hi " + name + ", you should be wearing " + clothes[6]);
// } else if(temperature > 40 && temperature <= 100) {
//     console.log("ohh it's hot out." + "\n" + "Hi " + name + ", you should be wearing " + clothes[2]);
//     alert("ohh it's hot out." + "\n" + "Hi " + name + ", you should be wearing " + clothes[2]);
// } else if(temperature > 100) {
//     console.log("your literally boiling." + "\n" + "Hi " + name + ", " + clothes[7]);
//     alert("your literally boiling." + "\n" + "Hi " + name + ", " + clothes[7]);
// }

// //prompt user for temperature unit
// var temperatureUnit = prompt("What is the unit of temperature? F,C or K?");

// //append degree symbol if temperature unit is either F or C
// if(temperatureUnit === "F" || temperatureUnit === "C") {
//     var temperatureUnitWithOrWithoutDegreeSymbol = "°" + temperatureUnit;
// } else if (temperatureUnit === "K") {
//     temperatureUnitWithOrWithoutDegreeSymbol = temperatureUnit;
// }

// //initialize starting temperature based on user input
// var startingTemperature = temperature + "" + temperatureUnitWithOrWithoutDegreeSymbol;

// //if user temperature input is in F, conversion to C and K will be done
// if(temperatureUnit === "F") {
//     var temperatureInCel = (temperature - 32) * (5/9);
//     var temperatureInKel = ((temperature - 32) * (5/9) + 273.15);
//     // console.log(startingTemperature + "=" + temperatureInCel + "°C" + "=" + temperatureInKel + "K");
//     temps.push(startingTemperature, temperatureInCel, temperatureInKel);
//     console.log(temps[0], temps[1] + "°C", temps[2] + "K");
// //if user temperature input is in C, conversion to F and K will be done
// } else if(temperatureUnit === "C") {
//     var temperatureInFahr = (temperature * (9/5)) + 32 ;
//     var temperatureInKel = (temperature * 1)+ 273.15 ;
//     temps.push(startingTemperature, temperatureInFahr, temperatureInKel);
//     console.log(temps[0], temps[1] + "°F", temps[2] + "K");
// //if user temperature input is in K, conversion to C and F will be done
// } else if(temperatureUnit === "K") {
//     var temperatureInCel = temperature - 273.15;
//     var temperatureInFahr = (temperature - 273.15) * (9/5) + 32;
//     temps.push(startingTemperature, temperatureInCel, temperatureInFahr);
//     console.log(temps[0], temps[1] + "°C", temps[2] + "°F");
// }

//Part 6

// declare an array variable
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
    temps.push(startingTemperature, temperatureInCel, temperatureInKel);

//if user temperature input is in C, conversion to F and K will be done
} else if(temperatureUnit === "C") {
    var temperatureInFahr = (temperature * (9/5)) + 32 ;
    var temperatureInKel = (temperature * 1)+ 273.15 ;
    temps.push(startingTemperature, temperatureInFahr, temperatureInKel);

//if user temperature input is in K, conversion to C and F will be done
} else if(temperatureUnit === "K") {
    var temperatureInCel = temperature - 273.15;
    var temperatureInFahr = (temperature - 273.15) * (9/5) + 32;
    temps.push(startingTemperature, temperatureInCel, temperatureInFahr);
}

for(var i=0; i<temps.length; i++) {
    console.log(temps[i]);
}