console.log("hello script js");

var output;
var temperatureKelvin;
var temperatureCelsius;

var inputFahrenheit;
var inputKelvin;
var inputCelsius;

var num;

var userUnit = document.getElementById("unitInput").innerText;

var inputHappened = function(currentInput){
// part 1 done and dusted
  console.log( currentInput );
  if (isNaN(currentInput) === true) {
    output = "Invalid, only numbers please!";
  } else if (isNaN(currentInput) === false)  {
    temperatureKelvin = currentInput + 273.15;
    temperatureCelsius = (currentInput - 32) * 5 / 9;
    output = "Temperature in Kelvin: " + temperatureKelvin + "\n"  + "Temperature in Celsius: " + temperatureCelsius;

        num = currentInput;
        console.log(num);
  }
  return output;
};

// calculating part 2
    var temperatureUnit = function(unitInput) {
        var output;
        if (isNaN(unitInput) === false) {
            output = "Invalid, only characters please!";
        } else if (unitInput === "fahrenheit") {
            output = num + "F " + "C " + ((num - 32) * 5 / 9 + 273.15) + "K";
        } else if (unitInput === "celcius") {
            output = num + "C " + ((num * 9 / 5) + 32) + "F " + (num + 273.15) + "K";
        } else if (unitInput === "kelvin") {
            output = num + "K " + (num - 273.15) + "C " + ((num - 273.15) * 9 / 5 + 32) + "F";
        }
        return output;
    }