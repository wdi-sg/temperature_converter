//use the special prompt method to get input from the user

/**
var userInput = prompt("What's your name?");

alert("Hi " + userInput );
**/

//Part 1: Prompt the user for a starting `temperatureInFahr`. This should be a numerical value that represents degrees in fahrenheit.
// After receiving input it should log that same temperature in both Kelvin and Celsius.

var tempInFahr = prompt("What is the current temperature in fahrenheit?");

var tempInKel = Math.round((tempInFahr - 32) * 5/9 + 273.15);

var tempInCel = Math.round((tempInFahr - 32) * 5/9);

alert ("You have stated that the current temperature in fahrenheit is " + tempInFahr + " degrees Fahrenheit.");
alert ("The current temperature in Kelvin is "+ tempInKel + " degrees Kelvin.");
alert ("The current temperature in Celsius is "+ tempInCel + " degrees Celsius.");

//Part 2: Prompt the user for a starting `temperature`. This should be a numerical value that represents degrees.
//Prompt the user for a starting `temperatureUnit`. This will represent either Fahrenheit, Celsius, or Kelvin.
//The application should print out the user-submitted temperature in the two remaining units.

var temp = prompt("What is the current temperature?");
var tempUnit=prompt("Are you using Fahrenheit(F), Kelvin(K), or Celsius(C)?");
var tempSubmit=temp + " degrees " + tempUnit;

alert ("You have stated that the current temperature is "+ tempSubmit+".");
var temps = [];//Solution starts here for Part 3
temps.push(tempSubmit);

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

//Part 3: Use an array to store and access the user-submitted and converted temperatures.
//var temps = [ STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2 ];

temps.push(tempCon1);
temps.push(tempCon2);
alert(temps);
//are we storing multiple sets of data?

//Part 4: If the temperature is below 0 also print out a message like "ooh it's cold out".
//If the temperature is above 40 also print out a message like "ooh it's hot out".
//If the temperature is above 100 print out a message like "your literally boiling".

if (temp<0) {
    alert("Oh it's cold out!");
} else if (temp>=0 && temp<=40) {
    alert("The weather is fine");
} else if (temp>40 && temp<=100) {
    alert("Oh its hot!");
} else {
    alert("You are boiling!!");
}

//Part 5: Also prompt the user for their name. When you output the result, suggest the type of clothing they should wear from an array of values:

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
//there are 8 options which will keep you warmer if you go down the list

var suggest

if (temp<0) {
    var suggest = clothes[6];
} else if (temp>=0 && temp<=40) {
    var suggest = clothes[2];
} else if (temp>40 && temp<=100) {
    var suggest = clothes[1];
} else {
    var suggest = clothes[0];
};
//too dependent on if else

var userName = prompt("What's your name?");

alert("Hi " + userName +", you should wear " + suggest +" today.");
//How to customise above alert to take into account option 7?

//Part 6: Use a for or while loop to print out the conversion results for each temperature. It's OK if you need to simplify your `console.log` statements and remove strings.

for (var i = 0; i < temps.length; i++) {
    alert("The temperature is"+ temps[i] + ".");
}

//Part 7: Using loops, create an interface that continues to ask the user for temp conversions until the user requests to stop.
