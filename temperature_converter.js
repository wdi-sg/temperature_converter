/* TEMPERATURE CONVERTER APP
Part 1 ===
1. Requires developing an application that receives user input (tempInFahr)
2. Converts the value of the user input into two other measurements (tempInDC, tempInK) */

var tempInFahr = prompt("What is the temperature in Fahrenheit?");
console.log(tempInFahr);
var tempInK = (tempInFahr - 32) * 5/9 + 273.15;
var tempInDC = (tempInFahr - 32) * 5/9;
alert("The temperature in Kelvin is " + tempInK + "K. The temperature in Celsius is " + tempInDC + " degrees Celsius.");

/* Part 4 === *** WHY CAN'T I GET IT TO PRINT THE MESSAGE??? ***
Depending on user input, print out the relevant messages: 
	If the temperature is below 0 also print out a message like "ooh it's cold out".
	If the temperature is above 40 also print out a message like "ooh it's hot out".
	If the temperature is above 100 print out a message like "your literally boiling". 
Therefore, need to prgram a function using operators to differentiate.*/

var statement = {};
if (parseInt(tempInDC) > 100) {
	statement = alert("You're literally boiling!");
} else if (parseInt(tempInDC) > 40) {
	statement = alert("Ooh it's hot out!");
} else if (parseInt(tempInDC) < 0) {
	statement = alert("Ooh it's cold out!");
} else {
	alert("That value is not valid.");
}


/* Part 2 ===
1. Require the user to input a solely numeric value for temperature (temperature).
2. Require the user to select which form of measurement the temperature was input in (temperatureUnit).
3. Convert the user's input values for temperature and temperatureUnit into its value in the other temperature measurements. */

var userValue = prompt("Please enter only the numeric value for the temperature in any measurement.")
console.log(userValue);
var userUnit = prompt("Please choose between the following measurements and key in the number of your choice. 1 for Fahrenheit; 2 for Kelvin; 3 for degrees Celsius.")
console.log(userUnit);
var temp = {};
	
	if (userUnit == 1) {
		temp = alert("It is currently " + userValue + "F. That is " + ((userValue - 32) * 5/9 + 273.15) + "K and " + ((userValue - 32) * 5/9) + "degreesC.");
	} else if (userUnit == 2) {
		temp = alert("It is currently " + userValue + "K. That is " + (userValue - 273.15) + "C and " + ((userValue - 273.15) * 9/5 + 32) + "F.");
	} else if (userUnit == 3) {
		temps = alert("It is currently " + userValue + "C. That is " + (userValue * 9/5 + 32) + "F and " + (userValue + 273.15) + "K.");
	} else {
		alert("That value is not valid.");
	}
	

/* Part 3 ===
1. Follow on from part 2 but use an array.
2. Array should be used to store user-submitted temperature and the relevant conversion.
3. Array should be used to access the values when doing console.log. */

var temps = [];

if (userUnit == 1) {
	temps = [userValue, ((userValue - 32) * 5/9 + 273.15), ((userValue - 32) * 5/9)];
} else if (userUnit == 2) {
	temps = [userValue, (userValue - 273.15), ((userValue - 273.15) * 9/5 + 32)];
} else if (userUnit == 3) {
	temps = [userValue, (userValue * 9/5 + 32), (userValue + 273.15)];
} else {
	temps = null;
}

console.log(temps);







// var temperatureInFahr = prompt("What's the temperature in Fahrenheit?");
// console.log(temperatureInFahr);

// function tempInOtherMeasurements(temperature)

// var temperatureInCelsius = (temperatureInFahr-32) * (5/9);
// var temperatureInKelvin = temperatureInCelsius + 273.15;

// alert("The temperature in celsius is "+temperatureInCelsius+"c."+" "+"While the temperature in kelvin is "+temperatureInKelvin+"k.");

// var temperature = prompt("What is the temperature in (any) degrees?")
// console.log(temperature);

// var temperatureUnit = prompt("Now what unit will this temperature take? Choose between Fahrenheit, kelvin, and celsius.");
// console.log(temperatureUnit);

// var temps = {}

// if (temperatureUnit === "Fahrenheit") {
// 	temps["Fahrenheit"] = temperature;
// 	temps["celsius"] = (temperature - 32) * (5/9);
// 	temps["kelvin"] = (temperature - 32) * (5/9) + 273.15;
// } else if (temperatureUnit === "kelvin") {
// 	temps["kelvin"] = temperature;
// 	temps["Fahrenheit"] = (temperature - 273.15) * (9/5) + 32;
// 	temps["celsius"] = temperature - 273.15;  
// } else if (temperatureUnit === "celsius") {
// 	temps["celsius"] = temperature;
// 	temps["kelvin"] = temperature + 273.15;
// 	temps["Fahrenheit"] = (temperature - 273.15) * (9/5) +32;
//  } else {
//  	alert("Invalid value");
//  };

//  console.log(temps);

//  for (var key in temps) {
//  	alert(key + ": " +temps[key]);
//  };


