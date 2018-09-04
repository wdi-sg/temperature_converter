console.log("it works")

var temperature = parseInt(prompt("What is the temperature?"));
var temperatureUnit = prompt("What is the temperature unit? Type C for Celsius, F for Farenheit and K for Kelvin.")

/**

temperatureInCelsius =
( tempuratureInFahrenheit - 32 ) / 1.8

temperatureInKelvin = temperatureInCelsius + 273

*/

if (temperatureUnit === "C"){
    temperatureInCelsius = temperature;
    temperatureInFahrenheit = (temperatureInCelsius)*(9/5) + 32;
    temperatureInKelvin = temperatureInCelsius + 273;

}else if (temperatureUnit === "F"){
    temperatureInFahrenheit = temperature;
    temperatureInCelsius = (5/9)*(temperatureInFahrenheit - 32);
    temperatureInKelvin = (5/9)*(temperatureInFahrenheit -32) +273;

}else if (temperatureUnit === "K"){
    temperatureInKelvin = temperature;
    temperatureInCelsius = temperatureInKelvin - 273;
    temperatureInFahrenheit = (9/5)*(temperatureInKelvin - 273) + 32;
}

console.log(temperatureInFahrenheit + " F = " + temperatureInCelsius + " C = " + temperatureInKelvin + " K");







