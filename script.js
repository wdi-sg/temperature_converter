//PART 1:
// var temperatureInFahr = prompt("Please enter temperature in Fahrenheits");

// var temperatureInK = ((temperatureInFahr - 32) * (5/9)) + 273.15;
// var temperatureInC = ((temperatureInFahr - 32) * (5/9));

// alert("Temperature in Kelvins is:" + temperatureInK + "\n" + "Temperature in Celcius is: " + temperatureInC);

var STARTING_TEMP = prompt("Please enter temperature degrees");
var temperatureUnit = prompt("Please enter temperature units");

switch (temperatureUnit.toLowerCase()) {
    case 'fahrenheits':
        var CONVERTED_TEMP_1 = ((Number(STARTING_TEMP) - 32) * (5/9)) + 273.15;
        var CONVERTED_TEMP_2 = ((Number(STARTING_TEMP) - 32) * (5/9));
        alert("Temperature in Kelvins is:" + CONVERTED_TEMP_1 + "\n" + "Temperature in Celcius is: " + CONVERTED_TEMP_2);
        break;

    case 'kelvins':
        var CONVERTED_TEMP_1 = ((Number(STARTING_TEMP) - 273.15)*(9/5)+32);
        var CONVERTED_TEMP_2 = Number(STARTING_TEMP) - 273.14;
        alert("Temperature in Fahrenheits is: " + CONVERTED_TEMP_1 + "\n" + "Temperature in Celcius is: " + CONVERTED_TEMP_2);
        break;

    case 'celcius':
        var CONVERTED_TEMP_1 = Number(STARTING_TEMP) + 273.15;
        var CONVERTED_TEMP_2 = (Number(STARTING_TEMP)*(9/5))+32;
        alert("Temperature in Kelvins is: " + CONVERTED_TEMP_1 + "\n" + "Temperature in Fahrenheits is: " + CONVERTED_TEMP_2);

    default:
        alert("Please check your inputs. Temperature should be numbers. Temperature units should be Kelvins, Fahrenheits or Celcius");
}

var temps = [STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2];
console.log(temps[1]);