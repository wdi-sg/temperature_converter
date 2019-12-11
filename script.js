
//currentInput = fahrenheitTemperature
var inputHappened = function(currentInput) {
    console.log(currentInput);

// function clickSelectUnitBtn() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

if (isNaN(currentInput)) {
    return output = "Invalid input, try again!"
    }
else {
//const celciusTemperature = formula used
//returns an integer
    const celciusTemperature = (currentInput - 32) * (5/9);
    var celciusTemperatureInteger = parseInt(celciusTemperature);
    console.log(celciusTemperatureInteger);

     var kelvinTemperature = (celciusTemperatureInteger) + 273.15;
     console.log(kelvinTemperature);

    var output = [celciusTemperatureInteger + "°C" + ", " + kelvinTemperature + "K"];
    return output;
    }
};

// Prompt the user for a starting temperature. This should be a numerical value that represents degrees.
// Prompt the user for a starting temperatureUnit. This will represent either Fahrenheit, Celsius, or Kelvin.
// The application should print out the user-submitted temperature in the two remaining units.