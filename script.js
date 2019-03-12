console.log("Temperature Converter");

//Setup
//var userInput = prompt("What's your name?");
//console.log( userInput );
//alert("Hi " + userInput + "!");

//Part 1
// var temperatureInFahr = prompt("What's the temperature in Fahrenheit?");
// var fahrtocelsius = (temperatureInFahr-32*(5/9));
// var fahrtokelvin = (temperatureInFahr-32*(5/9)+273.15);
// console.log(fahrtocelsius);
// console.log(fahrtokelvin);
// //if didn't define variable, then put below instead
// //console.log(temperatureInFahr-32*(5/9)+ " Celsius");
// //console.log(temperatureInFahr-32*(5/9)+273.15 + " Kelvin");
// alert("The conversion is " + fahrtocelsius + " Celsius" + " or " + fahrtokelvin + " Kelvin");

//Part 2
var startingTemp = prompt("What's the starting temperature?");
var startingTempFloat = parseFloat(startingTemp);
var temperatureUnit = prompt("What's the temperature unit?");

//fahrenheit conversions
var fahrtocelsius = (startingTempFloat-32*(5/9));
var fahrtokelvin = (startingTempFloat-32*(5/9)+273.15);

//celsius conversions
var celsiustofahr = (startingTempFloat*(9/5)+32);
var celsiuskelvin = (startingTempFloat+273.15);

//kelvin conversions
var kelvintofahr = ((startingTempFloat-273.15)*(9/5)+32);
var kelvintocelsius = (startingTempFloat-273.15);

if (temperatureUnit == "Fahrenheit") {
  alert("The conversion is " + fahrtocelsius + " Celsius" + " or " + fahrtokelvin + " Kelvin")
} else if (temperatureUnit == "Kelvin") {
  alert("The conversion is " + kelvintocelsius + " Celsius" + " or " + kelvintofahr + " Fahrenheit");
} else if (temperatureUnit == "Celsius") {
  alert("The conversion is " + celsiuskelvin + " Kelvin" + " or " + celsiustofahr + " Fahrenheit");
}
  else {
    alert("Key in Fahrenheit, Kelvin or Celsius for Temperature Unit");
}