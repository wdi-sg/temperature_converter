//PART 1:
// var temperatureInFahr = prompt("Please enter temperature in Fahrenheits");

// var temperatureInK = ((temperatureInFahr - 32) * (5/9)) + 273.15;
// var temperatureInC = ((temperatureInFahr - 32) * (5/9));

// alert("Temperature in Kelvins is:" + temperatureInK + "\n" + "Temperature in Celcius is: " + temperatureInC);

var promptTemperature = prompt("Please enter temperature degrees");
var STARTING_TEMP = Number(promptTemperature);
var temperatureUnit = prompt("Please enter temperature units");
var temp_comment ="";

var commentOnTemperature = temperatureInC => {
    if (temperatureInC > 100) {
        temp_comment = "you're literally boiling";
    } else if (temperatureInC > 40) {
        temp_comment = "ooh it's hot out";
    } else if (temperatureInC < 0) {
        temp_comment = "ooh it's cold out";
    } else {
        temp_comment = "Nice Weather :)";
    }
}


switch (temperatureUnit.toLowerCase()) {
    case 'fahrenheits':
        var CONVERTED_TEMP_1 = ((STARTING_TEMP - 32) * (5/9)) + 273.15;
        var CONVERTED_TEMP_2 = ((STARTING_TEMP - 32) * (5/9));
        commentOnTemperature(CONVERTED_TEMP_2);

        alert("Temperature in Kelvins is:" + CONVERTED_TEMP_1 + "\n" + "Temperature in Celcius is: " + CONVERTED_TEMP_2 + "\n" + temp_comment);
        break;

    case 'kelvins':
        var CONVERTED_TEMP_1 = ((STARTING_TEMP - 273.15)*(9/5)+32);
        var CONVERTED_TEMP_2 = STARTING_TEMP - 273.14;
        commentOnTemperature(CONVERTED_TEMP_2);

        alert("Temperature in Fahrenheits is: " + CONVERTED_TEMP_1 + "\n" + "Temperature in Celcius is: " + CONVERTED_TEMP_2 + "\n" + temp_comment);
        break;

    case 'celcius':
        var CONVERTED_TEMP_1 = STARTING_TEMP + 273.15;
        var CONVERTED_TEMP_2 = (STARTING_TEMP*(9/5))+32;
        commentOnTemperature(STARTING_TEMP);

        alert("Temperature in Kelvins is: " + CONVERTED_TEMP_1 + "\n" + "Temperature in Fahrenheits is: " + CONVERTED_TEMP_2 + "\n" + temp_comment);
        break;

    default:
        alert("Please check your inputs. Temperature should be numbers. Temperature units should be Kelvins, Fahrenheits or Celcius");
}

var temps = [STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2];