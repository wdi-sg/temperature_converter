const INVALID_INPUT_ERR_MSG = "Please the temperature in Fahrenheit.";
const isNumericalInput = input => !isNaN(parseInt(input));
const FtoC = tempInF => (tempInF - 32) * 5 / 9;
const FtoK = tempInF => 273.5 + ((tempInF - 32) * (5/9));
const convertTemp = (temp, formula) => formula(temp);

const getConvertedTemperatures = function(currentInput) {
  const tempInF = currentInput;

  let msg = null;
  let tempInC = null;
  let tempInK = null;

  if (!isNumericalInput(currentInput)) return INVALID_INPUT_ERR_MSG;

  tempInC = convertTemp(currentInput, FtoC);
  tempInK = convertTemp(currentInput, FtoK);

  msg =  `${tempInF} \xB0F is ${tempInC} \xB0C\n`;
  msg += `${tempInF} \xB0F is ${tempInK} \xB0K`;

  return msg;
};


