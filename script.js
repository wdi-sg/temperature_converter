//use the special prompt method to get input from the user

/**
var userInput = prompt("What's your name?");

alert("Hi " + userInput );
**/

//Prompt the user for a starting `temperatureInFahr`. This should be a numerical value that represents degrees in fahrenheit.
// After receiving input it should log that same temperature in both Kelvin and Celsius.

var tempInFahr = prompt("What is the current temperature in fahrenheit?");

var tempInKel = Math.round((tempInFahr - 32) * 5/9 + 273.15);

var tempInCel = Math.round((tempInFahr - 32) * 5/9);

alert ("You have stated that the current temperature in fahrenheit is " + tempInFahr + " degrees Fahrenheit.");
alert ("The current temperature in Kelvin is "+ tempInKel + " degrees Kelvin.");
alert ("The current temperature in Celsius is "+ tempInCel + " degrees Celsius.");

//Prompt the user for a starting `temperature`. This should be a numerical value that represents degrees.
//Prompt the user for a starting `temperatureUnit`. This will represent either Fahrenheit, Celsius, or Kelvin.
//The application should print out the user-submitted temperature in the two remaining units.

var temp = prompt("What is the current temperature?");
var tempUnit=prompt("Are you using Fahrenheit(F), Kelvin(K), or Celsius(C)?");

alert ("You have stated that the current temperature is " + temp + " degrees " + tempUnit +".");

//How to DRY?
/**
if (tempUnit === "F") {
    var tempInKel2 = Math.round((temp - 32) * 5/9 + 273.15);
    var tempInCel2 = Math.round((temp - 32) * 5/9);
    alert ("The current temperature in Kelvin is "+ tempInKel2 + " degrees Kelvin.");
    alert ("The current temperature in Celsius is "+ tempInCel2 + " degrees Celsius.");
} else if (tempUnit === "K") {
    var tempInFahr2 = Math.round((temp - 273.15) * 9/5 + 32);
    var tempInCel2 = Math.round(temp - 273.15);
    alert ("The current temperature in Fahrenheit is "+ tempInFahr2 + " degrees Fahrenheit.");
    alert ("The current temperature in Celsius is "+ tempInCel2 + " degrees Celsius.");
} else if (tempUnit === "C"){
    var tempInFahr2 = Math.round(temp * 9/5 + 32);
    var tempInKel2 = Math.round(temp + 273.15);
    alert ("The current temperature in Fahrenheit is "+ tempInFahr2 + " degrees Fahrenheit.");
    alert ("The current temperature in Kelvin is "+ tempInKel2 + " degrees Kelvin.");
} else{
    alert ("Please choose either F, K, or C.");
};
**/

if (tempUnit === "F") {
    var tempCon1 = Math.round((temp - 32) * 5/9 + 273.15) + " degrees Kelvin";
    var tempCon2 = Math.round((temp - 32) * 5/9) + " degrees Celsius";
} else if (tempUnit === "K") {
    var tempCon1 = Math.round((temp - 273.15) * 9/5 + 32) + " degrees Fahrenheit";
    var tempCon2 = Math.round(temp - 273.15) + " degrees Celsius";
} else if (tempUnit === "C"){
    var tempCon1 = Math.round(temp * 9/5 + 32) + " degrees Fahrenheit";
    var tempCon2 = Math.round(temp += (273.15*1)) + " degrees Kelvin";
} else{
    alert ("Please choose either F, K, or C.");
};
//tempCon2 when temp ="C"'adds 273 as a string'

alert ("The current temperature is also "+ tempCon1 + ".");
alert ("The current temperature can also be "+ tempCon2 + ".");
//how to remove alert if tempUnit is not C, K, or F.

