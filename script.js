var farenheit = 0;
var kelvin = 0;
var celcius = 0;
//part 3 create a function to create temp objects which contain temperature in degrees and the associated units
var temps = [];
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
var temperature = prompt("Enter Temperature in Degrees:");
while (isNaN(temperature)){
    temperature = prompt("Enter Temperature in Degrees:");
}
console.log(temperature);
var temperatureUnit = prompt("Enter Unit of Temperature to use, 'f' for Farenheit, 'c' for Celcius and 'k' for Kelvin");
while (!((temperatureUnit === "f") || (temperatureUnit === "c") || (temperatureUnit === "k"))) {
    temperatureUnit = prompt("Enter Unit of Temperature to use, 'f' for Farenheit, 'c' for Celcius and 'k' for Kelvin");
}
console.log(temperatureUnit);
var tempFunction = function (degrees, unit) {
    var unitString = "";
    if (unit === "f") {
        unitString = "\xB0 F"
    //if celcius, run function for converting celcius to other units
    } else if (unit === "c") {
        unitString = "\xB0C"
    //if kelvin, run functions for converting kelvin to other units
    } else if (unit === "k") {
        unitString = "K"
    }
    var temp = {
        degrees: degrees,
        unit: unitString
    };
    var degreesString = degrees.toString();
    return degreesString + unitString;
}
//set 3 vars to their respective values after conditional conversion
//if farenheit, run functions for converting farenheit to other units
var convertAllTemps = function () {
    if (temperatureUnit === "f") {
        farenheit = temperature;
        celcius = fahrToCelcius(temperature);
        kelvin = fahrToKelvin(temperature);
        temps[0] = tempFunction(farenheit, "f");
        temps[1] = tempFunction(celcius, "c");
        temps[2] = tempFunction(kelvin, "k");
    //if celcius, run function for converting celcius to other units
    } else if (temperatureUnit === "c") {
        farenheit = celciusToFahr(temperature);
        celcius = temperature;
        kelvin = celciusToKelvin(temperature);
        temps[0] = tempFunction(celcius, "c");
        temps[1] = tempFunction(kelvin, "k");
        temps[2] = tempFunction(farenheit, "f");
    //if kelvin, run functions for converting kelvin to other units
    } else if (temperatureUnit === "k") {
        farenheit = kelvinToFahr(temperature);
        celcius = kelvinToCelcius(temperature);
        kelvin = temperature;
        temps[0] = tempFunction(kelvin, "k");
        temps[1] = tempFunction(farenheit, "f");
        temps[2] = tempFunction(celcius, "c");
    }
alert(temps[0] + " = " + temps[1] + " = " + temps[2]);
}
convertAllTemps ();
//loops until user enters in NaN
while (!isNaN(temperature)) {
    temperature = prompt("Enter Temperature in Degrees(type an alphabet to stop):");
    if (!isNaN(temperature)){
        var temperatureUnit = prompt("Enter Unit of Temperature to use, 'f' for Farenheit, 'c' for Celcius and 'k' for Kelvin");
        while (!((temperatureUnit === "f" )|| (temperatureUnit === "c") || (temperatureUnit === "k"))) {
            var temperatureUnit = prompt("Enter Unit of Temperature to use, 'f' for Farenheit, 'c' for Celcius and 'k' for Kelvin");
        }
        convertAllTemps ();
    }
}

// console.log(temps[0] + ", " + temps[1] + ", " + temps[2]);
//Part 6
for (var i = 0; i < temps.length; i++) {
    var iplus1 = i + 1;
    console.log("for loop output " + iplus1 + ": " + temps[i]);
}
if (celcius < 0) {
    console.log("ooh it's cold out");
} else if (celcius > 40 && celcius <= 100) {
    console.log("ooh it's hot out");
} else if (celcius > 100) {
    console.log("you're literally boiling");
}
var username = prompt("Enter your Name:");
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
var wearThis = "something";
if (celcius < -30 || celcius >= 60) {
    wearThis = clothes[7];
} else if (celcius < 60 && celcius >= 40) {
    wearThis = clothes[0];
} else if (celcius < 40 && celcius >= 30) {
    wearThis = "a " + clothes[1];
} else if (celcius < 30 && celcius >= 20) {
    wearThis = clothes[2];
} else if (celcius < 20 && celcius >= 10) {
    wearThis = "a " + clothes[3];
} else if (celcius < 10 && celcius >= 0) {
    wearThis = "a " + clothes[4];
} else if (celcius < 0 && celcius >= -20) {
    wearThis = "a " + clothes[5];
} else if (celcius < -20 && celcius >= -30) {
    wearThis = "a " + clothes[6];
}
if (celcius < -30 || celcius >= 60) {
    alert("Hi " + username + ",  " + wearThis);
} else {
    alert("Hi " + username + ", you should wear " + wearThis);
}