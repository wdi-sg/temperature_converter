//PART 1 INITIAL ANSWER

// var temperatureInFahr = prompt("What's the temperature right now in Fahrenheit?");
// var temperatureInCelsius = (temperatureInFahr - 32) * 5/9;
// var temperatureInKelvin = (temperatureInFahr - 32) * 5/9 + 273.15;
// alert(`It's ${temperatureInCelsius} in Celsius and ${temperatureInKelvin} in Kelvin.`)
// console.log(`Temperature in Fahrenheit: ${temperatureInFahr}`);
// console.log(`Temperature in Celsius: ${temperatureInCelsius}`);
// console.log (`Temperature in Kelvin: ${temperatureInKelvin}`);


//PART 1 ANOTHER ANSWER

var temperatureInFahr = prompt("What's the temperature right now in Fahrenheit?");

while (isNaN(temperatureInFahr)) {
    alert('try again! Numbers only.');
    temperatureInFahr = prompt("What's the temperature right now in Fahrenheit?");
}
    var temperatureInCelsius = (temperatureInFahr - 32) * 5/9;
    var temperatureInKelvin = (temperatureInFahr - 32) * 5/9 + 273.15;
    console.log(`Temperature in Fahrenheit: ${temperatureInFahr}`);
    console.log(`Temperature in Celsius: ${temperatureInCelsius}`);
    console.log (`Temperature in Kelvin: ${temperatureInKelvin}`);