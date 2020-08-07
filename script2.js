console.log("hello script2 js");








var convertTemp2 = function(currentInput){
  console.log( currentInput );
  
  var tempInCelcius = (currentInput -32) * (5/9);
  var tempInKel = tempInCelcius + 273.15;
  let output = `${currentInput} farenheit is ${tempInCelcius} celcius and ${tempInKel} Kelvin`;
  return output;
};
