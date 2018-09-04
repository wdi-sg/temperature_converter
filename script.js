var temperatureInFahr = prompt('Enter your temperature (f):');

var temperatureInCel = 5/9 * (temperatureInFahr - 32);
var temperatureInKel = temperatureInCel + 273;

console.log('Celsius: ' + temperatureInCel);
console.log('Kelvin: ' + temperatureInKel);
