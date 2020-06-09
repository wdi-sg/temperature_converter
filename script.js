// UI elements
const inputTemp = document.querySelector('#temp-input');
const inputUnit = document.querySelector('#input-unit');

// convert button
document.querySelector('#btn').addEventListener('click', function(){
  let username = document.querySelector('#name').value;
  if (username === "") {
    username = "John Doe";
  } else {
    username = document.querySelector('#name').value;
  }

  // check for input temperature and unit
  if (inputTemp.value === "" || inputUnit.value === "") {
    const output = "Please enter a temperature";
    displayOne(output);
  } else 
  // input in Farenheit
  if (inputUnit.value === "F") {
    let outputC = fToC(inputTemp.value);
    let outputK = fToK(inputTemp.value);
    displayOne(outputC);
    displayTwo(outputK);
  } else 
  // input in Celsius
  if (inputUnit.value === "C") {
    let outputF = cToF(inputTemp.value);
    let outputK = cToK(inputTemp.value);
    displayOne(outputF);
    displayTwo(outputK);
  } else 
  // input in Kelvin
  if (inputUnit.value === "K") {
    let outputF = kToF(inputTemp.value);
    let outputC = kToC(inputTemp.value);
    displayOne(outputF);
    displayTwo(outputC);
  }

  // message logic
  if (inputUnit.value === "K" && inputUnit.value <= 273.15 || inputUnit.value === "F" && inputUnit.value <= 32 || inputUnit.value === "C" && inputUnit.value <= 0) {
    return weather = "cold";

  }


  // display message
  if (inputUnit.value === "K" && inputTemp.value <= 273.15 || inputUnit.value === "F" && inputTemp.value <= 32 || inputUnit.value === "C" && inputTemp.value <= 0 && inputTemp.value !== "") {
    let message = `It's cold out, ${username}! Bring a jacket.`
    displayThree(message)
  } else if (inputUnit.value === "K" && inputTemp.value > 40273.15 && inputTemp.value <= 100273.15 || inputUnit.value === "F" && inputTemp.value > 104 && inputTemp.value <= 212 || inputUnit.value === "C" && inputTemp.value > 40 && inputTemp.value <= 100) {
    let message = `It's hot out, ${username}! You should wear a hat.`
    displayThree(message)
  } else if (inputUnit.value === "K" && inputTemp.value > 100273.15 || inputUnit.value === "F" && inputTemp.value > 212 || inputUnit.value === "C" && inputTemp.value > 100) {
    let message = `It's REALLY hot out, ${username}! Bring an umbrella for the UV rays.`
    displayThree(message)
  }
});

  // show results
const displayOne = (data) => {
  const result = document.querySelector('#result');
  result.innerText = data;
}

const displayTwo = (data) => {
  const result = document.querySelector('#second-result');
  result.innerText = data;
}

const displayThree = (data) => {
  const result = document.querySelector('#message');
  result.innerText = data;
}

// calculations
const fToC = (currentInput) => {
  const output = (currentInput -32) * 5/9;
  return output + " Celsius";
};
const fToK = (currentInput) => {
  const output = (currentInput -32) * 5/9 + 273.15;
  return output + " Kelvin"
};
const cToF = (currentInput) => {
  const output = (currentInput *9/5) + 32;
  return output + " Farenheit"
};
const cToK = (currentInput) => {
  const output = currentInput + 273.15;
  return output + " Kelvin"
};
const kToF = (currentInput) => {
  const output = (currentInput - 273.15) * 9/5 + 32;
  return output + " Farenheit";
};
const kToC = (currentInput) => {
  const output = currentInput - 273.15;
  return output + " Celsius";
};

