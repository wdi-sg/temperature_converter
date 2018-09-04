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
var temperatureUnit = prompt('What unit are you using? (delete where necessary)', 'farenheit or celsius or kelvin');

console.log('Starting temperature is ' + twoDecimalPlaces(temperature) + ' ' + temperatureUnit) + '.';

var c;
var f;
var k;
var temps = []
var symbol;

function checkTemperature(celsius) {
    if (celsius < 0)
        console.log("ooh it's cold out")
    else if (celsius > 40)
        console.log("ooh it's hot out")
    else if (celsius > 100)
        console.log('your literally boiling')
}

//conditionals to do convertion based on temperature unit
if (temperatureUnit === 'farenheit') {
    f = twoDecimalPlaces(temperature);
    c = twoDecimalPlaces(5/9 * (temperature - 32));
    k = twoDecimalPlaces(5/9 * (temperature - 32));
    checkTemperature(c);
    temps.push(f + '°F');
    temps.push(c + '°C');
    temps.push(k + 'K');
} else if (temperatureUnit === 'celsius') {
    c = twoDecimalPlaces(temperature);
    f = twoDecimalPlaces(9/5 * (temperature + 32));
    k = twoDecimalPlaces(temperature + 273);
    checkTemperature(c);
    temps.push(c + '°C');
    temps.push(f + '°F');
    temps.push(k + 'K');
} else if (temperatureUnit === 'kelvin') {
    k = twoDecimalPlaces(temperature);
    c = twoDecimalPlaces(temperature - 273);
    f = twoDecimalPlaces(9/5 * (temperature - 273));
    checkTemperature(c);
    temps.push(k + 'K');
    temps.push(c + '°C');
    temps.push(f + '°F');
} else {
    console.log('ERROR! Please enter farenheit, celsius or kelvin for the temperature unit.');;
}
if (temps.length === 3) {
    console.log(`${temps[0]} = ${temps[1]} = ${temps[2]}`);
}
