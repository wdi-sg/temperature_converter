console.log("hello script js");

var inputHappened = function(currentInput, unitInput){
var farenheit;
var celsius;
var kelvin;
var additionalMessage = "";

var inputNumber = parseFloat(currentInput);
  if (isNaN(inputNumber)) { // validate input
    return "Please enter a valid number";
  }

// check if input is F C or K and process accordingly.
  switch (unitInput) {
    case "farenheit":
        console.log("farenheit selected");
        farenheit = inputNumber;
        celsius = ((farenheit - 32) * (5 / 9));
        kelvin = celsius + 273.15;
    break;
    case "celsius":
        console.log("celsius selected");
        celsius = inputNumber;
        kelvin = celsius + 273.15;
        farenheit = ((celsius * ( 9 / 5 )) + 32);
    break;
    case "kelvin":
        console.log('kelvin selected');
        kelvin = inputNumber;
        celsius = kelvin - 273.15
        farenheit = ((celsius * ( 9 / 5 )) + 32);
    break;
    default:
        console.log('Should not be able to get here');
  }

// Additional message if temperatures are hot or cold.
  if (celsius < 0 ) {
    additionalMessage = "ooh it's cold out";
  } else if (celsius > 40) {
    additionalMessage = "ooh it's hot out";
    if (celsius > 100) {
        additionalMessage = "you're literally boiling";
    }
  }

// convert all to strings rounding to 2 decimal places.
  var celsiusString = celsius.toFixed(2);
  var kelvinString = kelvin.toFixed(2);
  var farenheitString = farenheit.toFixed(2);

  output = `${farenheitString}°F = ${celsiusString}°C = ${kelvinString}K ${additionalMessage}`

  return output;
};