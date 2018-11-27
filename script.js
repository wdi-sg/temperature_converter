//PART 1 INITIAL ANSWER

// var temperatureInFahr = prompt("What's the temperature right now in Fahrenheit?");
// var temperatureInCelsius = (temperatureInFahr - 32) * 5/9;
// var temperatureInKelvin = (temperatureInFahr - 32) * 5/9 + 273.15;
// alert(`It's ${temperatureInCelsius} in Celsius and ${temperatureInKelvin} in Kelvin.`)
// console.log(`Temperature in Fahrenheit: ${temperatureInFahr}`);
// console.log(`Temperature in Celsius: ${temperatureInCelsius}`);
// console.log (`Temperature in Kelvin: ${temperatureInKelvin}`);


//PART 1 ANOTHER ANSWER

// var temperatureInFahr = prompt("What's the temperature right now in Fahrenheit?");

// while (isNaN(temperatureInFahr)) {
//     alert('try again! Numbers only.');
//     temperatureInFahr = prompt("What's the temperature right now in Fahrenheit?");
// }
//     var temperatureInCelsius = (temperatureInFahr - 32) * 5/9;
//     var temperatureInKelvin = (temperatureInFahr - 32) * 5/9 + 273.15;
//     console.log(`Temperature in Fahrenheit: ${temperatureInFahr}`);
//     console.log(`Temperature in Celsius: ${temperatureInCelsius}`);
//     console.log (`Temperature in Kelvin: ${temperatureInKelvin}`);

//PART 2 INITIAL ANSWER

var temperature = prompt("What's the temperature right now?");
var temperatureUnit = prompt("Temperature Unit? Fahrenheit, Celsius, or Kelvin");

while (temperatureUnit != undefined) {
    if (temperatureUnit === "Fahrenheit") {
        var fahrenheitToCelsius = (temperature - 32) * 5/9;
        var fahrenheitToKelvin = (temperature - 32) * 5/9 + 273.15;
        console.log(`${temperature}° F = ${fahrenheitToCelsius.toFixed(2)}°C = ${fahrenheitToKelvin.toFixed(2)}K`);
        break;
    } else if (temperatureUnit === "Celsius") {
        var celsiusToFahrenheit = (temperature * 9/5) + 32;
        var celsiusToKelvin = (temperature - 32) * 5/9 + 273.15;
        console.log(`${temperature}°C = ${celsiusToFahrenheit.toFixed(2)}°F = ${celsiusToKelvin.toFixed(2)}K`);
        break;
    } else if (temperatureUnit === "Kelvin") {
        var kelvinToFahrenheit = (temperature - 273.15) * 9/5 +32;
        var kelvinToCelsius = temperature - 273.15;
        console.log(`${temperature}K = ${kelvinToFahrenheit.toFixed(2)}°F = ${kelvinToCelsius.toFixed(2)}°C`);
        break;
    } else {
        alert('try entering unit again! (case sensitive)');
        var temperatureUnit = prompt("Temperature Unit? Fahrenheit, Celsius, or Kelvin");
    }
};