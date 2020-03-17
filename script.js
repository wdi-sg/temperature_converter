var getUnitNext = false;
var temperature, temperatureUnit;
const standardUnits = ["celsius", "fahrenheit", "kelvin", "c", "f", "k"];

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
  if (standardUnits.indexOf(temperatureUnit) === -1) {
    getUnitNext = true;
    clear();
    return `Can't convert from ${temperature} "${temperatureUnit}", try again: (C)elsius/(F)ahrenheit/(K)elvin`;
  }

  temperatureUnit = temperatureUnit[0];
  clear();
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
  var showUnits = {
    "c": ["Celsius", "Fahrenheit", "Kelvin"],
    "f": ["Fahrenheit", "Celsius", "Kelvin"],
    "k": ["Kelvin", "Celsius", "Fahrenheit"]
  };
  return showUnits[unit];
}

var convertTemp = function (deg, unit) {
  if (isNaN(Number(deg))) {
    return `Can't convert from ${deg} ${unit}`;
  }

  var deg = Number(deg);
  switch (unit) {
  case "c":
    return [deg, c2f(deg), c2k(deg)];
  case "f":
    return [deg, f2c(deg), f2k(deg)];
  case "k":
    return [deg, k2c(deg), k2f(deg)];
  default:
    return `Can't convert from ${deg} ${unit}`;
  }
}

var c2f = degC => (degC * 9 / 5 + 32);
var c2k = degC => degC + 273.15;

var f2c = degF => (degF - 32) * 5 / 9;
var f2k = degF => (degF + 459.67) * 5 / 9;

var k2c = degK => degK - 273.15;
var k2f = degK => degK * 9 / 5 - 459.67;
