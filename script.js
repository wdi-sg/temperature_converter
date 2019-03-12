// script.js

var temperatureInFar = prompt("What is the temperature in Farenheit now?"); //gets F temp in numbers
var temparatureInCel = (temperatureInFar - 32) * 5 / 9; //formula
var temperatureinKel = ((temperatureInFar - 32) * 5 / 9) + 273.15; //formula

console.log(temparatureInCel + "C");
console.log(temperatureinKel + "K");
alert(`the temperature in Celsius is ${temparatureInCel}C. The temperature in Kelvin is ${temperatureinKel}K. `); // how to line break without /n?

//PART 2
var temperature = prompt("What is the temperature now?");
var temperatureUnit = prompt("is the temp given in Celsius, Kelvin or Fahrenheit. Note: Only type C, K or F! ");

if (temperatureUnit === "F") {
    temparatureInCel = (temperature - 32) * 5 / 9;
    temperatureinKel = ((temperature - 32) * 5 / 9) + 273.15;
    alert(`the temperature in Celsius is ${temparatureInCel}C. The temperature in Kelvin is ${temperatureinKel}K. `);
}; //BLOCK SCOPE FOR F to C and K. Reassign var value from top

if (temperatureUnit === "C") {
    temperatureinKel = Number(temperature) + 273.15; //to check, why does temparature in this section cats value together without Number()
    temperatureInFar =(temperature * 9 / 5) + 32;
    alert(`the temperature in Fahrenheit is ${temperatureInFar}F. The temperature in Kelvin is ${temperatureinKel}K. `);
}; // BLOCKSCOPE for C to F and K. Reassign var value from top

if (temperatureUnit === "K") {
    temparatureInCel = temperature - 273.15;
    temperatureInFar = ((temperature - 273.15) * 9 / 5) + 32;
    alert(`the temperature in Kelvin is ${temperatureInFar}F. The temperature in Celsius is ${temparatureInCel}C. `);
}; // BLOCKSCOPE for K to F and C. Reassign var value from top