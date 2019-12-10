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
      return "Please enter a valid number!"
    }
  }
  if (gotTemp) {
    let tempUnit = getTempUnit(currentInput).toLowerCase();
    if (tempUnit === "fah") {
      return `${fahToKelAndCel(temp)}`;
    } else if (tempUnit === "cel") {
      return `${celToFahAndKel(temp)}`;
    } else if (tempUnit === "kel") {
      return `${kelToCelAndFah(temp)}`;
    }
  }
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
  return `${fah}F = ${fahToKel}K = ${fahToCel}C`;
};

var celToFahAndKel = function(cel) {
  var celToFah = (cel * (9/5) + 32);
  var celToKel = cel + 273.15
  return `${cel}C = ${celToFah}F = ${celToKel}K`
}

var kelToCelAndFah = function(kel) {
  var kelToCel = kel - 273.15;
  var kelToFah = (kel - 273.15) * (9/5) + 32;
  return `${kel}K = ${kelToCel}C = ${kelToFah}F`
}

var printMessage = function(temp) {
  if (temp < 0) {
    return "Ooh it's cold out!"
  } else if (temp > 40) {
    return "Ooh it's hot out!"
  } else {
    return "You're literally boiling 🔥"
  }
}