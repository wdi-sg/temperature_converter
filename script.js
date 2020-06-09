console.log("hello script js");
const converter = function (input) {
  const result =[];
  const kelvinCalculation = ((input - 32) * 5) / 9 + 273.15;
  const celciusCalculation = ((input - 32) * 5) / 9;
  const kelvin =
    "The temperature in kelvin is: " + kelvinCalculation.toFixed(2);
  const celcius =
    "The temperature in celcius is: " + celciusCalculation.toFixed(2);
  result.push(kelvin);
  result.push(celcius);
  return result;
};

const inputHappened = function (currentInput) {
   

  const output = converter(currentInput);
  return output;
};
