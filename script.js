console.log("hello");

var userInput = prompt("What is the Temp in Fahrenheit?");
    console.log("userInput");

//    alert("Im saying something");

var tempratureInFahr = userInput;

//Formula for deg Fahr to deg Cel is (32°F − 32) × 5/9 = 0°C

var tempInCel = Math.round(((userInput - 32)*(5/9)),1);
//    console.log(tempInCel + " degrees celsius");

//Formula  for  deg Fahr to Kelvin is (32°F − 32) × 5/9 + 273.15 = 273.15K

var tempInKel = Math.round((((userInput - 32)*(5/9))+273.15),2);
//    console.log(tempInKel + " K");

    alert(tempInCel+"deg celsius" + " and " + tempInKel+"K");