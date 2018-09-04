// Part 1
// var temperatureInFahr = prompt("Please input temperature in Fahrenheit");
// var temperatureInKelvin = ( (5/9) * (temperatureInFahr - 32) )+ 273;
// var temperatureInCelsius = (5/9) * (temperatureInFahr - 32);

// console.log("User input: " + temperatureInFahr + " Fahrenheit.");
// console.log("The temperature is " + temperatureInKelvin + " Kelvin.");
// console.log("The temperature is " + temperatureInCelsius + " Celsius.");

// Part 2
var temperature = parseInt(prompt("Please input temperature"));
var temperatureUnit = prompt("Please input the temperature unit (Fahrenheit, Celsius, or Kelvin.)");

var temperatureInFahr;
var temperatureInKelvin;
var temperatureInCelsius;

if (temperatureUnit === "Fahrenheit"){
  temperatureInKelvin = ( (5/9) * (temperature - 32) )+ 273;
  temperatureInCelsius = (5/9) * (temperature - 32);
  console.log(temperature + "\xB0F = " + temperatureInCelsius + "\xB0C = " + temperatureInKelvin + "K");
}
else if (temperatureUnit === "Celsius"){
  temperatureInKelvin = temperature + 273;
  temperatureInFahr = ((9/5) * temperature) + 32;
  console.log(temperature + "\xB0C = " + temperatureInFahr + "\xB0F = " + temperatureInKelvin + "K");
}
else if (temperatureUnit === "Kelvin"){
  temperatureInFahr = (9/5) *  (temperature - 273) + 32;
  temperatureInCelsius = temperature -273;
  console.log(temperature + "K = " + temperatureInCelsius + "\xB0C = " + temperatureInFahr + "\xB0F" );
}
else{
  console.log("Error: Invalid temperature unit input");
}