console.log("hello script js");

var output; // print results
var temperatureKelvin; // convert f to k
var temperatureCelsius; // convert f to c

var num;
var currentInput; // number
var unitInput; // celcius or fahrenheit or kelvin

var userName; // grab user's name

// grab initial values for temperature
var inputHappened = function(currentInput){
    num = currentInput;
    if (isNaN(currentInput) === true) {
    output = "Invalid, only numbers please!";
    } else if (isNaN(currentInput) === false)  {
    temperatureKelvin = currentInput + 273.15;
    temperatureCelsius = (currentInput - 32) * 5 / 9;

        // check for various temperatures
        if (num > 100) {
            output = "Temperature in Kelvin: " + temperatureKelvin + "\n"  + "Temperature in Celsius: " + temperatureCelsius + "\n" + "your literally boiling";
        } else if (num > 40) {
            output = "Temperature in Kelvin: " + temperatureKelvin + "\n"  + "Temperature in Celsius: " + temperatureCelsius + "\n" + "ooh it's hot out";
        } else if (num < 0) {
            output = "Temperature in Kelvin: " + temperatureKelvin + "\n"  + "Temperature in Celsius: " + temperatureCelsius + "\n" + "ooh it's cold out";
        }
        };
  return output;
};

// check unit of temperature
var temperatureUnit = function(unitInput) {
    if (isNaN(unitInput) === false) {
        output = "Invalid, only characters please!";
    } else if (unitInput === "fahrenheit") {
        output = num + "F = " + "C = " + ((num - 32) * 5 / 9 + 273.15) + "K";
    } else if (unitInput === "celcius") {
        output = num + "C = " + ((num * 9 / 5) + 32) + "F = " + (num + 273.15) + "K";
    } else if (unitInput === "kelvin") {
        output = num + "K = " + (num - 273.15) + "C = " + ((num - 273.15) * 9 / 5 + 32) + "F";
    } else {
        output = "Invalid unit";
    }
    return output;
};

// print user's name
var printUserMsg = function(userName, num) {
    console.log(userName + num);
    output = "hello " + userName + "!";
    if (num <= 0) {
        output = "i warned you, don't go out if you want to live";
    } else if (num > 0 && num <= 10) {
        output = "heavy jacket and toe warmers";
    } else if (num > 10 && num <= 15) {
        output = "sweater and jacket";
    } else if (num > 20 && num <= 25) {
        output = "sweater";
    } else if (num > 25 && num <= 30) {
        output = "shorts and shirt";
    } else if (num > 30 && num <= 70) {
        output = "swimsuit";
    } else if (num > 70) {
        output = "nothing";
    }
    return output;
}