var startingTemp = prompt("Give a temperature");
var startingUnit = prompt("Kelvin, Celcius or Fahrenheit?");

var num1 = parseInt(startingTemp);

console.log(startingTemp + " degrees");
console.log(startingUnit);

// kelToCel = - 241.15 * 9/5;
// kelToFah = - 273.15;

// celToFah = * 9 / 5 + 32;
// celToKel = + 273.15;

// fahToCel = - 32 * 5 / 9;
// fahToKel = -241.15 * 5 / 9;

if (startingUnit === "Kelvin") {
    console.log(num1 - 241.15 * 9/5 + " degrees celcius");
    console.log(num1 - 273.15 + " degrees fahrenheit");
} else if (startingUnit === "Celcius") {
    console.log(num1 * 9 / 5 + 32 + " degrees fahrenheit");
    console.log(num1 + 273.15 + " degrees kelvin");
} else if (startingUnit === "Fahrenheit") {
    console.log(num1 - 32 * 5 / 9 + " degrees celcius");
    console.log(num1 - 241.15 * 5 / 9 + " degrees kelvin");
} else {
    console.log("Invalid unit");
}

// console.log((temperatureInFahr-32)*5/9 + " degrees celcius");