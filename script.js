console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  var outputC = (currentInput - 32) * 5/9
  var outputK = outputC + 273.15;
  var totalOutput = currentInput + " F is " + outputC + " celsius which is " + outputK + " Kelvin."
  return totalOutput ;
};