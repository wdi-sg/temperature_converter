var userInput = prompt('Enter numerical value of temperature');
var temperature = parseFloat(userInput);
var userInput = prompt('Enter unit of temperature: F, C, K');
var temperatureUnit = userInput;

if (temperatureUnit === "F") {
    var temperatureInFahr = temperature;
    var temperatureInCelsius = (temperatureInFahr - 32) * 5/9;
    var temperatureInKelvin = temperatureInCelsius + 273.15

    alert(temperatureInFahr + "F = "
                + temperatureInCelsius + "C = "
                + temperatureInKelvin + "K");
}

else if (temperatureUnit === "C") {
    var temperatureInCelsius = temperature;
    var temperatureInFahr = (temperatureInCelsius)* 9/5 + 32;
    var temperatureInKelvin = temperatureInCelsius + 273.15

    alert(temperatureInFahr + "F = "
                + temperatureInCelsius + "C = "
                + temperatureInKelvin + "K");
}

else if (temperatureUnit === "K") {
    var temperatureInKelvin = temperature;
    var temperatureInCelsius = temperatureInKelvin - 273.15
    var temperatureInFahr = (temperatureInCelsius)* 9/5 + 32;

    alert(temperatureInFahr + "F = "
                + temperatureInCelsius + "C = "
                + temperatureInKelvin + "K");
}

else {
    alert("Invalid unit of temperature");
}
