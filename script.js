//Part 1
var temperatureInFahr = parseInt(prompt("What is the Temperature in Fahrenheit? "));
console.log( temperatureInFahr );
var temperatureInKelvin = (temperatureInFahr - 32) * (5/9);
var temperatureInCelsius = ((temperatureInFahr - 32) * (5/9) + 273.15);

alert("The Temperature in Kelvin is " + temperatureInKelvin + "K");
alert("The Temperature in Celsius is " + temperatureInCelsius+ "°C");

//Part 2
var name = prompt("What is your name? ");
var temperature = parseInt(prompt("What is the Temperature "));
console.log(temperature);
var temperatureUnit = prompt("What is the Temperature Unit(F/C/K) ");
console.log(temperatureUnit);
var unit = temperatureUnit.toUpperCase();

var convertKelvin;
var convertCelsius;
var convertFahr;

if (unit === "F") {
    convertCelsius = (temperature - 32) * (5/9);
    convertKelvin = (temperature - 32) * (5/9) +273.15;
    alert(temperature + "°F = " + convertCelsius + "°C = " + convertKelvin +"K");
    var tempArray = [temperature, convertCelsius, convertKelvin]; // Part 3
        //Part 4
        if (convertCelsius < 0) {
            console.log("ooh it's cold out");
        } else if (convertCelsius > 40) {
            console.log("ooh it's hot out");
        } else if (convertCelsius > 100) {
            console.log("your literally boiling");
        };
} else if (unit === "C") {
    convertFahr = (temperature * (9/5)) + 32;
    convertKelvin = temperature + 273.15;
    alert(temperature + "°C = " + convertFahr + "°F = " + convertKelvin +"K");
    var tempArray = [temperature, convertFahr, convertKelvin]; // Part 3
        //Part 4
        if (temperature < 0) {
            console.log("ooh it's cold out");
        } else if (temperature > 40) {
            console.log("ooh it's hot out");
        } else if (temperatureUnit > 100) {
            console.log("your literally boiling");
        };
} else if (unit === "K") {
    convertCelsius = temperature - 273.15;
    convertFahr = (temperature - 273.15) * (9/5) + 32;
    alert(temperature +"K = " + convertCelsius + "°C = " + convertFahr + "°F");
    var tempArray = [temperature, convertCelsius, convertFahr]; //Part 3
        //part 4
        if (convertCelsius < 0) {
            console.log("ooh it's cold out");
        } else if (convertCelsius > 40) {
            console.log("ooh it's hot out");
        } else if (convertCelsius > 100) {
            console.log("your literally boiling");
        };
};