
// var temperatureInFahr = prompt("What is your temperature?");
// console.log( temperatureInFahr * 9/5 +32 );

var startingTemp = prompt("Please key in temperature");
var temperatureUnit = prompt("Enter Fahrenheit, Celsius, or Kelvin ")
var num1= parseInt (startingTemp)

if(temperatureUnit ==="kelvin"){
    console.log(num1 - 273.15 * 9/5 + 32 + "Fahrenheit");
    console.log(num1 - 273.15 + "Celsius");
}

else if(temperatureUnit === "Fahrenheit"){
    console.log((num1 - 32) * 5/9 + "Celsius");
    console.log((num1 - 32) * 5/9 + 273.15 + "Kelvin");
}

else if(temperatureUnit ==="Celsius"){
    console.log((num1 * 9/5) + 32 + "Fahrenheit");
    console.log(num1 + 273.15 + "kelvin");
}