
var username = prompt ("What is your Name?").toUpperCase();
var temperature = parseInt ( prompt ("What is the numerical temperature value?") );
var temperatureUnit = prompt ("Is that temperature in Fahrenheit, Celsius, or Kelvin?").toLowerCase();
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

var temps = []; // [0]Starting temp, [1]Fahrenheit, [2]Celsius, [3]Kelvin

temps[0] = temperature; // Starting temp

if (temperatureUnit === "fahrenheit" || temperatureUnit === "f") {
    temps[1] = temps [0];
    temps[2] = (5/9) * (temps[0] - 32);
    temps[3] = temps[2] + 273;
} else if (temperatureUnit === "celsius" || temperatureUnit === "c") {
    temps[2] = temps[0];
    temps[3] = temps[0] + 273;
    temps[1] = (9/5) * (temps[0] + 32);
} else if (temperatureUnit === "kelvin" || temperatureUnit === "k") {
    temps[3] = temps[0];
    temps[2] = temps[0] - 273;
    temps[1] = (9/5) * (temps[0] - 273) + 32;
} else {
    alert ("Invalid input, please try again")
}

if ( temps[2] < 0 ) {
    console.log (`Ooh it's cold out! ${username}, you should probably wear a ${clothes[4]} or a ${clothes[6]}.`);
} else if ( temps[2] >= 100 ) {
    console.log (`You're literally boiling! ${username}, you should probably wear ${clothes[0]}, or just ${clothes[7]}!`);
} else if ( temps[2] >= 40 ) {
    console.log (`Ooh it's hot out! ${username}, you should probably wear ${clothes[2]}, a ${clothes[1]}, or just ${clothes[0]}!`);
}

console.log( "Temperature in Fahrenheit is " + temps[1] + "°F");
console.log( "Temperature in Celsius is " + temps[2] + "°C");
console.log( "Temperature in Kelvin is " + temps[3] + "K");



// var temperatureInFahr = prompt ("What is the temperature in Fahrenheit?");

// var temperatureInC = ( temperatureInFahr - 32 ) / 1.8;
// var temperatureInK = ( temperatureInFahr - 32 ) / 1.8 + 273.15;

// document.getElementById("fahr").innerHTML = "Temperature in Fahrenheit is " + temps[1] + " F";
// document.getElementById("celsius").innerHTML = "Temperature in Celsius is " + temps[2] + " C";
// document.getElementById("kelvin").innerHTML = "Temperature in Kelvin is " + temps[3] + " K";