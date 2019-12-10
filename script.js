console.log("hello script js");

let inputAmount = 0;

document.querySelector('#input').addEventListener('change', function (event) {
  var currentInput = event.target.value;
  var output = inputHappened(currentInput, undefined);
  display(output);
});

var display = function (data) {
  var output = document.querySelector('#output');
  output.innerText = data;
}

var inputHappened = function (currentInput) {
  if (inputAmount === 0) {
    degree = parseInt(currentInput)
    inputAmount++
    return `Please input unit(Celsius, Fahrenheit or Kelvin) next`
  } else if (inputAmount === 1) {
    if (currentInput === "Celsius") {
      let celsius = degree
      let output = `${celsius}°C = ${9/5*celsius+32}°F = ${celsius + 273}°K`
      return output
    } else if (currentInput === "Fahrenheit") {
      let fahrenheit = degree
      let output = `${fahrenheit}°F = ${9/5*(fahrenheit-32)}°C = ${5/9*(fahrenheit + 32)}°K`
      return output
    } else if (currentInput === "Kelvin") {
      let kelvin = degree
      let output = `${kelvin}°K = ${9/5*(kelvin-273)+32}°F = ${kelvin - 273}°C`
      return output
    }
  }
}