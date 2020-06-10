// button.onclick function(x) is all the way at the bottom

// Purpose: overwrites output with 'text' parameter
function overwrite(text) {
  const output = document.getElementById('output');
  output.innerHTML = text;
}

// Purpose: appends text with 'text' in parameter
function append(text) {
  const output = document.getElementById('output');
  output.innerHTML = output.innerHTML + " " + text;
}

// Purpose: returns temperature input
function getInputValue() {
  return document.getElementById('input').value;
}

// Purpose: takes in Fahrenheit, calculates and displays degrees and Kelvin
function fahrenheitCalculator() {
  var fahrenheit = getInputValue();
  const degree = (parseInt(fahrenheit) - 32) * 5/9;
  const kelvin = (parseInt(fahrenheit) - 32) * 5/9 + 273.15;
  overwrite(degree + " degrees, " + kelvin + " kelvin");
  return degree;
}

// Purpose: takes in degrees, calculates and displays Fahrenheit and Kelvin
function degreesCalculator() {
  var degrees = getInputValue();
  const fahrenheit = parseInt(degrees) * 9/5 + 32;
  const kelvin = parseInt(degrees) + 273;
  overwrite(fahrenheit + " fahrenheit, " + kelvin + " kelvin");
  return degrees;
}

// Purpose: takes in Kelvin, calculates and displays degrees and Kelvin
function kelvinCalculator() {
  var kelvin = getInputValue();
  const degrees = parseInt(kelvin) - 273;
  const fahrenheit = 9/5 * (parseInt(kelvin) - 273) + 32;
  overwrite(fahrenheit + " fahrenheit, " + degrees + " degrees");
  return degrees;
}

// Purpose: appends weather into output, based on degree
function appendWeather(degree) {
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
  // For any invalid characters, however, 12ABC is still accepted
  else {
    overwrite("Please enter a valid number!");
  }
}

// Purpose: action after 'convert' button is clicked, based on radio button checked
function conversionSystem() {
  if (isNaN(getInputValue()) || getInputValue == "") {
    overwrite("Please enter a valid number!");
    return;
  }

  let degree = 0;
  if (document.getElementById('degrees').checked) { // degree r.button is checked
    degree = degreesCalculator();
  }
  else if (document.getElementById('fahrenheit').checked) { // Fahrenheit r.button is checked
    degree = fahrenheitCalculator();
  }
  else if (document.getElementById('kelvin').checked) { // kelvin r.button is checked
    degree = kelvinCalculator();
  }
  appendWeather(degree);
}

// Purpose: updates header with the name based on input (just for fun)
function updateHeader() {
  const nameHeaderExist = document.getElementById("header-name"); // get current header
  const fullName = document.getElementById('full-name'); // get name input

  if (nameHeaderExist) { // If the nameHeader exists -> "Hey XX" already exist
    nameHeaderExist.innerHTML = "Hey " + fullName.value + "!"; // Update with new value of name input
  }
  else { // Name header does not exist.. Proceed to create
    const header = document.getElementById('header-h1'); // Get parent node
    const nameHeader = document.createElement('h2'); // Create h2 element
    nameHeader.innerHTML = "Hey " + fullName.value + "!"; // Put "Hey " + input .. into h2 element
    nameHeader.id = "header-name"; // Give an id to the new h2 element
    document.body.insertBefore(nameHeader, header); // Insert with reference to parent node
  }
  fullname.value = null; // Clear name input
}

const button = document.getElementById('button');
button.onclick = conversionSystem;

const nameButton  = document.getElementById('name-button');
nameButton.onclick = updateHeader;