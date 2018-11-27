//var userInput = prompt("What's your name?");
//console.log( userInput );

//alert("I'm saying something");



//PART 1
var tempInFahr = prompt("Enter a temperature");
console.log(tempInFahr);

var tempInCelsius = ( tempInFahr - 32 ) * 5 / 9;
console.log(tempInCelsius);

var tempInKelvin = ( tempInFahr - 32 ) * 5 / 9 + 273.15;
console.log(tempInKelvin);


//PART 2

var temp = prompt("Enter a temperature");
var temperatureUnit = prompt("Fahrenheit, Celsius, or Kelvin");

var tempInFahr;
var tempInCelsius;
var tempInKelvin;

if (temperatureUnit === "Fahrenheit") {
    var tempInCelsius = ( temp - 32 ) * 5 / 9;
    var tempInKelvin = (temp - 32 ) * 5  / 9 + 273.15;
    console.log(temp + '\xB0F is ' + tempInCelsius + '\xB0C.');
    console.log(temp + '\xB0F is ' + tempInKelvin + '\xB0K.');
}

else if (temperatureUnit === "Celsius") {
    var tempInKelvin = temp + 273.15;
    var tempInFahr = (temp * 9 / 5 ) + 32;
    console.log(temp + '\xB0C is ' + tempInFahr + '\xB0F.');
    console.log(temp + '\xB0C is ' + tempInKelvin + '\xB0K.');
}

else if (temperatureUnit === "Kelvin") {
    var tempInCelsius = temp - 273.15;
    var tempInFahr = (temp - 273.15) * 9 / 5 + 32;
    console.log(temp + '\xB0K is ' + tempInCelsius + '\xB0C.');
    console.log(temp + '\xB0K is ' + tempInFahr + '\xB0F.');
}
else {
    console.log("error");
}

//PART 3 - 5
var starting_temp = prompt("Enter a temperature");
var temperatureUnit = prompt("Fahrenheit, Celsius, or Kelvin");


if (temperatureUnit === "Fahrenheit") {
var tempsFahr = [ starting_temp, ((starting_temp - 32) * 5 / 9), ((starting_temp - 32) * 5 / 9 + 273.15) ];
console.log(tempsFahr[0] + '\xB0F');
console.log(tempsFahr[1] + '\xB0C');
console.log(tempsFahr[2] + '\xB0K');
}
else if (temperatureUnit === "Celsius") {
var tempsCelsius = [ starting_temp, (starting_temp + 273.15), ((starting_temp * 9 / 5) + 32) ];
console.log(tempsCelsius[0] + '\xB0C');
console.log(tempsCelsius[1] + '\xB0K');
console.log(tempsCelsius[2] + '\xB0F');
}
else if (temperatureUnit === "Kelvin") {
    var tempsKelvin = [ starting_temp, (starting_temp - 273.15), ((starting_temp - 273.15) * 9 / 5 + 32) ];
    console.log(tempsKelvin[0] + '\xB0K');
    console.log(tempsKelvin[1] + '\xB0C');
    console.log(tempsKelvin[2] + '\xB0F');
}
else {
    console.log("error");
}

var name = prompt("What is your name?");

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

if (tempInCelsius < 0) {
    console.log("Ooh it's cold out. " + name + ", please wear " + [clothes[5], clothes[6] + " or " + clothes[7]]);
}
else if (tempInCelsius > 40) {
    console.log("Ooh it's hot outside. " + name + ", please wear " + [clothes[3] + " or " + clothes[4]]);
}
else if (tempInCelsius > 100) {
    console.log("You're literally boiling. " + name + ", please wear " + [clothes[0], clothes[1] + " or " + clothes[2]]);
}
