
var temperature = 0;

var temperatureUnit = "";

var count = 0;

var name = "";

var farenheitToCelsius = function(input) {
    var celsius = ((input - 32) * 5) / 9;
    return celsius;
};

var farenheitToKelvin = function(input) {
    var kelvin = (((input - 32) * 5) / 9) + 273.15;
    return kelvin;
};

var celsiusToFarenheit = function(input) {
    var farenheit = (((input * 9) / 5) + 32);
    return farenheit;
};

var celsiusToKelvin = function(input) {
    var celsius = (input + 273.15);
    return celsius;
}

var kelvinToCelsius = function(input) {
    var kelvin = (input - 273.15);
    return kelvin;
}

var kelvinToFarenheit = function(input) {
    var kelvin = (((input - 273.15)* 9) / 5) + 32;
    return kelvin;
};

var statementWeather = function(input) {
    if (input <= 0) {
        return "ooh it's cold out";
    } else if (input >= 40 && input < 100) {
        return "ooh it's hot out";
    } else if (input >= 100) {
        return "you're literally boiling";
    } else {
        return "";
    }
};

var clothes = function(input) {
    if (input <= 0) {
        return "don't go outside if you want to live";
    } else if (input > 0 && input <= 10) {
        return "heavy jacket and toe warmers";
    } else if (input > 10 && input <= 15) {
        return "heavy jacket";
    } else if (input > 15 && input <= 20) {
        return "sweater + jacket";
    } else if (input > 20 && input <= 25) {
        return "sweater";
    } else if (input > 25 && input <= 30) {
        return "shorts and shirt";
    } else if (input > 30 && input <= 70) {
        return "swimsuit";
    } else if (input > 70 ) {
        return "nothing";
    };
}

var inputHappened = function(currentInput) {
  var output = temperature;
  var celsius = Math.round(farenheitToCelsius(temperature) * 100) / 100;
  var kelvin = Math.round(farenheitToKelvin(temperature) * 100) / 100;
  var celsiusToF = Math.round(celsiusToFarenheit(temperature) * 100) / 100;
  var kelvinToF = Math.round(kelvinToFarenheit(temperature) * 100) / 100;
  var celsiusToK = Math.round(celsiusToKelvin(temperature)* 100) / 100;
  var kelvinToC = Math.round(kelvinToCelsius(temperature) * 100) / 100;
  var statement = statementWeather(temperature);
  var clothing = clothes(temperature);

  // store the temperature in global variable
  if (count === 0){
    temperature = parseInt(currentInput);
    console.log(temperature);
    if (isNaN(temperature)) {
        return "Please enter a number!";
    } else {
        count += 1;
        return "Next, input your unit of temperature (i.e farenheit, celsius or kelvin)";
    }
  };

  // store the temperature and displays the temperature unit
  if (count === 1) {
    temperatureUnit = currentInput;
    temperatureUnit = temperatureUnit.toLowerCase();
    if (temperatureUnit === "farenheit" || temperatureUnit === "f"){
        return "Temperature: " + output + " Farenheit, " + celsius + " Celsius, " + kelvin + " Kelvin" + " " + "(" + statement + ")";
    } else if (temperatureUnit === "celsius" || temperatureUnit === "c"){
        return "Temperature: " + output + " Celsius, " + celsiusToF + " Farenheit, " + celsiusToK + " Kelvin" + " " + "(" + statement + ")";
    } else if (temperatureUnit === "kelvin" || temperatureUnit === "k") {
        return "Temperature: " + output + " Kelvin, " + kelvinToC + " Celsius, " + kelvinToF + " Farenheit" + " " + "(" + statement + ")";
    }
    count += 1;
  };

  // display what the person should wear
  if (count === 2) {
    name = currentInput;
    return name + ", you should wear " + clothing;
  }
};