var getUnitNext = false;
var deg, unit;

document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("output").innerText = "Enter a number!";
});

var inputHappened = function(currentInput){

  if (!getUnitNext) {
    deg = currentInput;

    document.getElementById("input").value = "";
    getUnitNext = true;

    return "Now enter a unit! (Celsius/Fahrenheit/Kelvin)"
  }

  unit = currentInput.toLowerCase();
  document.getElementById("input").value = "";
  getUnitNext = false;

  var convertResults = tempConversion(deg, unit);
  if (typeof convertResults === "string") {
    console.log("help");
    return convertResults;
  } else {
    console.log("okay");
    temps = convertResults[0];
    units = convertResults[1];
    output = `${deg}${units[0]} is ${temps[0]}${units[1]}, or ${temps[1]}${units[2]}`
    return output;
  }
}

//TODO: factor out unit return
var tempConversion = function (deg, unit) {
  if (isNaN(Number(deg))) {
    return `Can't convert from ${deg} ${unit}`;
  }

  var deg = Number(deg);
  var tempsTo = [];
  var unitsTo =
      { "celsius": ["C", "F", "K"],
        "fahrenheit": ["F", "C", "K"],
        "kelvin": ["K", "C", "F"]
      };

  switch (unit) {
  case "celsius":
    tempsTo.push(+c2f(deg).toFixed(2), +c2k(deg).toFixed(2));
    break;
  case "fahrenheit":
    tempsTo.push(+f2c(deg).toFixed(2), +f2k(deg).toFixed(2));
    break;
  case "kelvin":
    tempsTo.push(+k2c(deg).toFixed(2), +k2f(deg).toFixed(2));
    break;
  default:
    return `Can't convert from ${deg} ${unit}`;
  }

  var tempResult = [tempsTo, unitsTo[unit]];
  return tempResult;
}

var c2f = degC => (degC * 9 / 5 + 32);
var c2k = degC => degC + 273.15;

var f2c = degF => (degF - 32) * 5 / 9;
var f2k = degF => (degF + 459.67) * 5 / 9;

var k2c = degK => degK - 273.15;
var k2f = degK => degK * 9 / 5 - 459.67;
