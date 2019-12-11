console.log("hello script js");
//currentInput is from the text box
//set new var fTemp with parseInt
//set new var cTemp with formula
//set new var kTemp with formula
//output "Temperature is "




var inputHappened = function(currentInput){
  var fTemp = parseInt(currentInput);
  var cTemp = (fTemp - 32) * 5/9;
  var kTemp = (fTemp - 32) * 5/9 + 273.15;
  var output = ("Temperature in Celsius: "+ cTemp + "\n" +"Temperature in Kelvin: " + kTemp);
  return output;
};