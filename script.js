var userName;
var temperature;
var temperatureUnit;
var temps = [];
var units = [" °F", " °C", " K"];
var clothes = ['something cool', 'your normal attire', 'something warm', 'not go outside'];
var repeat = true;

while (repeat === true) {

  userName = prompt("What is your name?");

  do {
    temperature = parseFloat(prompt("What is the current temperature?"));
  } while (isNaN(temperature));

  do {
    temperatureUnit = prompt("In Fahrenheit, Celsius or Kelvin?").toLowerCase ();
  } while (temperatureUnit !== "fahrenheit" && temperatureUnit !== "f" && temperatureUnit !== "celsius" && temperatureUnit !== "c" && temperatureUnit !== "kelvin" && temperatureUnit !== "k");

  if (temperatureUnit === "fahrenheit" || temperatureUnit === "f") {
    temps[0] = temperature;
    temps[1] = 5 / 9 * (temps[0] - 32);
    temps[2] = temps[1] + 273;
  } else if (temperatureUnit === "celsius" || temperatureUnit === "c") {
    temps[1] = temperature;
    temps[0] = 9 / 5 * temps[1] + 32;
    temps[2] = temps[1] + 273;
  } else if (temperatureUnit === "kelvin" || temperatureUnit === "k") {
    temps[2] = temperature;
    temps[1] = temps[2] - 273;
    temps[0] = 9 / 5 * temps[1] + 32;
  } else {
    console.log("Invalid input!");
  }

  for (var i = 0; i < 3; i++) {
    console.log(temps[i].toFixed(1) + units[i]);
  }

  if (temps[1] > 100) {
    console.log("You're literally boiling! " + userName + ", why don't you " + clothes[3] + "?");
  } else if (temps[1] > 40) {
    console.log("It's hot outside. " + userName + ", why don't you wear " + clothes[0] + "?");
  } else if (temps[1] < 0) {
    console.log("It's freezing outside. " + userName + ", why don't you wear " + clothes[2] + "?");
  } else {
    console.log("Looks like okay weather. " + userName + ", why don't you wear " + clothes[1] + "?");
  }

  repeat = confirm("Convert another temperature?");
}
