function part1 () {
    var userInputTemperatureInFahr = parseInt(prompt("What is the temperature in Fahrenheit?", "Please enter a number"));
    var temperatureInKel = 0;
    var temperatureInCel = 0;

    console.log("User have input " + userInputTemperatureInFahr + "as the temperature in Fahrenheit.");

    temperatureInKel =(userInputTemperatureInFahr - 32) * 5/9 + 273.15;
    temperatureInCel =(userInputTemperatureInFahr - 32) * 5/9;

    // process data into display format
    temperatureInFahrDisplay = userInputTemperatureInFahr.toFixed(2) + "\xB0F";
    temperatureInKelDisplay = temperatureInKel.toFixed(2) + "K";
    temperatureInCelDisplay = temperatureInCel.toFixed(2) + "\xB0C";

    console.log("[User Input] Fahrenheit: " + temperatureInFahrDisplay);
    console.log("Kelvin: " + temperatureInKelDisplay);
    console.log("Celsius: " + temperatureInCelDisplay);
}

function part2 () {
    var userInputTemperature = parseInt(prompt("What is the temperature?", "Please enter a number"));
    var userInputTemperatureUnit = prompt("What is the unit of measurement?", "Please enter either Fahrenheit, Celsius, or Kelvin");

    console.log("User have input " + userInputTemperature + " as the temperature in " + userInputTemperatureUnit + ".");

    if (userInputTemperatureUnit === "Fahrenheit"){
        var temperatureInKel =(userInputTemperature - 32) * 5/9 + 273.15;
        var temperatureInCel =(userInputTemperature - 32) * 5/9;

        // process data into display format
        temperatureInFahrDisplay = userInputTemperature.toFixed(2) + "\xB0F";
        temperatureInKelDisplay = temperatureInKel.toFixed(2) + "K";
        temperatureInCelDisplay = temperatureInCel.toFixed(2) + "\xB0C";

        console.log("[User Input] Fahrenheit: " + temperatureInFahrDisplay);
        console.log("Kelvin: " + temperatureInKelDisplay);
        console.log("Celsius: " + temperatureInCelDisplay);

    } else if (userInputTemperatureUnit === "Celsius"){
        var temperatureInKel = (userInputTemperature) + 273.15;
        var temperatureInFahr =(userInputTemperature * 9/5) + 32;

        // process data into display format
        temperatureInCelDisplay = userInputTemperature.toFixed(2) + "\xB0C";
        temperatureInKelDisplay = temperatureInKel.toFixed(2) + "K";
        temperatureInFahrDisplay = temperatureInFahr.toFixed(2) + "\xB0F";

        console.log("[User Input] Celsius: " + temperatureInCelDisplay);
        console.log("Kelvin: " + temperatureInKelDisplay);
        console.log("Fahrenheit: " + temperatureInFahrDisplay);

    } else if (userInputTemperatureUnit === "Kelvin"){
        var temperatureInCel =(userInputTemperature) - 273.15;
        var temperatureInFahr =((userInputTemperature - 273.15) * 9/5) + 32;

        // process data into display format
        temperatureInKelDisplay = userInputTemperature.toFixed(2) + "K";
        temperatureInCelDisplay = temperatureInCel.toFixed(2) + "\xB0C";
        temperatureInFahrDisplay = temperatureInFahr.toFixed(2) + "\xB0F";

        console.log("[User Input] Kelvin: " + temperatureInKelDisplay);
        console.log("Celsius: " + temperatureInCelDisplay);
        console.log("Fahrenheit: " + temperatureInFahrDisplay);
    }
}

part2();