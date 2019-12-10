console.log("hello script js");
// alert("Choose a starting temperature");
let temp;
let gotTemp = false;

var inputHappened = function(currentInput) {
  let output = "Please enter a number.";
  if (!gotTemp) {
    temp = parseInt(getTemp(currentInput));
    if (!isNaN(temp)) {
      gotTemp = true;
      output =
        "Please enter a measurement of conversion (1) fah, (2) kel, (3) cel";
      return output;
    } else {
      return "Please enter a valid number!";
    }
  }
  if (gotTemp) {
    let tempUnit = getTempUnit(currentInput).toLowerCase();
    if (tempUnit === "fah") {
      return `${fahToKelAndCel(temp)}
      ${printMessage(temp)}`;
    } else if (tempUnit === "cel") {
      return `${celToFahAndKel(temp)}
      ${printMessage(temp)}`;
    } else if (tempUnit === "kel") {
      return `${kelToCelAndFah(temp)}
      ${printMessage(temp)}`;
    }
  }
  temp = null;
  gotTemp = false;
};

var getTemp = function(currentInput) {
  temp = currentInput;
  return temp;
};

var getTempUnit = function(currentInput) {
  var tempUnit = currentInput;
  console.log(temp, typeof temp);
  return tempUnit;
};

var fahToKelAndCel = function(fah) {
  var fahToKel = (fah - 32) * (5 / 9) + 273.15;
  var fahToCel = (fah - 32) * (5 / 9);
  return `${fah} F = ${fahToKel.toFixed(2)} K = ${fahToCel.toFixed(2)} C`;
};

var celToFahAndKel = function(cel) {
  var celToFah = cel * (9 / 5) + 32;
  var celToKel = cel + 273.15;
  return `${cel} C = ${celToFah.toFixed(2)} F = ${celToKel.toFixed(2)} K`;
};

var kelToCelAndFah = function(kel) {
  var kelToCel = kel - 273.15;
  var kelToFah = (kel - 273.15) * (9 / 5) + 32;
  return `${kel} K = ${kelToCel.toFixed(2)} C = ${kelToFah.toFixed(2)} F`;
};

var printMessage = function(temp) {
  if (temp < 0) {
    return "Ooh it's cold out!";
  } else if (temp > 40 && temp <= 100) {
    return "Ooh it's hot out!";
  } else if (temp > 100) {
    return "You're literally boiling 🔥";
  } else {
    return "You're ok. Go out."
  }
};
