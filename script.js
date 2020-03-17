console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  var input = parseInt(currentInput);

  var kelvin = (input - 32) * 5 / 9 + 273.15;
  var celsius = (input - 32) * 5 / 9;
  return `Kelvin: ${kelvin}K, Celsius: ${celsius}C`;

};