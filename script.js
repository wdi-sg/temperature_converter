console.log("hello script js");

document.querySelector('#output').innerText = "Please provide a temperature in Fahrenheit"

var inputHappened = function(currentInput){
  console.log( currentInput );
  if (isNaN(parseInt(currentInput))){
    var output = "Please provide a number";
    return output;
  } else {
    var celsiusConversion = (currentInput - 32) / 1.8;
    var output = currentInput + " Degrees Fahrenheit is " + celsiusConversion + " Degrees Celsius";
    return output;
  }
};