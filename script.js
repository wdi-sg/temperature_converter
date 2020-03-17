console.log("hello script js");
/*var inputHappened = function(currentInput){
  console.log( currentInput );
  var output = "WOW TEMPERATURE";
  return output;
};*/


//Part 1
alert("Input temperature (in Fahrenheit)");
var inputHappened = function(currentInput) {
    console.log(currentInput);
    var tempFahrenheit = parseFloat(currentInput);
    var tempCelsius = (tempFahrenheit - 32) * (5 / 9);
    tempCelsius = tempCelsius.toFixed(2);
    tempKelvin = parseFloat(tempCelsius) + 273.15;
    tempKelvin = tempKelvin.toFixed(2);
    var output = "Temperature is " + tempCelsius + " Degrees Celsius or " + tempKelvin + " Kelvin";

    return output;
};


// //Part 2
// alert("Input temperature (numerical value)");
// var temperature;
// var temperatureUnit;
// var inputHappened = function(currentInput) {
//     console.log(currentInput);
//     temperature = parseFloat(currentInput);
// alert("Input temperature unit (F/C/K)");
// var inputHappened2 = function(currentInput) {
//     console.log(currentInput);
//     temperatureUnit = currentInput;
// var output = temperature+temperatureUnit;
// return output;
// }};