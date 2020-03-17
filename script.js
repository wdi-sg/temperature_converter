console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  var outputCelcius = (currentInput - 32)*5/9;
  var outputKlevin = (currentInput - currentInput)*5/9+273.15;
  return "Klevin : " + outputKlevin + " and " + "Celcius :" + outputCelcius
};