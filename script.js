console.log("hello script js");
// alert("Choose a starting temperature");
let temp;
let gotTemp = false;
const name = prompt("What's your name?")
const outputBox = document.querySelector("#output");
outputBox.innerText = "Enter a starting temperature";

const inputHappened = function(currentInput) {
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
    gotTemp = false;
    const tempUnit = getTempUnit(currentInput).toLowerCase();
    if (tempUnit === "fah") {
      return `${fahToKelAndCel(temp)}
      ${printMessage(temp)}
      ${clothesMessage(temp)}`;
    } else if (tempUnit === "cel") {
      return `${celToFahAndKel(temp)}
      ${printMessage(temp)}
      ${clothesMessage(temp)}`;
    } else if (tempUnit === "kel") {
      return `${kelToCelAndFah(temp)}
      ${printMessage(temp)}
      ${clothesMessage(temp)}`;
    } else {
      return "An error occurred. Please enter a number."
    }
  }
};

const getTemp = function(currentInput) {
  temp = currentInput;
  return temp;
};

const getTempUnit = function(currentInput) {
  const tempUnit = currentInput;
  console.log(temp, typeof temp);
  return tempUnit;
};

const fahToKelAndCel = function(fah) {
  const fahToKel = (fah - 32) * (5 / 9) + 273.15;
  const fahToCel = (fah - 32) * (5 / 9);
  return `${fah} F = ${fahToKel.toFixed(2)} K = ${fahToCel.toFixed(2)} C`;
};

const celToFahAndKel = function(cel) {
  const celToFah = cel * (9 / 5) + 32;
  const celToKel = cel + 273.15;
  return `${cel} C = ${celToFah.toFixed(2)} F = ${celToKel.toFixed(2)} K`;
};

const kelToCelAndFah = function(kel) {
  const kelToCel = kel - 273.15;
  const kelToFah = (kel - 273.15) * (9 / 5) + 32;
  return `${kel} K = ${kelToCel.toFixed(2)} C = ${kelToFah.toFixed(2)} F`;
};

const printMessage = function(temp) {
  if (temp < 0) {
    return "Ooh it's cold out!";
  } else if (temp > 40 && temp <= 100) {
    return "Ooh it's hot out!";
  } else if (temp > 100) {
    return "You're literally boiling 🔥";
  } else {
    return "You're ok. Go out.";
  }
};

var clothesMessage = function(temp) {
  const restartMessage = "Enter a number to restart.";
  if (temp < -50) {
    return `${name}, don't go outside if you want to live. 
    ${restartMessage}`;
  } else if (temp > -50 && temp <= -20) {
    return `${name}, wear a heavy jacket and toe warmers. 
    ${restartMessage}`;
  } else if (temp > -20 && temp <= 0) {
    return `${name}, wear a heavy jacket. 
    ${restartMessage}`;
  } else if (temp > 0 && temp <= 5) {
    return `${name}, wear a sweater + jacket. 
    ${restartMessage}`;
  } else if (temp > 5 && temp <= 20) {
    return `${name}, wear a sweater. 
    ${restartMessage}`;
  } else if (temp > 20 && temp <= 25) {
    return `${name}, wear shorts and a shit. 
    ${restartMessage}`;
  } else if (temp > 25 && temp <= 30) {
    return `${name}, wear a swimsuit. 
    ${restartMessage}`;
  } else {
    return `${name}, wear nothing. 
    ${restartMessage}`;
  }
};
