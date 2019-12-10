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
    document.querySelector('#input').setAttribute("placeholder", "Celsius/Fahrenheit/Kelvin")
    if (currentInput < 0) {
      return `Oooooh it is cold out!`
    } else if (currentInput > 40 && currentInput <= 100) {
      return `ooooooh it is hot out!`
    } else if (currentInput > 100) {
      return `you are literally boiling!`
    } else {
      return `seems like a nice day`
    }
  } else if (inputAmount === 1) {
    document.querySelector('#input').setAttribute("placeholder", "Your Name please")
    if (currentInput === "Celsius") {
      let celsius = degree
      let output = `${celsius}°C = ${9/5*celsius+32}°F = ${celsius + 273}°K`
      inputAmount++
      return output
    } else if (currentInput === "Fahrenheit") {
      let fahrenheit = degree
      let output = `${fahrenheit}°F = ${9/5*(fahrenheit-32)}°C = ${5/9*(fahrenheit + 32)}°K`
      inputAmount++
      return output
    } else if (currentInput === "Kelvin") {
      let kelvin = degree
      let output = `${kelvin}°K = ${9/5*(kelvin-273)+32}°F = ${kelvin - 273}°C`
      inputAmount++
      return output
    }
  } else if (inputAmount === 2) {
    if (degree < 0) {
      return `${currentInput}, please dont go outside if you want to live `
    } else if (degree > 40 && degree <= 100) {
      return `${currentInput}, you should wear shorts and a shirt`
    } else if (degree > 100) {
      return `${currentInput}, wear your birthday suit`
    } else {
      return `${currentInput}, best you prepare at least a sweater and/or a jacket`
    }
  }
}