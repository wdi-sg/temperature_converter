console.log("hello");

// var userInput = prompt("What is the Temp in Fahrenheit?");
// //    console.log("userInput");
// //    alert("Im saying something");

// var tempratureInFahr = userInput;

// //Formula for deg Fahr to deg Cel is (32°F − 32) × 5/9 = 0°C

// var tempInCel = Math.round(((userInput - 32)*(5/9)),1);
// //    console.log(tempInCel + " degrees celsius");

// //Formula  for  deg Fahr to Kelvin is (32°F − 32) × 5/9 + 273.15 = 273.15K

// var tempInKel = Math.round((((userInput - 32)*(5/9))+273.15),2);
// //    console.log(tempInKel + " K");

//     alert(tempInCel+" deg celsius" + " and " + tempInKel+"K");

var tempType = prompt ("F (Fahrenheit) or C (Celsius) or K (Kelvin");
var temp = prompt ("Input temperature");

if (tempType == "F") {
    var tempInCel = Math.round(((temp - 32)*(5/9)),)
    var tempInKel = Math.round((((temp - 32)*(5/9))+273.15),);
    alert(temp + "°F" + " = " + tempInCel + "°c" + " = " + tempInKel+"K");
        }

// Formula for deg Celsius to Fahrenheit is (0°C × 9/5) + 32 = 32°F
// Formula for deg Celsius to Kelvin is 0°C + 273.15 = 273.15K

    else {
        if (tempType == "C") {
        var tempInFahr = Math.round(((temp * (9/5)) + 32),);
        var tempInKel = Math.round((temp + 273.15),);
        alert(temp + "°c" + " = " + tempInFahr + "°F" + " = " + tempInKel+"K");
        }

// Formula for Kelvin to deg Celsius is 0K − 273.15 = -273.1°C
// Formula for Kelvin to deg Fahrenheit is (0K − 273.15) × 9/5 + 32 = -459.7°F

    else {
        if (tempType == "K") {
        var tempInCel = Math.round((temp - 273.15),)
        var tempInFahr = Math.round((((temp - 273.15)*(9/5))+32),);
        alert(temp + "K" + " = " + tempInCel + "°c" + " = " + tempInFahr+"°F");
        }

    }
};