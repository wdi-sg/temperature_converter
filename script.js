console.log("Hi!")

var temperatureInFahr = prompt("What is the temperature in fahrenheit?");
var fahrenheit = temperatureInFahr;
console.log(temperatureInFahr);

var celcius = Math.round(((((fahrenheit - 32)*5)/9)) * 100)/100;
var kelvin = Math.round(((fahrenheit - 32) * (5/9) + (273.15)) * 100)/100;

function convertFahrenheit (fahrenheit) {
    alert("That equals to " + celcius + "°C, or " + kelvin + "K");
}
convertFahrenheit();

// deeeeaddd

// var temperatureInUnit = prompt("What is the temperature's unit?", "Fahrenheit");

// switch(temperatureInUnit) {
//     case "Fahrenheit":
//         message = (fahrenheit + "°F" + "is " + celcius + "°C and" + kelvin + "K");
//             break;
//             default:
//                 message = "nothing";

// }