var temperature = prompt("Enter Temperature in Degrees:"
console.log(temperature);
var temperatureUnit = prompt("Enter Unit of Temperature to use, 'f' for Farenheit, 'c' for Celcius and 'k' for Kelvin");
console.log(temperatureUnit);
var fahrToCelcius = function (fahr) {
    return (fahr - 32)*5/9;
}
var fahrToKelvin = function (fahr) {
    return fahrToCelcius(fahr)+273.15;
}
var celciusToFahr = function (celcius) {
    return (celcius*9/5)+32;
}
var celciusToKelvin = function (celcius) {
    return celcius+273.15;
}
var kelvinToCelcius = function (kelvin) {
    return kelvin-273.15;
}
var kelvinToFahr = function (kelvin) {
    return celciusToFahr(kelvinToCelcius(kelvin));
}
var farenheit = 0;
var kelvin = 0;
var celcius = 0;
alert("")
// alert("You entered " + temperature + "Farenheit, which is " + fahrToCelcius(temperature) + " Celcius.");