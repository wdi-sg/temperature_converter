/*Goal: Create a program that can convert a temperature in Fahrenheit, Celsius or Kelvin to the other two units.

Specifications
Part 1
Your application should...
Prompt the user for a starting temperature. This should be a numerical value that represents degrees in fahrenheit.
After receiving input it should show that same temperature in both Kelvin and Celsius.*/
console.log("hello script js");


var inputHappened = function(currentInput) {
    var fahrenheit = parseInt(currentInput);
    var celsius = (fahrenheit - 32)/1.8;
    var kelvin = ((fahrenheit - 32)/1.8) + 273.15;
    var output = "The temperature is : " + celsius + " celsius" + " and " + kelvin + " kelvin";
  return output;
};

