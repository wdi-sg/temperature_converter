let userName;
let tempUnit;
let tempNumber;
let result = {};

const inputName = (e) => {
  userName = e.target.value;
  console.log(userName);
};

const chooseTemperatureUnit = (e) => {
  tempUnit = e.target.value;
  console.log(tempUnit);
};

const inputTempNumber = (e) => {
  tempNumber = parseInt(e.target.value);
  console.log(tempNumber);
  convertTemp();
};

const convertTemp = () => {
  let resultCelcius;
  let resultFarenheit;
  let resultKelvin;
  console.log(typeof tempNumber);
  if (tempUnit === "kelvin") {
    resultCelcius = (tempNumber - 273).toFixed(2);
    resultFarenheit = (((tempNumber - 273) * 9) / 5 + 35).toFixed(2);
    result.display = `The temperature is ${resultCelcius}C and ${resultFarenheit}F`;
  }
  if (tempUnit === "farenheit") {
    resultCelcius = (((tempNumber - 32) * 5) / 9).toFixed(2);
    resultKelvin = (((tempNumber - 32) * 5) / 9 + 273).toFixed(2);
    result.display = `The temperature is ${resultCelcius}C and ${resultKelvin}k`;
  }
  if (tempUnit === "celcius") {
    resultFarenheit = ((tempNumber * 9) / 5 + 32).toFixed(2);
    resultKelvin = tempNumber + 273;
    resultCelcius = tempNumber;
    console.log(resultCelcius);
    result.display = `The temperature is ${resultFarenheit}F and ${resultKelvin}k`;
  }
  if (resultCelcius <= 0) {
    result.message = `ohh it's cold out. ${userName} wear heavy jacket and toe warmers.`;
  }
  if (resultCelcius > 0 && resultCelcius <= 40) {
    result.message = `ohh it's nice out. ${userName} wear a skirt.`;
  }
  if (resultCelcius > 40 && resultCelcius < 100) {
    result.message = `ohh it's hot out. ${userName} wear nothing.`;
  }
  if (resultCelcius > 100) {
    result.message = `your literally boiling. ${userName} don't go outside if you want to live.`;
  }
  console.log(result);
  document.querySelector(
    ".output"
  ).innerHTML = `${result.display}, ${result.message}`;
};

document.querySelector("#userName").addEventListener("change", inputName);
document
  .querySelector(".unit")
  .addEventListener("change", chooseTemperatureUnit);
document
  .querySelector("#temperatureNumber")
  .addEventListener("change", inputTempNumber);
