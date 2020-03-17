console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  var kelvin = (currentInput * 459.67)/ (5/9)
  var celsius = (currentInput - 32) / 1.8
  var output = currentInput + " \xB0F" + " = " + celsius + " \xB0C" + " = " + kelvin + "K"
  return output;