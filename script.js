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

var name = prompt("What is your name?");
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

var hotClothes = [clothes[0],clothes[1],clothes[2]];
var normalClothes = [clothes[3],clothes[4]];
var coldClothes = [clothes[5], clothes[6], clothes[7]];

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

// Part 3
var STARTING_TEMP = parseInt(prompt("Please input temperature"));
var temperatureUnit = prompt("Please input the temperature unit (Fahrenheit, Celsius, or Kelvin.)");
var temperatureInFahr;
var temperatureInKelvin;
var temperatureInCelsius;

function FahrIn(){
  var temps = [ STARTING_TEMP + "\xB0F",  (5/9) * (STARTING_TEMP - 32) + 273, (5/9) * (STARTING_TEMP - 32) + "\xB0C"];
  console.log(temps[0] + " = " + temps[2] + " = " + temps[1] + "K");
  temperatureInKelvin = temps[1];

  for (var i = 0; i < temps.length; i++) {
  console.log("The temperature is " + temps[i]);
  }
}

function CelIn(){
  var temps = [ STARTING_TEMP + "C",  STARTING_TEMP + 273 , ((9/5) * STARTING_TEMP) + 32 + "\xB0F"];
  console.log(temps[0] + " = " + temps[2] + " = " + temps[1] + "K");
  temperatureInKelvin = temps[1];

  for (var i = 0; i < temps.length; i++) {
  console.log("The temperature is " + temps[i]);
  }
}

function KelIn(){
  var temps = [ STARTING_TEMP + "K",  (9/5) * (STARTING_TEMP - 273) + 32, STARTING_TEMP - 273 + "\xB0C"];
  console.log(temps[0] + " = " + temps[2] + " = " + temps[1] + "\xB0F");
  temperatureInKelvin = temps[1];

  for (var i = 0; i < temps.length; i++) {
  console.log("The temperature is " + temps[i]);
  }
}


// Part 4 & 5
function exclaimation(){
  if (temperatureInKelvin < 0){
    console.log("Ooh it's cold out, " + name + ". Consider wearing " + coldClothes[Math.floor(Math.random()*3)]);
  }
  else if (temperatureInKelvin > 100){
    console.log("You're literally boiling, " + name + ". Consider wearing " + hotClothes[Math.floor(Math.random()*3)]);
  }
  else if (temperatureInKelvin > 40){
    console.log("Ooh it's hot out, " + name + ". Consider wearing " + normalClothes[Math.floor(Math.random()*2)]);
  }
}

if (temperatureUnit === "Fahrenheit"){
  FahrIn();
  exclaimation();
}
else if (temperatureUnit === "Celsius"){
  CelIn();
  exclaimation();
}
else if (temperatureUnit === "Kelvin"){
  KelIn();
  exclaimation();
}
else{
  console.log("Error: Invalid temperature unit input");
}


