function part_1 () {
    var userInputTemperatureInFahr = parseInt(prompt("What is the temperature in Fahrenheit?", "Please enter a number"));
    console.log("User have input " + userInputTemperatureInFahr + "as the temperature in Fahrenheit.");

    var temperatureInKel =(userInputTemperatureInFahr - 32) * 5/9 + 273.15;
    var temperatureInCel =(userInputTemperatureInFahr - 32) * 5/9;

    // process data into display format
    temperatureInFahrDisplay = userInputTemperatureInFahr.toFixed(2) + "\xB0F";
    temperatureInKelDisplay = temperatureInKel.toFixed(2) + "K";
    temperatureInCelDisplay = temperatureInCel.toFixed(2) + "\xB0C";

    console.log(temperatureInFahrDisplay + " = " + temperatureInCelDisplay + " = " + temperatureInKelDisplay);
}

function part_2 () {
    var temperatureInCelDisplay;
    var temperatureInKelDisplay;
    var temperatureInFahrDisplay;

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

    } else if (userInputTemperatureUnit === "Celsius"){
        var temperatureInKel = (userInputTemperature) + 273.15;
        var temperatureInFahr =(userInputTemperature * 9/5) + 32;

        // process data into display format
        temperatureInCelDisplay = userInputTemperature.toFixed(2) + "\xB0C";
        temperatureInKelDisplay = temperatureInKel.toFixed(2) + "K";
        temperatureInFahrDisplay = temperatureInFahr.toFixed(2) + "\xB0F";

    } else if (userInputTemperatureUnit === "Kelvin"){
        var temperatureInCel =(userInputTemperature) - 273.15;
        var temperatureInFahr =((userInputTemperature - 273.15) * 9/5) + 32;

        // process data into display format
        temperatureInKelDisplay = userInputTemperature.toFixed(2) + "K";
        temperatureInCelDisplay = temperatureInCel.toFixed(2) + "\xB0C";
        temperatureInFahrDisplay = temperatureInFahr.toFixed(2) + "\xB0F";

    }

    console.log(temperatureInFahrDisplay + " = " + temperatureInCelDisplay + " = " + temperatureInKelDisplay);
}

function part_3_4_5_6_7 () {
    var temps = [];
    var cont = true;
    var temperature = 0;
    var clothes = [
         "nothing",
         "swimsuit",
         "shorts and shirt",
         "sweater",
         "sweater + jacket",
         "heavy jacket",
         "heavy jacket and toe warmers",
         "don't go outside if you want to live"
    ];

    while (cont) {
        var userInputName = prompt("What is your name?");
        var userInputTemperature = parseInt(prompt("What is the temperature?", "Please enter a number"));
        var userInputTemperatureUnit = prompt("What is the unit of measurement?", "Please enter either Fahrenheit, Celsius, or Kelvin");

        console.log("User have input " + userInputTemperature + " as the temperature in " + userInputTemperatureUnit + ".");

        if (userInputTemperatureUnit === "Fahrenheit"){
            var temperatureInKel =(userInputTemperature - 32) * 5/9 + 273.15;
            var temperatureInCel =(userInputTemperature - 32) * 5/9;

            // process data into display format
            temps.push(userInputTemperature.toFixed(2) + "\xB0F");
            temps.push(temperatureInKel.toFixed(2) + "K");
            temps.push(temperatureInCel.toFixed(2) + "\xB0C");
            temperature = temperatureInCel;

        } else if (userInputTemperatureUnit === "Celsius"){
            var temperatureInKel = (userInputTemperature) + 273.15;
            var temperatureInFahr =(userInputTemperature * 9/5) + 32;

            // process data into display format
            temps.push(userInputTemperature.toFixed(2) + "\xB0C");
            temps.push(temperatureInKel.toFixed(2) + "K");
            temps.push(temperatureInFahr.toFixed(2) + "\xB0F");
            temperature = userInputTemperature;

        } else if (userInputTemperatureUnit === "Kelvin"){
            var temperatureInCel =(userInputTemperature) - 273.15;
            var temperatureInFahr =((userInputTemperature - 273.15) * 9/5) + 32;

            // process data into display format
            temps.push(userInputTemperature.toFixed(2) + "K");
            temps.push(temperatureInCel.toFixed(2) + "\xB0C");
            temps.push(temperatureInFahr.toFixed(2) + "\xB0F");
            temperature = temperatureInCel;
        }

        for (var i =0; i < temps.length; i++) {
            console.log(temps[i]);
        }

        if (temperature <= 0) {
            console.log("Ooh, it's cold out!");
            console.log(userInputName + ", I recommend you " + clothes[7] );
        } else if (temperature > 40) {
            console.log("Ooh, it's hot out!");
            console.log(userInputName + ", I recommend you " + clothes[7] );
        } else if (temperature > 100) {
            console.log("You are literally boiling!");
            console.log(userInputName + ", I recommend you " + clothes[7] );
        } else if (temperature > 0 && temperature < 10) {
            console.log(userInputName + ", I recommend you wear a " + clothes[6] );
        } else if (temperature >= 10 && temperature < 20) {
            console.log(userInputName + ", I recommend you wear a " + clothes[5] );
        } else if (temperature >= 20 && temperature < 30) {
            console.log(userInputName + ", I recommend you wear a " + clothes[1] );
        } else {
            console.log(userInputName + ", I recommend you wear " + clothes[0] );
        }

        var userInputContinue = prompt("Do you still want to do more temperature conversions?", "Please enter either Yes or No");

        if (userInputContinue === "Yes") {
            cont = true;
        } else {
            cont = false;
        }
    }
}

part_3_4_5_6_7();