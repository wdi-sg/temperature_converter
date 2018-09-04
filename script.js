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

var c;
var f;
var k;
var temps = []
var symbol;

//conditionals to do convertion based on temperature unit
if (temperatureUnit === 'farenheit') {
    f = twoDecimalPlaces(temperature) + '°F';
    c = twoDecimalPlaces(5/9 * (temperature - 32)) + '°C';
    k = twoDecimalPlaces(5/9 * (temperature - 32)) + 'K';
    temps.push(f);
    temps.push(c);
    temps.push(k);
} else if (temperatureUnit === 'celsius') {
    c = twoDecimalPlaces(temperature) + '°C';
    f = twoDecimalPlaces(9/5 * (temperature + 32)) + '°F';
    k = twoDecimalPlaces(temperature + 273) + 'K';
    temps.push(c);
    temps.push(f);
    temps.push(k);
} else if (temperatureUnit === 'kelvin') {
    k = twoDecimalPlaces(temperature) + 'K';
    c = twoDecimalPlaces(temperature - 273) + '°C';
    f = twoDecimalPlaces(9/5 * (temperature - 273)) + '°F';
    temps.push(k);
    temps.push(c);
    temps.push(f);
} else {
    console.log('ERROR! Please enter farenheit, celsius or kelvin for the temperature unit.');;
}
if (temps.length === 3) {
    console.log(`${temps[0]} = ${temps[1]} = ${temps[2]}`);
}
