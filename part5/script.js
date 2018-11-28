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
var userName = prompt('Please enter your name');
var userInput = prompt('Enter numerical value of temperature');
var temperature = parseFloat(userInput);
var userInput = prompt('Enter unit of temperature: F, C, K');
var temperatureUnit = userInput;
var temperatureInFahr;
var temperatureInCelsius;
var temperatureInKelvin;

var adviseClothing = function(temp) {
    if (temp <= -10) {
        alert(userName + ", please " + clothes[7]);
    }

    else if (temp <= -5) {
        alert(userName + ", please wear " + clothes[6]);
    }

     else if (temp <= 0) {
        alert(userName + ", please wear " + clothes[5]);
    }

    else if (temp <= 5) {
        alert(userName + ", please wear " + clothes[4]);
    }

    else if (temp <= 20) {
        alert(userName + ", please wear " + clothes[3]);
    }

    else if (temp <= 30) {
        alert(userName + ", please wear " + clothes[2]);
    }

    else if (temp <= 40) {
        alert(userName + ", please wear " + clothes[1]);
    }

    else {
       alert(userName + ", please wear " + clothes[1]);
    }
}

if (temperatureUnit === "F") {
    temperatureInFahr = temperature;
    temperatureInCelsius = (temperatureInFahr - 32) * 5/9;
    temperatureInKelvin = temperatureInCelsius + 273.15;

    adviseClothing(temperatureInCelsius);
}

else if (temperatureUnit === "C") {
    var temperatureInCelsius = temperature;
    var temperatureInFahr = (temperatureInCelsius)* 9/5 + 32;
    var temperatureInKelvin = temperatureInCelsius + 273.15

    adviseClothing(temperatureInCelsius);
}

else if (temperatureUnit === "K") {
    var temperatureInKelvin = temperature;
    var temperatureInCelsius = temperatureInKelvin - 273.15
    var temperatureInFahr = (temperatureInCelsius)* 9/5 + 32;

    adviseClothing(temperatureInCelsius);
}

else {
    alert("Invalid unit of temperature");
}
