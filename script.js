// script.js

var temperatureInFar = prompt("What is the temperature in Farenheit now?"); //gets F temp in numbers
var temparatureInCel = (temperatureInFar - 32) * 5 / 9; //formula
var temperatureinKel = ((temperatureInFar - 32) * 5 / 9) + 273.15; //formula
var temps = []; //empty array to store values


console.log(temparatureInCel + "C");
console.log(temperatureinKel + "K");
alert(`the temperature in Celsius is ${temparatureInCel}C. The temperature in Kelvin is ${temperatureinKel}K. `); // how to line break without /n?

//PART 2
var temperature = prompt("What is the temperature now?");
var temperatureUnit = prompt("is the temp given in Celsius, Kelvin or Fahrenheit. Note: Only type C, K or F! ");
var startTemps = temperature + temperatureUnit;
temps.push(startTemps);

if (temperatureUnit === "F") {
    temparatureInCel = (temperature - 32) * 5 / 9;
    temperatureinKel = ((temperature - 32) * 5 / 9) + 273.15;
    alert(`the temperature in Celsius is ${temparatureInCel}C. The temperature in Kelvin is ${temperatureinKel}K. `);

    var tempsCel = (temparatureInCel + "C");
    var tempsKel = (temperatureinKel + "K");
    temps.push(tempsCel);
    temps.push(tempsKel);

    if (temparatureInCel > 100) {
        alert("You are literally boiling!");
    } else if (temparatureInCel > 40) {
        alert("ooh its hot out!");
    } else {
        alert("ooh its cold out!");
    }; //use C to determine conditional

}; //BLOCK SCOPE FOR F to C and K. Reassign var value from top

if (temperatureUnit === "C") {
    temperatureinKel = Number(temperature) + 273.15; //to check, why does temperature in this section cats value together without Number()
    temperatureInFar =(temperature * 9 / 5) + 32;
    alert(`the temperature in Fahrenheit is ${temperatureInFar}F. The temperature in Kelvin is ${temperatureinKel}K. `);

    var tempsKel = (temperatureinKel + "K");
    var tempsFar = (temperatureInFar + "F");
    temps.push(tempsKel);
    temps.push(tempsFar);

    if (temperature > 100) {
        alert("You are literally boiling!");
    } else if (temperature > 40) {
        alert("ooh its hot out!");
    } else {
        alert("ooh its cold out!");
    }; //use C to determine conditional, there is no conversion so just use temp var

}; // BLOCKSCOPE for C to F and K. Reassign var value from top

if (temperatureUnit === "K") {
    temparatureInCel = temperature - 273.15;
    temperatureInFar = ((temperature - 273.15) * 9 / 5) + 32;
    alert(`the temperature in Kelvin is ${temperatureInFar}F. The temperature in Celsius is ${temparatureInCel}C. `);

    var tempsCel = (temparatureInCel + "K");
    var tempsFar = (temperatureInFar + "F");
    temps.push(tempsCel);
    temps.push(tempsFar);

    if (temparatureInCel > 100) {
        alert("You are literally boiling!");
    } else if (temparatureInCel > 40) {
        alert("ooh its hot out!");
    } else {
        alert("ooh its cold out!");
    }; //use C to determine conditional

}; // BLOCKSCOPE for K to F and C. Reassign var value from top

//PART 3
// array for temp is kept at the top
// push  temp at part 2
//
console.log(temps);

//PART 4
//PART 4 Conditionals are nested in Part 2