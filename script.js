function overwrite(text) { // Overwriting the text
  const output = document.getElementById('output');
  output.innerHTML = text;
}

function append(text) { // Appending text
  const output = document.getElementById('output');
  output.innerHTML = output.innerHTML + " " + text;
}

function resultsForFah(degree, kelvin) {
  const output = document.getElementById('output');
  output.innerHTML = degree + " degrees, " + kelvin + " kelvin";
}

function resultsForDegrees(fahrenheit, kelvin) {
  const output = document.getElementById('output');
  output.innerHTML = fahrenheit + " fahrenheit, " + kelvin + " kelvin";
}

function resultsForKelvin(fahrenheit, degrees) {
  const output = document.getElementById('output');
  output.innerHTML = fahrenheit + " fahrenheit, " + degrees + " degrees";
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
  if (degree <= 0) {
    append("Ooh, it's really cold!");
    append("Don't go outside if you want to live.");
  }
  else if (degree <= 5) {
    append("Heavy jacket and toe warmers please!");
  }
  else if (degree <= 10) {
    append("Heavy jacket please! (no toe warmers)");
  }
  else if (degree <= 20) {
    append("Sweater and jacket please!");
  }
  else if (degree <= 25) {
    append("Just sweater will do!");
  }
  else if (degree < 40) {
    append("Shorts and shirts only please..");
  }
  else if (degree < 50) {
    append("Ooh, it's hot outside!");
    append("Swimsuit will do!");
  }
  else if (degree > 100 || degree > 50)  {
    append("You're literally boiling! Please wear NOTHING!");
  }
  else {
    overwrite("Oops! An error occured!");
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

// Changing name upon submit
function updateHeader() {
  const nameHeaderExist = document.getElementById("header-name");
  const fullName = document.getElementById('full-name');
  // If the nameHeader exists
  if (nameHeaderExist) {
    nameHeaderExist.innerHTML = "Hey " + fullName.value + "!";
  }
  // Name header does not exist.. Proceed to create
  else {
    const header = document.getElementById('header-h1');
    const nameHeader = document.createElement('h2');
    nameHeader.innerHTML = "Hey " + fullName.value + "!";
    nameHeader.id = "header-name";
    document.body.insertBefore(nameHeader, header);
  }

  fullname.value = null;
}

const nameButton  = document.getElementById('name-button');
nameButton.onclick = updateHeader;