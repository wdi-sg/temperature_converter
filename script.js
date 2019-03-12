console.log("Hello")

// var temperatureInFahr= prompt("What is the temperature");
// // console.log( temperatureInFahr * 9/5 + 32);


// alert("Hmmmm");

var temperature= prompt("What is the temperature");
var temperatureUnit= prompt("Fahrenheit, Celsius, or Kelvin");
var number= parseInt(temperature)

if (temperatureUnit == "Kelvin") {
    console.log (number - 273.15 * 9/5 + 32 + "Fahrenheit")
    console.log (number - 273.15 + "Celsius")
}

else if (temperatureUnit == "Fahrenheit") {
    console.log ((number -32) * 5/9 + "Degree Celsius")
    console.log ((number -32) * 5/9 + 273.15 + "Kelvin")

}

else if (temperatureUnit == "Celsius") {
    console.log((number * 9/5) + 32 + "Fahrenheit")
    console.log(number + 273.15 + "Kelvin");
}