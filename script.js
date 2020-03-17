const INVALID_INPUT_ERR_MSG = "Please enter temperature in numerical value.";
const COLD_COMMENT = "ooh it's cold out";
const HOT_COMMENT = "ooh it's hot out";
const BOILING_COMMENT = "you are literally boiling";

const isNumericalInput = input => !isNaN(parseInt(input));
const FtoC = tempInF => (tempInF - 32) * 5 / 9;
const FtoK = tempInF => 273.5 + ((tempInF - 32) * (5/9));

const CtoF = tempInC => tempInC * 9/5 + 32;
const CtoK = tempInC => tempInC + 273.15;

const KtoC = tempInK => tempInK - 273.15;
const KtoF = tempInK => tempInK * 9/5 - 459.67;


const convertTemp = (temp, formula) => formula(temp);
const getTempComment = t => {
  if (t < 0) return COLD_COMMENT;
  if (t > 40 && t <= 100) return HOT_COMMENT;
  if (t > 100) return BOILING_COMMENT;
  return "";
}
const getClothingRecommendation = (temp, userName) => {
  console.log(userName);
  let msg = `Dear ${userName},`;
  if (temp < -20 || temp > 100 ) return msg + "dont go outside if you want to live";
  if (temp >= -20 && temp < -10 ) return msg + "heavy jacket and toe warmers";
  if (temp >= -10  && temp < -5 ) return msg + "heavy jacket";
  if (temp >= -5 && temp < 10) return msg + " sweater + jacket";
  if (temp >= 10 && temp < 20) return msg + "sweater";
  if (temp >=20 && temp < 30) return msg + "shorts and shirt";
  if (temp >=30 && temp < 40) return msg + "swimsuit";
  return msg + "nothing";
}

const getConvertedTemperatures = function(currentInput, tempUnit, userName) {
  if (!isNumericalInput(currentInput)) return INVALID_INPUT_ERR_MSG;
  let msg = null;
  let tempInC = null;
  let tempInK = null;
  let tempInF = null;
  const fromUnit = tempUnit.toUpperCase();
  let toUnit1 = null;
  let toUnit2 = null;
  let outTemp1 = null;
  let outTemp2= null;

  if (tempUnit === 'f') {
    tempInF = currentInput;
    tempInC = convertTemp(tempInF, FtoC);
    tempInK = convertTemp(currentInput, FtoK);

    outTemp1 = tempInC;
    toUnit1 = "C";
    outTemp2 = tempInK;
    toUnit2 = "K"
  }


  if (tempUnit === 'c') {
    tempInC = currentInput;
    tempInK = convertTemp(tempInC, CtoK);
    tempInF = convertTemp(tempInC, CtoF);

    outTemp1 = tempInK;
    toUnit1 = "K";
    outTemp2 = tempInF;
    toUnit2 = "F";
  }


  if (tempUnit === 'k') {
    tempInK = currentInput;
    tempInC = convertTemp(tempInK, KtoC);
    tempInF = convertTemp(tempInK, KtoF);


    outTemp1 = tempInC;
    toUnit1 = "C";
    outTemp2 = tempInF;
    toUnit2 = "F";
  }

  msg =  `${currentInput} \xB0${fromUnit} is ${outTemp1} \xB0${toUnit1} \n`;
  msg += `${currentInput} \xB0${fromUnit} is ${outTemp2} \xB0${toUnit2} \n`;

  msg += getTempComment(tempInC) + "\n";

  msg += getClothingRecommendation(tempInC,userName);

  return msg;
};


