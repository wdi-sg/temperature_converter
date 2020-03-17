var getUnitNext = false;
var temperature, temperatureUnit;
const standardUnits = ["celsius", "fahrenheit", "kelvin", "c", "f", "k"];

document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("output").innerText = "Enter a number!";
});

var inputHappened = function(currentInput){

  if (!getUnitNext) {
    if (isNaN(Number(currentInput))) {
      clear();
      return `Can't convert from ${currentInput}, try entering another number`;
    }

    temperature = Number(currentInput);
    clear();
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

  return generateOutput(temperature, temperatureUnit);
}

var clear = function () {
  document.getElementById("input").value = "";
}

var generateOutput = function (temp, unit) {

  var convertResult = convertTemp(temp, unit);
  if (typeof convertResult === "string") {
    return convertResult;
  }

  var temps = convertResult;
  var units = displayUnits(unit);
  var resultStr = `${temps[0]} ${units[0]} is ${temps[1].toFixed(2)} ${units[1]}, or ${temps[2].toFixed(2)} ${units[2]}`;
  var weatherComment = describeWeather(temps[units.indexOf("Celsius")]);

  return `${resultStr}\n${weatherComment}`;
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

var describeWeather = function (deg) {
  if (deg > 100) {
    return "You are literally boiling.";
  } else if (deg > 40) {
    return "It's very hot out there!";
  } else if (deg < 0) {
    return "It's very, very cold. It's literally freezing.";
  } else {
    return "Seems like a decent day out.";
  }
}
  }
}
