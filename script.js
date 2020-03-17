var inputHappened = function(currentInput){
    var dropDownValue = document.getElementById("unit");
    var selectedUnit = dropDownValue.options[dropDownValue.selectedIndex].text;
if (selectedUnit === "Fahrenheit"){
  var inKelvin = (((parseInt(currentInput))+459.67)*(5/9));
  console.log(inKelvin)
  var inCelcius = (((parseInt(currentInput)) - 32)*(5/9));
  console.log(inCelcius);

  var output = "Converted to Kelvin is: " + inKelvin + " and converted to celcius is: " + inCelcius;
  return output;
}else if (selectedUnit === "Celcius"){
  var cToK = ((parseInt(currentInput))+273.15);
  console.log(cToK);
  var cToF = ((parseInt(currentInput))*(9/5)+32);
  console.log(cToF);

  var output = "Converted to Kelvin is: " + cToK + " and converted to Fahrenheit is: " + cToF;
  return output;
}else {
  var kToC = ((parseInt(currentInput))-273.15);
  console.log(kToC);
  var kToF = ((parseInt(currentInput))*(9/5)-459.67);
  console.log(kToF);

  var output = "Converted to Kelvin is: " + kToC + " and converted to Fahrenheit is: " + kToF;
  return output;
}
};

/*code for part 1 as below.

console.log("hello script js");

var inputHappened = function(currentInput){
  var inKelvin = (((parseInt(currentInput))+459.67)*(5/9));
  console.log(inKelvin)
  var inCelcius = (((parseInt(currentInput)) - 32)*(5/9));
  console.log(inCelcius);
  var output = "Converted to Kelvin is: " + inKelvin + " and converted to celcius is: " + inCelcius;
  return output;
};
*/