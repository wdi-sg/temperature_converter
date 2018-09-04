//part 1

var temperatureInFahr = prompt("What is the temperature? (in Fahrenheit)")

var temperatureInCelsius = (temperatureInFahr - 32) * (5 / 9)
alert(temperatureInCelsius + " C");

var temperatureInKelvin = (temperatureInFahr + 459.67) * (5 / 9)
alert(temperatureInKelvin + " K");




//part 2

var temperature = prompt('Enter temperature');
var temperatureUnit = prompt('Enter unit of temperature');
var fahrenheit = "F";
var celcius = "C";
var kelvin = "K";

// converting Celsius
if (temperatureUnit == " C") {
  var temperatureInFahr = (temperature * (9 / 5) + 32);
  var temperatureInKelvin = (temperature + 273.15);
  var result = temperature + " " + temperatureUnit + " = " + temperatureInFahr + " F" +
  " = " + temperatureInKelvin + " K";
  console.log(result);
  alert(result);
}
//converting Kelvin
else if (temperatureUnit == " K") {
  var temperatureInFahr = (temperature * (9 / 5 ) - 459.67);
  var temperatureInCelsius = (temperature - 273.15);
  var result = temperature + " " + temperatureUnit + " = " + temperatureInFahr + " F" +
  " = " + temperatureInCelsius + " C";
  console.log(result);
  alert(result);
}
//converting Fahrenheit
else {
  var temperatureInCelsius = (temperature - 32 * (5 / 9 ));
  var temperatureInKelvin = (temperature + 459.67 * (5 / 9));
  var result = temperature + " " + temperatureUnit + " = " + temperatureInCelsius + " C" +
  " = " + temperatureInKelvin + " K";
  console.log(result);
  alert(result);
};
