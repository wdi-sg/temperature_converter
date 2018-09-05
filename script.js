var temperatureInFahr = prompt("What's the temperature in F?");

var kelvin = ((0.55 * (temperatureInFahr - 32)) + 273);

var celcius = ((temperatureInFahr - 32) / 9);

console.log(temperatureInFahr)

console.log(kelvin)

console.log(celcius)

var temperature = prompt("What's the temperature?");

var temperatureUnit = prompt("What's the unit?");

var fahrenheittokelvin = ((0.55 * (temperature - 32)) + 273);

var fahrenheittocelcius = ((temperature - 32) / 9);

var kelvintofahrenheit = ((1.8 * (temperature - 273)) + 32);

var kelvintocelcius = (temperature - 273);

var celciustofahrenheit = ((1.8 * temperature) + 32);

var celciustokelvin = (temperature + 273);

if (temperatureUnit == "fahrenheit"){
    alert(temperature + " F = " + fahrenheittokelvin + " K = " + fahrenheittocelcius + " C ");
}
else if (temperatureUnit == "kelvin") {
  alert(temperature + " K = " + kelvintofahrenheit + " F = " + kelvintocelcius + " C ");
}
else if (temperatureUnit == "celcius") {
  alert(temperature + " C = " + celciustofahrenheit + " F = " + celciustokelvin + " K ");
}

var temps = [ temperatureInFahr, temperature, fahrenheittokelvin, fahrenheittocelcius, kelvintofahrenheit, kelvintocelcius, celciustofahrenheit, celciustokelvin ];

if (temps[0] < 0){
    console.log("ohh it's cold out");
}
else if (temps[0] > 40){
    console.log("ohh it's hot out");
}
else if (temps[0] > 100){
    console.log("you're literally boiling");
}