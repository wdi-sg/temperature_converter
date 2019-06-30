console.log("hello script js");


//Part 4
//Prompt user for username
var inputYourName = function(inputName){

    if (isNaN(inputName) === true) {
    //change first letter to uppercase and following letters change lowercase
        displayName("Hello " + inputName.charAt(0).toUpperCase() + inputName.slice(1));
    } else {
        displayName("Please enter your name");
    }
};
//How to change lastName first letter to uppercase?


//When the input field receives input, convert the value from fahrenheit to celsius
var inputHappened = function(currentInput){

  var convertToCelsius = ((currentInput - 32) * 5 / 9).toFixed(2);
  var convertToKelvin = ((currentInput - 32) * 5 / 9 + 273.15).toFixed(2);

// check if input is a number
    if (isNaN(currentInput) === false) {
// if above is true, calculate the below
        display (convertToCelsius + " Celsius");
    } else {
        display("Please input numbers only")
}

// check if input is a number
    if (isNaN(currentInput) === false) {
        display2 (convertToKelvin + " Kelvin");
    } else {
        display2("Please input numbers only")
    }
};

//Prompt user for a starting temperature and temperatureUnit
var convertTemperatureUnit = function() {
    var text;
    var message;
    var temperature = prompt("Please enter Temperature:", "");
    var unit = prompt("Please enter Unit (fahrenheit/celsius/kelvin):", "celsius");
    //parseFloat means only the first number in the string is returned
    //isNaN means if first entry is word, prompt shows is canceled
    if (temperature == null || temperature == "" || unit == null || unit == "" || isNaN(parseFloat(temperature))) {
        text = "User canceled the prompt.";
    } else {
        text = getTemperatureInfo(parseFloat(temperature), unit.toLowerCase())
    }

//Part 3 & Part 4
    if (temperature <= 0) {
        message = "The temperature is " + temperature + " degree " + unit + ". Ooh its cold out. Dont go outside if you want to live";
    } else if (temperature >= 40 && temperature <= 100) {
        message = "The temperature is " + temperature + " degree " + unit +". Ooh its hot out. Wear nothing";
    } else if (temperature < 10) {
        message = "Wear heavy jacket and toe warmers"
    } else if (temperature > 10 && temperature < 12) {
        message = "Wear heavy jacket"
    } else if (temperature > 12 && temperature < 15) {
        message = "Wear sweater + jacket"
    } else if (temperature > 15 && temperature < 20) {
        message = "Wear sweater"
    } else if (temperature > 20 && temperature < 30) {
        message = "Wear shorts and shirt"
    } else if (temperature > 30 && temperature < 40) {
        message = "Wear swimsuit"
    }
    else  {
        message = "you are literally boiling. Dont go outside if you want to live";
    }

    //display text celsius = fahrenheit = kelvin
    document.getElementById("status").innerHTML = text;
    //display message
    document.getElementById("message").innerHTML = message;
}

//Application print out user-submitted temperature in the two remaining units
var getTemperatureInfo = function(temperature, unit) {
    if (unit === "fahrenheit") {
        var tempCelc = (temperature - 32) * 5 / 9;
        var tempKelv = (temperature - 32) * 5 / 9 + 273.15;
        //string interpolation ${}
        //Example: var foo = "bar"; console.log(`Let's meet at the ${foo}`); //output: Let's meet at the bar
        //Math.round() means round up number to two decimal
        return `${temperature} degree Fahrenheit = ${Math.round(tempCelc)} degree Celsius = ${Math.round(tempKelv)} degree Kelvin.`;
    } else if (unit === "celsius") {
        var tempFahr = (temperature * 9 / 5) + 32;
        var tempKelv = temperature + 273.15;
        return `${temperature} degree Celsius = ${Math.round(tempFahr)} degree Fahrenheit = ${Math.round(tempKelv)} degree Kelvin.`;
    } else if (unit === "kelvin") {
        var tempCelc = temperature - 273.15;
        var tempFahr = (temperature - 273.15) * 9 / 5 + 32;
        return `${temperature} degree Kelvin = ${Math.round(tempCelc)} degree Celsius = ${Math.round(tempFahr)} degree Fahrenheit.`;
    }
    else {
        return "invalid temperature unit";
    }
};