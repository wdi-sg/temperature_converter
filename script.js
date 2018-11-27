//PART 1:
// var temperatureInFahr = prompt("Please enter temperature in Fahrenheits");

// var temperatureInK = ((temperatureInFahr - 32) * (5/9)) + 273.15;
// var temperatureInC = ((temperatureInFahr - 32) * (5/9));

// alert("Temperature in Kelvins is:" + temperatureInK + "\n" + "Temperature in Celcius is: " + temperatureInC);

var temperature = prompt("Please enter temperature degrees");
var temperatureUnit = prompt("Please enter temperature units");

switch (temperatureUnit.toLowerCase()) {
    case 'fahrenheits':
        var temperatureInK = ((Number(temperature) - 32) * (5/9)) + 273.15;
        var temperatureInC = ((Number(temperature) - 32) * (5/9));
        alert("Temperature in Kelvins is:" + temperatureInK + "\n" + "Temperature in Celcius is: " + temperatureInC);
        break;

    case 'kelvins':
        var temperatureInF = ((Number(temperature) - 273.15)*(9/5)+32);
        var temperatureInC = Number(temperature) - 273.14;
        alert("Temperature in Fahrenheits is: " + temperatureInF + "\n" + "Temperature in Celcius is: " + temperatureInC);
        break;

    case 'celcius':
        var temperatureInK = Number(temperature) + 273.15;
        var temperatureInF = (Number(temperature)*(9/5))+32;
        alert("Temperature in Fahrenheits is: " + temperatureInF + "\n" + "Temperature in Kelvins is: " + temperatureInK);

    default:
        alert("Please check your inputs. Temperature should be numbers. Temperature units should be Kelvins, Fahrenheits or Celcius");
}