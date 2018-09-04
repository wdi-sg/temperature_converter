//Part 2, 3, 4, 5
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

var temps = [];
var celsiusTemp;

var name = prompt("Enter your name:");
var temperature = parseInt(prompt("Enter a value for the temperature"));

while ( isNaN(temperature) ) {

    var temperature = parseInt(prompt("Please enter a number")) ;

}

temps.push(temperature);

var temperatureUnit = prompt("Please pick one of the 3 units: Fahrenheit/Celsius/Kelvin");

if (temperatureUnit === "Fahrenheit") {
    temperatureFromFToK = (5/9) *(temperature - 32) +273;
    temps.push(temperatureFromFToK);
    temperatureFromFToC = (5/9) * (temperature - 32);
    temps.push(temperatureFromFToC);
    celsiusTemp = temperatureFromFToC;
    console.log (`${temps[0]}°F = ${temps[2]}°C = ${temps[1]}K `);
}

else if (temperatureUnit === "Celsius") {
    celsiusTemp = temperature;
    temperatureFromCToK = temperature + 273;
    temps.push(temperatureFromCToK);
    temperatureFromCToF = (9/5)*temperature + 32;
    temps.push(temperatureFromCToF);
    console.log (`${temps[0]}°C = ${temps[2]}°F = ${temps[1]}K `);
}

else if (temperatureUnit === "Kelvin") {
    temperatureFromKToC = temperature - 273;
    temps.push(temperatureFromKToC);
    celsiusTemp = temperatureFromKToC;
    temperatureFromKToF = (9/5)*(temperature - 273) + 32;
    temps.push(temperatureFromKToF);
    console.log (`${temps[0]}K = ${temps[2]}°F = ${temps[1]}°C `);
}

else {
    console.log("Error!!!");
}


if (celsiusTemp < 0) {
    console.log(`ooh it's cold out ${name}, you should wear a ${clothes[5]} or a ${clothes[6]}.`);
} else if ( celsiusTemp > 40 && celsiusTemp <= 100 ) {
    console.log(`ooh it's hot out ${name}, I advise you to wear ${clothes[2]}.`);
} else if ( celsiusTemp > 100) {
    console.log(`your literally boiling ${saufi}, you should wear ${clothes[0]} or just ${clothes[8]}.`);
}










