console.log("hello script js");
// This converts fahrenheit to celsius.
var calculateCelsius = function(fah) {
    return (fah - 32) * 5/9;
}

// This converts fahrenheit to kelvin.
var calculateKelvin = function(fah) {
    return (fah - 32) * 5/9 + 273.15;
}

// // This converts celsius to fahrenheit.
// var calculateFahrenheit = function(celsius) {
//     return (celsius * 9/5) + 32;
// }
// // This converts celsius to kelvin.
// var calculateKelvin = function(celsius) {
//     return (celsius + 273.15);
// }
// // This converts kelvin to fahrenheit.
// var calculateFahrenheit = function(kelvin) {
//     return (kelvin - 273.15) * 9/5 + 32;
// }
// // This converts kelvin to celsius.
// var calculateCelsius = function(kelvin) {
//     return (kelvin - 273.15);
// }




var inputHappened = function(currentInput){
  console.log( currentInput );
  var num = parseInt(currentInput);

  var output = "The temperature is "+calculateKelvin(num)+"K & "+calculateCelsius(num)+"C";
  return output;
};