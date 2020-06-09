function overwrite(text) { // Overwriting the text
  const output = document.getElementById('output');
  output.innerHTML = text;
}

function append(text) { // Appending text
  const output = document.getElementById('output');
  output.innerHTML = output.innerHTML + text;
}

function resultsForFah(degree, kelvin) {
  const output = document.getElementById('output');
  output.innerHTML = degree + " degrees " + kelvin + " kelvin";
}

function resultsForDegrees(fahrenheit, kelvin) {
  const output = document.getElementById('output');
  output.innerHTML = fahrenheit + " fahrenheit " + kelvin + " kelvin";
}

function resultsForKelvin(fahrenheit, degrees) {
  const output = document.getElementById('output');
  output.innerHTML = fahrenheit + " fahrenheit " + degrees + " degrees";
}

// MATH!
function fahToKelvinAndDegrees() {
  const input = document.getElementById('input');
  var fahrenheit = input.value;
  if (parseInt(fahrenheit) + 0 == parseInt(fahrenheit)) {
    const degree = (parseInt(fahrenheit) - 32) * 5/9;
    const kelvin = (parseInt(fahrenheit) - 32) * 5/9 + 273.15;
    resultsForFah(degree, kelvin);
    fahrenheit = degree;
  }
  else {
    overwrite("Please ensure that you have entered a numerical number!");
  }
  return fahrenheit;
}

function degreesToFahAndKelvin() {
  const input = document.getElementById('input');
  const degrees = input.value;
  if (parseInt(degrees) + 0 == parseInt(degrees)) {
    const fahrenheit = parseInt(degrees) * 9/5 + 32;
    const kelvin = parseInt(degrees) + 273;
    resultsForDegrees(fahrenheit, kelvin);
  }
  else {
    overwrite("Please ensure that you have entered a numerical number!");
  }
  return degrees;
}

function kelToDegreesAndFah() {
  const input = document.getElementById('input');
  var kelvin = input.value;
  if (parseInt(kelvin) + 0 == parseInt(kelvin)) {
    const degrees = parseInt(kelvin) - 273;
    const fahrenheit = 9/5 * (parseInt(kelvin) - 273) + 32;
    resultsForKelvin(fahrenheit, degrees);
    kelvin = degrees;
  }
  else {
    overwrite("Please ensure that you have entered a numerical number!");
  }
  return kelvin;
}

function printWeatherStatus(degree) {
  if (degree < 0) {
    append("Ooh, it's really cold!");
  }
  else if (degree > 100) {
    append("You're literally boiling!");
  }
  else if (degree > 40) {
    append("Ooh, it's hot out!");
  }
}

// Action after button
function checkedRadio() {
  let degree = 0;
  if(document.getElementById('degrees').checked) {
    degree = degreesToFahAndKelvin();
  }
  else if(document.getElementById('fahrenheit').checked) {
    degree = fahToKelvinAndDegrees();
  }
  else if (document.getElementById('kelvin').checked) {
    degree = kelToDegreesAndFah();
  }
  printWeatherStatus(degree);
}

// Button
const button = document.getElementById('button');
button.onclick = checkedRadio;