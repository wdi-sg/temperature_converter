var startingTemp = prompt ("whats the temperature")
var temperatureUnit = prompt ("Fahrenheit, Celsius, Kelvin?")
var num1= parseInt(startingTemp);

if (temperatureUnit === "Kelvin") {
    console.log (num1 -  273.15 * 9/5 + 32 + "Fahrenheit");
    console.log (num1 - 273.15 + "Celsius");
}

else if (temperatureUnit === "Fahrenheit") {
    console.log ((num1 - 32) * 5/9 + "Degree Celsius")
    console.log ((num1 -32) * 5/9 + 273.15 + "Kelvin")
}

else if (temperatureUnit ==="Celsius"){
  console.log ((num1 * 9/5) + 32 + "Fahrenheit")
  console.log (num1 +273.15 + "Kelvin");

}






