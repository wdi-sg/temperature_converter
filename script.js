
//exercise 1, enter temperature in fahrenheit and return celsius and kelvin
console.log("hello!");

var temperatureInFahr;
var temperatureInCelsius;
var temperatureInKelvin;

var fahrToCelsius = function(temperatureInFahr){
    var temperatureInCelsius = (temperatureInFahr - 32)* 5 / 9;
    return temperatureInCelsius
};

var celsiusToKelvin = function(temperatureInCelsius){
    var temperatureInKelvin = temperatureInCelsius + 273;
    return temperatureInKelvin
};

var kelvinToFahrenheit = function(temperatureInKelvin){
    var temperatureInFahr = 9/5*(temperatureInKelvin - 273) + 32;
    return temperatureInFahr
}

var temperatureInFahr = prompt("Please enter your temperature in Farenheit");

console.log("Your temperature in Celsius is " + fahrToCelsius(temperatureInFahr));
console.log("Your temperature in Kelvin is " + celsiusToKelvin(fahrToCelsius(temperatureInFahr)));


//exercise part 2, enter temperature in either fahrenheit, kelvin or celsius and reuturn the remaining



var temperature = prompt("Please enter your temperature");
var temperatureUnit = prompt("Please enter your unit, e.g. fahrenheit, kelvin, celsius");

//using the functions that was defined in exercise part 1
if (temperatureUnit === "fahrenheit"){
    console.log("Your temperature in Celsius is " + fahrToCelsius(temperature));
    console.log("Your temperature in Kelvin is " + celsiusToKelvin(fahrToCelsius(temperature)));
}


else if (temperatureUnit === "kelvin"){
    console.log("Your temperature in Fahrenheit is " + kelvinToFahrenheit(temperature));
    console.log("Your temperature in Celsius is " + fahrToCelsius(kelvinToFahrenheit(temperature)));

}

else if (temperatureUnit === "celsius") {
    console.log("your temperature in Kelvin is " + celsiusToKelvin(temperature));
    console.log("your temperature in Fahrenheit is " + kelvinToFahrenheit(celsiusToKelvin(temperature)));
}

else {
    console.log("You have entered the wrong unit, please re-enter");
    prompt("Please enter your unit, e.g. fahrenheit, kelvin, celsius");

};


