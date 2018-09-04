//var temperatureInFahr = prompt ("Please enter temperature in Farenheit.");
//var temperatureInKelvin = temperatureInFahr-459.67;
//var temperatureInCelsius = temperatureInFahr+32;
//var temperatureInFahr = temperatureInCelsius-17.7778;


var temperature = prompt("Please enter temperature.");
var question = "Please enter temperature unit (Kelvin, Celsius, Farenheit)."
var temperatureUnit = prompt(question).toLowerCase();


if (temperatureUnit = "celsius"){
    var temperatureInKelvin = temperature+273.15;
    var temperatureInFahr = temperature+32;
alert(temperature + " degC = " + temperatureInKelvin + " K = " + temperatureInFahr + " degF");
    } else if (temperature = "kelvin"){
        var temperatureInCelsius = temperature-273.15;
        var temperatureInFahr = temperature-459.67;
        alert(temperature+" K = " + temperatureInCelsius + " degC = " + temperatureInFahr + " degF");
    } else if (temperature ="farenheit"){
        var temperatureInKelvin = temperature+255.372;
        var temperatureInCelsius = temperature-17.7778;
        alert(temperature + " degF = " + temperatureInKelvin + " K = " + temperatureInCelsius + " degC");
    } else {alert("Invalid input");
}


//var tempCelsius = [temperature, allUnits.temperatureInFahr[0], allUnits.temperatureInKelvin[0]];
//var tempKelvin = [temperature, temperatureInCelsius, temperatureInFahr];
//var tempFahr = [temperature, temperatureInKelvin, temperatureInCelsius];

var allUnits =
    {
    temperatureIn: [{
        unit: "celsius",
        fahr: temperature+32,
        kelvin: temperature+273.15
    },
    {   unit: "kelvin",
        fahr: temperature-459.67,
        celsius: temperature-273.15
    },
    {unit: "farenheit",
    kelvin: temperature+255.372,
    celsius: temperature-17.7778
    }]
};


var converted_temp_1;
var converted_temp_2;
var temps = [temperature, converted_temp_1, converted_temp_2];

if (temperatureUnit = "celsius") {
temps[1] = allUnits.temperatureIn[0].fahr;
temps[2] = allUnits.temperatureIn[0].kelvin;
console.log(temps);
}
else if (temperatureUnit = "kelvin") {
temps[1] = allUnits.temperatureIn[1].fahr;
temps[2] = allUnits.temperatureIn[1].celsius;
console.log(temps);
}
else if (temperatureUnit = "farenheit") {
temps[1] = allUnits.temperatureIn[2].kelvin;
temps[2] = allUnits.temperatureIn[2].celsius;
console.log(temps);
}




