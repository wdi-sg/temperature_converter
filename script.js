//Part 1
var temperatureInFahr = prompt('Enter your temperature (f):');
var temperatureInCel = 5/9 * (temperatureInFahr - 32);
var temperatureInKel = temperatureInCel + 273;

//extra function to convert all numbers to two decimal places.
function twoDecimalPlaces(number) {
    return Number.parseFloat(number).toFixed(2);
}

console.log('Celsius: ' + twoDecimalPlaces(temperatureInCel));
console.log('Kelvin: ' + twoDecimalPlaces(temperatureInKel));

//Part 2
var temperature = parseInt(prompt('Enter your starting temperature:'));
var temperatureUnit = prompt('What unit are you using? (farenheit/celsius/kelvin)');

console.log('Starting temperature is ' + twoDecimalPlaces(temperature) + ' ' + temperatureUnit) + '.';

var c = 0;
var f = 0;
var k = 0;
var temps = [temperature]

//conditionals to do convertion based on temperature unit
if (temperatureUnit === 'farenheit') {
    f = temperature;
    c = 5/9 * (temperature - 32);
    k = c + 273;
    temps.push(c);
    temps.push(k);
} else if (temperatureUnit === 'celsius') {
    c = temperature;
    f = 9/5 * temperature + 32;
    k = c + 273;
    temps.push(f);
    temps.push(k);
} else if (temperatureUnit === 'kelvin') {
    k = temperature;
    c = temperature - 273;
    f = 9/5 * c + 32;
    temps.push(c);
    temps.push(f);
} else {
    console.log('ERROR! Please enter farenheit, celsius or kelvin for the temperature unit.');;
}

console.log(temps);
console.log(twoDecimalPlaces(c) +'°C = ' + twoDecimalPlaces(f) + '°F = '+ twoDecimalPlaces(k) + 'K');
