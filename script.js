//Assignment 1
//part 1:
var temperatureInFahr = prompt("Enter a numerical value for temperature in fahrenheit: ");
var temperatureInDeg = temperatureInFahr - 32;
var temperatureInKel = temperatureInFahr - 32 + 273.15;
console.log("The temperature in degree is " + temperatureInDeg);
console.log("The temperature in kelvin is " + temperatureInKel);

//part 2:
var temperature = prompt("Enter a numerical value for temperature in degree: ");
var temperatureUnit = prompt("Enter the starting temperature unit: (Can be fahrenheit, deg or kelvin) ");
var temperatureInFah2 = parseInt(temperature) + 32;
var temperatureInKel2 = parseInt(temperature) + 273.15;
var tempInLowerCase = temperatureUnit.toLowerCase();
console.log(tempInLowerCase);
if (tempInLowerCase == "fahrenheit"){
    console.log(temperatureInFah2 + '\u00B0F' + " = " + temperature + "\u00B0C = " + temperatureInKel2 + "K");
}
else if (tempInLowerCase == "deg"){
    console.log(temperature + "\u00B0C" + " = " + temperatureInFah2 + "\u00B0F = " + temperatureInKel2 + "K");
}
else if (tempInLowerCase == "kelvin"){
    console.log(temperatureInKel2 + "K" + " = " + temperature + "\u00B0C = " + temperatureInFah2 + "\u00B0F");
}

//part 3
var temps = [temperatureInFahr, temperatureInDeg, temperatureInKel];
console.log(temps[0]);
console.log(temps[1]); //degree
console.log(temps[2]); //kelvin

/*part 4: Assume the temperature is in fahrenheit
if (temps[0] < 0){
    console.log("ooh it's cold out");
}
else if (temps[0] > 40){
    console.log("ooh it's hot out");
}
else if (temps[0] > 100){
    console.log("your literally boiling");
}
else {
    console.log("Nothing much");
}
*/

//part 5:
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

if (temps[0] < 0){
    console.log("hey " + name + ", dont go outside if you want to live!");
}
else if (temps[0] < 30){
    console.log("hey " + name + ", wear heavy jacket");
}
else if (temps[0] < 50){
    console.log("hey " + name + ", just wear a sweater");
}
else if (temps[0] < 70){
    console.log("hey " + name + ", just wear a short and shirt");
}
else if (temps[0] < 80){
    console.log("hey " + name + ", swimsuit would be the perfect attire");
}
else {
    console.log("dont go outside unless you want to be roasted!");
}

//part 6: print out the conversion results for each temperature
for (var i = 0; i < temps.length; i++){
    console.log(temps[i]);
}












