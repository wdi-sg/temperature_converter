//Part 1

var temperatureInFahr = parseInt(prompt("Enter a temperature in degrees Fahrenheit"));

while ( isNaN(temperatureInFahr) ) {

    var temperatureInFahr = prompt("Please enter a number");

}

temperatureInKelvin = (5/9) *(temperatureInFahr - 32) + 273;
temperatureInCelsius = (5/9) * (temperatureInFahr - 32);

console.log(`The temperature that you enterd in Kelvin is: ${temperatureInKelvin}.`);
console.log(`The temperature that you enterd in Celsius is: ${temperatureInCelsius}.`);











