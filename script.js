var temperatureInFahr = prompt("What's the temperature in F?");

var temperature = prompt("What's the temperature?");

var temperatureUnit = prompt("What's the unit?");

var fahrenheit = temperatureInFahr;

var kelvin = ((0.55 * (temperature - 32)) + 273);

var celcius = ((temperature - 32) / 9);

var kelvintofahrenheit = ((1.8 * (temperature - 273)) + 32);

var kelvintocelcius = (temperature - 273);

var celciustofahrenheit = ((1.8 * temperature) + 32);

var celciustokelvin = (temperature + 273);

if (temperatureUnit == "fahrenheit"){
    alert(temperatureInFahr + " F = " + kelvin + " K = " + celcius + " C ");
}
else if (temperatureUnit == "kelvin") {
  alert(temperatureInFahr + " K = " + kelvintofahrenheit + " F = " + kelvintocelcius + " C ")
}
else if (temperatureUnit == "celcius") {
  alert(temperatureInFahr + " C = " + celciustofahrenheit + " F = " + celciustokelvin + " K ")
}