
var commentOnTemperature = temperatureInC => {
    if (temperatureInC > 100) {
        temp_comment = "you're literally boiling";
        toWear = clothes[clothes.length];
    } else if (temperatureInC > 40) {
        temp_comment = "ooh it's hot out";
        toWear = clothes[Math.floor(Math.random()*3 )];
    } else if (temperatureInC <= 0) {
        temp_comment = "ooh it's cold out";
        toWear = clothes[Math.floor(Math.random()*4 +3)];
    } else {
        temp_comment = "Nice Weather :)";
        toWear = clothes[0] + " it looks good on you :)";
    }
}


while (true) {
    var promptTemperature = prompt("Please enter temperature degrees\n\nEnter 'stop' at any prompt to exit the program.");
    if (promptTemperature.toLowerCase() == 'stop') { break; }
    var userName = prompt("Please enter your name\n\nEnter 'stop' at any prompt to exit the program.");
    if (userName.toLowerCase() == 'stop') { break; }
    var temperatureUnit = prompt("Please enter temperature units\n\nEnter 'stop' at any prompt to exit the program.");
    if (temperatureUnit.toLowerCase() == 'stop') { break; }
    var STARTING_TEMP = Number(promptTemperature);
    var temp_comment ="";
    var clothes = [
     'nothing',
     'swimsuit',
     'shorts and shirt',
     'sweater',
     'sweater + jacket',
     'heavy jacket',
     'heavy jacket and toe warmers',
     'dont go outside if you want to live'
    ];
    var toWear = "";

    switch (temperatureUnit.toLowerCase()) {
        case 'fahrenheits':
            var CONVERTED_TEMP_1 = ((STARTING_TEMP - 32) * (5/9)) + 273.15;
            var CONVERTED_TEMP_2 = ((STARTING_TEMP - 32) * (5/9));
            commentOnTemperature(CONVERTED_TEMP_2);

            alert("Temperature in Kelvins is:" + CONVERTED_TEMP_1 + "\n" + "Temperature in Celcius is: " + CONVERTED_TEMP_2 + "\n" + temp_comment + "\n" + userName + ", we recommend you to wear: " + toWear);
            break;

        case 'kelvins':
            var CONVERTED_TEMP_1 = ((STARTING_TEMP - 273.15)*(9/5)+32);
            var CONVERTED_TEMP_2 = STARTING_TEMP - 273.14;
            commentOnTemperature(CONVERTED_TEMP_2);

            alert("Temperature in Fahrenheits is: " + CONVERTED_TEMP_1 + "\n" + "Temperature in Celcius is: " + CONVERTED_TEMP_2 + "\n" + temp_comment + "\n" + userName + ", we recommend you to wear: " + toWear);
            break;

        case 'celcius':
            var CONVERTED_TEMP_1 = STARTING_TEMP + 273.15;
            var CONVERTED_TEMP_2 = (STARTING_TEMP*(9/5))+32;
            commentOnTemperature(STARTING_TEMP);

            alert("Temperature in Kelvins is: " + CONVERTED_TEMP_1 + "\n" + "Temperature in Fahrenheits is: " + CONVERTED_TEMP_2 + "\n" + temp_comment + "\n" + +userName + ", we recommend you to wear: " + toWear);
            break;

        default:
            alert("Please check your inputs. Temperature should be numbers. Temperature units should be Kelvins, Fahrenheits or Celcius");
    }

    var temps = [STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2];
}

