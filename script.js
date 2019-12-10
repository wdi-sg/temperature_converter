console.log("hello script js");

/*
C to F
Celsius = (Fahrenheit - 32) * 5 / 9.
F to C
Fahrenheit = (Celsius * 9) + 32.
K to C
Kelvin = Celsius + 273.15.
C to K
Celsius = Kelvin - 273.15.
*/

let tempF;
let tempC;
let tempK;

convertFtoC = function (currentInput) {
    tempF = currentInput;
    tempC = (tempF - 32) * 5 / 9;
    tempK = (tempC + 273.15);
    return tempC, tempK;
}

var inputHappened = function(currentInput){
    convertFtoC(currentInput);
    var output = "The temperature in Celsius is " + tempC + "C. The temperature in Kelvin is " + tempK + "K.";
  return output;
};

/*var inputHappened = function(currentInput){
  console.log( currentInput );
  var output = "";
  return output;
};*/