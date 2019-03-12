var temperature = prompt("Enter Temperature in Degrees:"
console.log(temperature);
var temperatureUnit = prompt("Enter Unit of Temperature to use, 'f' for Farenheit, 'c' for Celcius and 'k' for Kelvin");
var fahrToCelcius = function (fahr) {
    return (fahr - 32)*5/9;
}
var fahrToKelvin = function (fahr) {
    return fahrToCelcius+273.15;
}
alert("You entered " + temperature + "Farenheit, which is " + fahrToCelcius(temperature) + " Celcius.");