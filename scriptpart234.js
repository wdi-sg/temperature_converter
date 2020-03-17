console.log("hello script js");
/*
var inputHappened = function(currentInput) {
  console.log(currentInput);
  var output = "WOW TEMPERATURE";
  return output;
};
*/

var inputHappened = function(inputTemp, inputTempUnit, inputName) {
  let tempC;
  let tempF;
  let tempK;
  let output;
  if (inputTempUnit === "C") {
    tempC = inputTemp;
    tempF = tempC + 32;
    tempK = tempC + 273.2;
  } else if (inputTempUnit === "F") {
    tempC = inputTemp - 32;
    tempF = inputTemp;
    tempK = tempF + 241.2;
  } else if (inputTempUnit === "K") {
    tempC = inputTemp - 273.2;
    tempF = inputTemp - 241.2;
    tempK = inputTemp;
  }
  if (tempF < 0) {
    output =
      tempC +
      " C = " +
      tempF +
      " F = " +
      tempK +
      " K. " +
      inputName +
      " is cold, wear heavy jacket and toe warmers.";
    return output;
  } else if (tempF > 40 && tempF <= 100) {
    output =
      tempC +
      " C = " +
      tempF +
      " F = " +
      tempK +
      " K. " +
      inputName +
      " is hot, wear shorts and shirt.";
    return output;
  } else if (tempF > 100) {
    output =
      tempC +
      " C = " +
      tempF +
      " F = " +
      tempK +
      " K. " +
      inputName +
      " is boiling, wear nothing.";
    return output;
  } else {
    output = tempC + " C = " + tempF + " F = " + tempK + " K. ";
    return output;
  }
};
