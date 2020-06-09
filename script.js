// Printing out
function append(text) {
  const output = document.getElementById('output');
  output.innerHTML = text;
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

// Mathematical
function fahToKelvinAndDegrees() {
  const input = document.getElementById('input');
  const fahrenheit = input.value;
  if (parseInt(fahrenheit) + 0 == parseInt(fahrenheit)) {
    const degree = (parseInt(fahrenheit) - 32) * 5/9;
    const kelvin = (parseInt(fahrenheit) - 32) * 5/9 + 273.15;
    resultsForFah(degree, kelvin);
  }
  else {
    append("Please ensure that you have entered a numerical number!");
  }
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
    append("Please ensure that you have entered a numerical number!");
  }
}

function kelToDegreesAndFah() {
  const input = document.getElementById('input');
  const kelvin = input.value;
  if (parseInt(kelvin) + 0 == parseInt(kelvin)) {
    const degrees = parseInt(kelvin) - 273;
    const fahrenheit = 9/5 * (parseInt(kelvin) - 273) + 32;
    resultsForKelvin(fahrenheit, degrees);
  }
  else {
    append("Please ensure that you have entered a numerical number!");
  }
}

// Action after button
function checkedRadio() {
  if(document.getElementById('degrees').checked) {
    degreesToFahAndKelvin();
  }
  else if(document.getElementById('fahrenheit').checked) {
    fahToKelvinAndDegrees();
  }
  else if (document.getElementById('kelvin').checked) {
    kelToDegreesAndFah();
  }
}

// Button
const button = document.getElementById('button');
button.onclick = checkedRadio;