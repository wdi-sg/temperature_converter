var userInput = prompt('Enter numerical value of temperature');
var temperature = parseFloat(userInput);
var userInput = prompt('Enter unit of temperature: F, C, K');
var temperatureUnit = userInput;
var temps = [];

if (temperatureUnit === "F") {
    var temperatureInFahr = temperature;
    var temperatureInCelsius = (temperatureInFahr - 32) * 5/9;
    var temperatureInKelvin = temperatureInCelsius + 273.15

    temps = [temperatureInFahr + "F", temperatureInCelsius + "C", temperatureInKelvin + "K" ];

    console.log(temps);
}

else if (temperatureUnit === "C") {
    var temperatureInCelsius = temperature;
    var temperatureInFahr = (temperatureInCelsius)* 9/5 + 32;
    var temperatureInKelvin = temperatureInCelsius + 273.15

    temps = [temperatureInCelsius + "C", temperatureInFahr + "F",  temperatureInKelvin + "K" ];

    console.log(temps);
}

else if (temperatureUnit === "K") {
    var temperatureInKelvin = temperature;
    var temperatureInCelsius = temperatureInKelvin - 273.15
    var temperatureInFahr = (temperatureInCelsius)* 9/5 + 32;
    temps = [temperatureInKelvin + "K", temperatureInCelsius + "C", temperatureInFahr + "F"];

    console.log(temps);
}

else {
    alert("Invalid unit of temperature");
}
