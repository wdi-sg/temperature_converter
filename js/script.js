var temperatureInFahr = prompt("Enter a numerical value in Farenheit")
var temperatureInKelvin = 5/9 * (temperatureInFahr - 32) +273
var temperatureInCelcius = 5/9 * (temperatureInFahr - 32)

var temperatureUnit = prompt("Enter a unit");
if (temperatureUnit === 'fahr') {
    console.log(temperatureInCelcius + "C", temperatureInKelvin + "K", temperatureInFahr + "F")
} else if (temperatureUnit === 'celcius') {
    console.log(temperatureInKelvin + "K", temperatureInCelcius + "C", temperatureInFahr + "F")
} else if (temperatureUnit === 'kelvin') {
    console.log(temperatureInFahr + "F", temperatureInCelcius + "C", temperatureInKelvin + "K")
}