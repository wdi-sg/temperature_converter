var temperatureInFahr = prompt("What is the temperature in Fahrenheit?");
console.log( "The temperature to be converted is " + temperatureInFahr + " degrees Fahrenheit." );

alert("The temperature to be converted is " + temperatureInFahr + " degrees Fahrenheit.");

//C = (F-32)/1.8
//K=((F-32)/1.8)+273.15
var outputCelsius = ((temperatureInFahr - 32)/1.8);
var outputKelvin = (outputCelsius + 273.15);
console.log("The temperature is " + outputCelsius + " degrees Celsius.");
console.log("The temperature is " + outputKelvin + " Kelvin.");

alert("The temperature is " + outputCelsius + " degrees Celsius, or " + outputKelvin + " Kelvin.");


/* When the input field receives input, convert the value from Fahrenheit to Celsius
function temperatureConverter(valNum) {
  document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
}
*/