console.log("Hi!")

var temperatureInFahr = prompt("What is the temperature?");
var fahrenheit = temperatureInFahr;
console.log(temperatureInFahr);

var temperatureInUnit = prompt("What is the temperature's unit of measurement? Type 'fahrenheit'");
console.log(temperatureInUnit);

var celcius = Math.round(((((fahrenheit - 32)*5)/9)) * 100)/100;
var kelvin = Math.round(((fahrenheit - 32) * (5/9) + (273.15)) * 100)/100;

function convertFahrenheit (fahrenheit) {
    alert("That equals to " + celcius + "°C, or " + kelvin + "K");
}
// convertFahrenheit();

if (temperatureInUnit == "fahrenheit") {
    convertFahrenheit();
} else if (temperatureInUnit == "celcius") {
        alert("I can't calculate that yet.");
    } else if (temperatureInUnit == "kelvin") {
        alert("I can't calculate that yet.");
        } else {
             alert("I can't calculate that yet.");
        }