console.log("hello script js");

var inputHappened = function (currentInput) {
  if (isNaN(currentInput)) {
    output = "please enter a numerical value!";
  } else {
    var celsius = (currentInput - 32) * (5 / 9);
    var kelvin = celsius + 273.15;
    console.log(currentInput);
    var output = "Temp in celsius is: " + celsius + " Temp in kelvin is: " + kelvin;
  }
  return output;
};
