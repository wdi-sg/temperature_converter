//part 1
var temperatureInFahr = prompt('Enter your temperature (f):');
var temperatureInCel = 5/9 * (temperatureInFahr - 32);
var temperatureInKel = temperatureInCel + 273;
var c;
var f;
var k;
var temps = []

//extra function to convert all numbers to two decimal places.
function twoDecimalPlaces(number) {
    return Number.parseFloat(number).toFixed(2);
}

console.log('Celsius: ' + twoDecimalPlaces(temperatureInCel));
console.log('Kelvin: ' + twoDecimalPlaces(temperatureInKel));

//part 2
var temperature = parseInt(prompt('Enter your starting temperature:'));
var temperatureUnit = prompt('What unit are you using? (delete where necessary)', 'farenheit or celsius or kelvin');

console.log('Starting temperature is ' + twoDecimalPlaces(temperature) + ' ' + temperatureUnit) + '.';

//part 3
//conditionals to do convertion based on temperature unit
if (temperatureUnit === 'farenheit') {
    f = twoDecimalPlaces(temperature);
    c = twoDecimalPlaces(5/9 * (temperature - 32));
    k = twoDecimalPlaces(5/9 * (temperature - 32));
    temps.push(f + '°F');
    temps.push(c + '°C');
    temps.push(k + 'K');
} else if (temperatureUnit === 'celsius') {
    c = twoDecimalPlaces(temperature);
    f = twoDecimalPlaces(9/5 * (temperature + 32));
    k = twoDecimalPlaces(temperature + 273);
    temps.push(c + '°C');
    temps.push(f + '°F');
    temps.push(k + 'K');
} else if (temperatureUnit === 'kelvin') {
    k = twoDecimalPlaces(temperature);
    c = twoDecimalPlaces(temperature - 273);
    f = twoDecimalPlaces(9/5 * (temperature - 273));
    temps.push(k + 'K');
    temps.push(c + '°C');
    temps.push(f + '°F');
} else
    console.log('ERROR! Please enter farenheit, celsius or kelvin for the temperature unit.');

if (temps.length === 3)
    console.log(`${temps[0]} = ${temps[1]} = ${temps[2]}`);

//part 4
if (c < 0)
    console.log("ooh it's cold out")
else if (c > 40)
    console.log("ooh it's hot out")
else if (c > 100)
    console.log('your literally boiling')

var clothes = [
 'nothing',
 'swimsuit',
 'shorts and shirt',
 'sweater',
 'sweater + jacket',
 'heavy jacket',
 'heavy jacket and toe warmers',
 'dont go outside if you want to live'
];

//part 5
var name = prompt('Hi, whats is your name?');
var statement = name + ', you should be wearing: ';

if (c < -40 || c > 55)
    console.log(clothes[7]);
else if (c >= -39 && c < -10)
    console.log(statement + clothes[6]);
else if (c >= -10 && c < 0)
    console.log(statement + clothes[5]);
else if (c >= 0 && c < 8)
    console.log(statement + clothes[4]);
else if (c >= 8 && c <15)
    console.log(statement + clothes[3]);
else if (c >= 15 && c <25)
    console.log(statement + clothes[2]);
else if (c >= 25 && c <33)
    console.log(statement + clothes[1]);
else if (c >= 33 && c <=55)
    console.log(statement + clothes[0]);

//part 6
var i = 0;

if (temps.length > 0){
    while (i < temps.length) {
        console.log(temps[i]);
        i++;
    }
}

//part 7

var condition;

while (true) {
    condition = prompt('Enter a temperature to convert (or type stop to end): ');

    if (condition.trim() == 'stop')
        break;
    temperatureUnit = prompt('What unit are you using? (or type stop to end)', 'farenheit or celsius or kelvin');

    if (temperatureUnit.trim() == 'stop')
        break;

    console.log('Entered temperature is ' + twoDecimalPlaces(temperature) + ' ' + temperatureUnit) + '.';

    temperature = parseInt(condition);

    if (temperatureUnit === 'farenheit') {
        f = twoDecimalPlaces(temperature);
        c = twoDecimalPlaces(5/9 * (temperature - 32));
        k = twoDecimalPlaces(5/9 * (temperature - 32));
        temps.push(f + '°F');
        temps.push(c + '°C');
        temps.push(k + 'K');
    } else if (temperatureUnit === 'celsius') {
        c = twoDecimalPlaces(temperature);
        f = twoDecimalPlaces(9/5 * (temperature + 32));
        k = twoDecimalPlaces(temperature + 273);
        temps.push(c + '°C');
        temps.push(f + '°F');
        temps.push(k + 'K');
    } else if (temperatureUnit === 'kelvin') {
        k = twoDecimalPlaces(temperature);
        c = twoDecimalPlaces(temperature - 273);
        f = twoDecimalPlaces(9/5 * (temperature - 273));
        temps.push(k + 'K');
        temps.push(c + '°C');
        temps.push(f + '°F');
    } else
        console.log('ERROR! Please enter farenheit, celsius or kelvin for the temperature unit.');

    i = 0;

    if (temps.length > 0){
        while (i < temps.length) {
            console.log(temps[i]);
            i++;
        }
    }

    temps.length = 0;
}
