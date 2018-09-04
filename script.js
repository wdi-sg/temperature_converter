// Part 1
// var temperatureInFahr = prompt("Please input temperature in Fahrenheit");
// var temperatureInKelvin = ( (5/9) * (temperatureInFahr - 32) )+ 273;
// var temperatureInCelsius = (5/9) * (temperatureInFahr - 32);

// console.log("User input: " + temperatureInFahr + " Fahrenheit.");
// console.log("The temperature is " + temperatureInKelvin + " Kelvin.");
// console.log("The temperature is " + temperatureInCelsius + " Celsius.");

// Part 2
// var temperature = parseInt(prompt("Please input temperature"));
// var temperatureUnit = prompt("Please input the temperature unit (Fahrenheit, Celsius, or Kelvin.)");

var temperatureInFahr;
var temperatureInKelvin;
var temperatureInCelsius;

// if (temperatureUnit === "Fahrenheit"){
//   temperatureInKelvin = ( (5/9) * (temperature - 32) )+ 273;
//   temperatureInCelsius = (5/9) * (temperature - 32);
//   console.log(temperature + "\xB0F = " + temperatureInCelsius + "\xB0C = " + temperatureInKelvin + "K");
// }
// else if (temperatureUnit === "Celsius"){
//   temperatureInKelvin = temperature + 273;
//   temperatureInFahr = ((9/5) * temperature) + 32;
//   console.log(temperature + "\xB0C = " + temperatureInFahr + "\xB0F = " + temperatureInKelvin + "K");
// }
// else if (temperatureUnit === "Kelvin"){
//   temperatureInFahr = (9/5) *  (temperature - 273) + 32;
//   temperatureInCelsius = temperature -273;
//   console.log(temperature + "K = " + temperatureInCelsius + "\xB0C = " + temperatureInFahr + "\xB0F" );
// }
// else{
//   console.log("Error: Invalid temperature unit input");
// }

// Part three
var STARTING_TEMP = parseInt(prompt("Please input temperature"));
var temperatureUnit = prompt("Please input the temperature unit (Fahrenheit, Celsius, or Kelvin.)");

function FahrIn(){
  var temps = [ STARTING_TEMP,( (5/9) * (STARTING_TEMP - 32) )+ 273,(5/9) * (STARTING_TEMP - 32)  ];
  console.log(temps[0] + "\xB0F = " + temps[2] + "\xB0C = " + temps[1] + "K");
  temperatureInKelvin = temps[1];
}

function CelIn(){
  var temps = [ STARTING_TEMP, STARTING_TEMP + 273, ((9/5) * STARTING_TEMP) + 32 ];
  console.log(temps[0] + "\xB0C = " + temps[2] + "\xB0F = " + temps[1] + "K");
  temperatureInKelvin = temps[1];
}

function KelIn(){
  var temps = [ STARTING_TEMP, (9/5) * (STARTING_TEMP - 273) + 32, STARTING_TEMP - 273];
  console.log(temps[0] + "K = " + temps[2] + "\xB0C = " + temps[1] + "\xB0F" );
  temperatureInKelvin = temps[0];
}

if (temperatureUnit === "Fahrenheit"){
    FahrIn();
  }
  else if (temperatureUnit === "Celsius"){
    CelIn();
  }
  else if (temperatureUnit === "Kelvin"){
    KelIn();
  }
  else{
    console.log("Error: Invalid temperature unit input");
  }