console.log("hello script js");

var inputHappened = function(currentInput){
  var output = parseInt (currentInput);
  var outputCelsius = ((output - 32) * 5) / 9;
  var outputKelvin = (((output - 32) * 5) / 9) + 273.15;
  return "Temperature: " + output + " Farenheit, " + outputCelsius + " Celsius, " + outputKelvin + " Kelvin";
};

var convertCelsius = function(inputHappened) {
    // Deduct 32, then multiply by 5, then divide by 9

    var output = ((inputHappened - 32) * 5) / 9
    return output;

}