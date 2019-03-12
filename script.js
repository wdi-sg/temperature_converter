var temperature = prompt("Enter Temperature in Degrees:"
console.log(temperature);
var temperatureUnit = prompt("Enter Unit of Temperature to use, 'f' for Farenheit, 'c' for Celcius and 'k' for Kelvin");
console.log(temperatureUnit);
var fahrToCelcius = function (fahr) {
    return (fahr - 32)*5/9;
}
var fahrToKelvin = function (fahr) {
    return fahrToCelcius(fahr)+273.15;
}
var celciusToFahr = function (celcius) {
    return (celcius*9/5)+32;
}
var celciusToKelvin = function (celcius) {
    return celcius+273.15;
}
var kelvinToCelcius = function (kelvin) {
    return kelvin-273.15;
}
var kelvinToFahr = function (kelvin) {
    return celciusToFahr(kelvinToCelcius(kelvin));
}
var farenheit = 0;
var kelvin = 0;
var celcius = 0;
alert("")
//if farenheit, run functions for converting farenheit to other units
if (temperatureUnit === f) {
    farenheit = temperature;
    celcius = fahrToCelcius(temperature);
    kelvin = fahrToKelvin(temperature);
//if celcius, run function for converting celcius to other units
} else if (temperatureUnit === c) {
    farenheit = celciusToFahr(temperature);
    celcius = temperature;
    kelvin = celciusToKelvin(temperature);
//if kelvin, run functions for converting kelvin to other units
} else if (temperatureUnit === k) {
    farenheit = kelvinToFahr(temperature);
    celcius = kelvinToCelcius(temperature);
    kelvin = temperature;
}


//set 3 vars to their respective values after conditional conversion

// alert("You entered " + temperature + "Farenheit, which is " + fahrToCelcius(temperature) + " Celcius.");