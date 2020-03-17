var getUnitNext = false;
var temperature, temperatureunit;

document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("output").innerText = "Enter a number!";
});

var inputHappened = function(currentInput){

  if (!getUnitNext) {
    temperature = currentInput;
    document.getElementById("input").value = "";
    getUnitNext = true;

    return "Now enter a unit: (C)elsius/(F)ahrenheit/(K)elvin"
  }

  temperatureUnit = currentInput.toLowerCase();
  document.getElementById("input").value = "";
  getUnitNext = false;

  var convertResult = convertTemp(temperature, temperatureUnit);
  if (typeof convertResult === "string") {
    return convertResult;
  } else {
    temps = convertResult;
    units = displayUnits(temperatureUnit);
    output = `${temperature} ${units[0]} is ${temps[0].toFixed(2)} ${units[1]}, or ${temps[1].toFixed(2)} ${units[2]}`
    return output;
  }
}

var displayUnits = function (unit) {
  var unitsTo = {
    "celsius": ["Celsius", "Fahrenheit", "Kelvin"],
    "fahrenheit": ["Fahrenheit", "Celsius", "Kelvin"],
    "kelvin": ["Kelvin", "Celsius", "Fahrenheit"],
    "c": ["Celsius", "Fahrenheit", "Kelvin"],
    "f": ["Fahrenheit", "Celsius", "Kelvin"],
    "k": ["Kelvin", "Celsius", "Fahrenheit"]
  };
  return unitsTo[unit];
}

var convertTemp = function (deg, unit) {
  if (isNaN(Number(deg))) {
    return `Can't convert from ${deg} ${unit}`;
  }

  var deg = Number(deg);
  if (unit === "c" || unit === "celsius") {
    return [c2f(deg), c2k(deg)];
  } else if (unit === "f" || unit === "fahrenheit") {
    return [f2c(deg), f2k(deg)];
  } else if (unit === "k" || unit === "kelvin") {
    return [k2c(deg), k2f(deg)];
  } else {
    return `Can't convert from ${deg} ${unit}`;
  }
}

var c2f = degC => (degC * 9 / 5 + 32);
var c2k = degC => degC + 273.15;

var f2c = degF => (degF - 32) * 5 / 9;
var f2k = degF => (degF + 459.67) * 5 / 9;

var k2c = degK => degK - 273.15;
var k2f = degK => degK * 9 / 5 - 459.67;
