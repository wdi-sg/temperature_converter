
//currentInput = fahrenheitTemperature
var inputHappened = function(currentInput) {
    console.log(currentInput);

//const celciusTemperature = formula used
//returns an integer
    const celciusTemperature = (currentInput - 32) * (5/9);
    var celciusTemperatureInteger = parseInt(celciusTemperature);
    console.log(celciusTemperatureInteger);

     var kelvinTemperature = (celciusTemperatureInteger) + 273.15;
     console.log(kelvinTemperature);

    var output = [celciusTemperatureInteger + " Celsius" + ", " + kelvinTemperature + " Kelvin"];
    return output;
}
inputHappened(70);