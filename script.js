var inputHappened = function(currentInput){
  console.log(currentInput);

  var degF = Number(currentInput);
  var inputIsNum = !isNaN(degF);

  if (inputIsNum) {
    var degC = f2c(degF).toFixed(2);
    var degK = f2k(degF).toFixed(2);
    var output = `${degF}F is ${degC}C, or ${degK}K.`;
  } else {
    var output = "I can't seem to convert that. Try again!"
  }

  return output;
};

var f2c = function (degF) {
  degC = (degF - 32) * 5 / 9;
  return degC;
}

var f2k = function (degF) {
  degK = (degF + 459.67) * 5 / 9;
  return degK;
}
