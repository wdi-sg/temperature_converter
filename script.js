var inputStep = 0;
var temperature, temperatureUnit;
const standardUnits = ["celsius", "fahrenheit", "kelvin", "c", "f", "k"];

document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("output").innerText = "Enter a number!";
});

var inputHappened = function(currentInput){

  if (inputStep === 0) {
    if (isNaN(Number(currentInput))) {
      clear();
      return `Can't convert from ${currentInput}, try entering a number`;
    }

    temperature = Number(currentInput);
    clear();
    inputStep += 1;
    return "Now enter a unit: (C)elsius/(F)ahrenheit/(K)elvin"
  } else if (inputStep === 1) {
    temperatureUnit = currentInput.toLowerCase();

    if (standardUnits.indexOf(temperatureUnit) === -1) {
      clear();
      return `Can't convert from ${temperature} "${currentInput}", try again: (C)elsius/(F)ahrenheit/(K)elvin`;
    }

    temperatureUnit = temperatureUnit[0];
    clear();
    inputStep += 1;
    return "What's your name?"
  }
  name = currentInput;
  inputStep = 0;
  return generateOutput(temperature, temperatureUnit, name);
}

var clear = function () {
  document.getElementById("input").value = "";
}

var generateOutput = function (temp, unit, name) {

  var temps = convertTemp(temp, unit);
  if (typeof temps === "string") {
    return temps;
  }

  temps.unshift(temperature);
  var units = displayUnits(unit);
  var refTemp = temps[units.indexOf("Celsius")];

  var tempConversion = `${temps[0]} ${units[0]} is ${temps[1].toFixed(2)} ${units[1]}, or ${temps[2].toFixed(2)} ${units[2]}.`;
  var weatherComment = describeWeather(refTemp);
  var outfitRec = recommendClothes(refTemp, name);

  return `${tempConversion}\n${weatherComment}\n${outfitRec}\n\nEnter a number to start over.`;
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
  var c2f = degC => (degC * 9 / 5 + 32);
  var c2k = degC => degC + 273.15;

  var f2c = degF => (degF - 32) * 5 / 9;
  var f2k = degF => (degF + 459.67) * 5 / 9;

  var k2c = degK => degK - 273.15;
  var k2f = degK => degK * 9 / 5 - 459.67;

  switch (unit) {
  case "c":
    return [c2f(deg), c2k(deg)];
  case "f":
    return [f2c(deg), f2k(deg)];
  case "k":
    return [k2c(deg), k2f(deg)];
  }
}

var describeWeather = function (deg) {
  if (deg > 100) {
    return "You are literally boiling.";
  } else if (deg > 40) {
    return "It's very hot out there!";
  } else if (deg < 0) {
    return "It's very, very cold. It's literally freezing.";
  }
  return "Seems like a decent day out.";
}

var recommendClothes = function (deg, name) {
  var outfit;

  if (deg < 0 || deg > 50) {
    return "Don't go outside if you want to live.";
  } else if (deg > 40) {
    outfit = "nothing";
  } else if (deg > 35) {
    outfit = "a swimsuit";
  } else if (deg > 30) {
    outfit = "shorts and a shirt";
  } else if (deg > 25) {
    outfit = "jeans and a shirt";
  } else if (deg > 20) {
    outfit = "a sweater";
  } else if (deg > 15) {
    outfit = "a sweater and jacket";
  } else if (deg > 10) {
    outfit = "a heavy jacket";
  } else {
    outfit = "a heavy jacket and toe warmers";
  }
  return `Today's personalised outfit recommendation for ${name} is: ${outfit}. Have a nice day!`;
}
