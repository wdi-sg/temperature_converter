//Part 1
// var temperatureInFahr = prompt("Enter a Temperature in Fahrenheit");
// var temperatureInCelc = (temperatureInFahr-32) * 5 / 9;
// console.log(`It is ${temperatureInFahr} degree Fahrenheit and ${temperatureInCelc} degree Celsius.`);

//Part 2
var temperature = prompt("Enter a Temperature in any Units");
var temperatureUnit=prompt("Which Unit did you just entered?");
var temperatureToNum  = parseFloat(temperature);
var temperatureUnitLowerCase = temperatureUnit.toLowerCase();

if (temperatureUnitLowerCase === "fahrenheit") {
    var temperatureInCelc = (temperatureToNum-32)*5/9;
    var temperatureInKelv = (temperatureToNum-32)*5/9+273.15;
    console.log(`${temperatureToNum} degree Fahrenheit = ${temperatureInCelc} degree Celsius = ${temperatureInKelv} degree Kelvin.`);
} else if (temperatureUnitLowerCase === "celsius") {
    var temperatureInFahr = (temperatureToNum*9/5)+32;
    var temperatureInKelv = temperatureToNum+273.15;
    console.log(`${temperatureToNum} degree Celsius = ${temperatureInFahr} degree Fahrenheit = ${temperatureInKelv} degree Kelvin.`);
} else if (temperatureUnitLowerCase === "kelvin") {
    var temperatureInCelc = temperatureToNum-273.15;
    var temperatureInFahr = (temperatureToNum-273.15)*9/5+32;
    console.log(`${temperatureToNum} degree Kelvin = ${temperatureInCelc} degree Celsius = ${temperatureInFahr} degree Fahrenheit.`);
}