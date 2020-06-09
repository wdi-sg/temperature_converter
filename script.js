console.log("hello script js");

function convertFahrenheit (currentInput) {
  console.log( currentInput );
  var outputC = (currentInput - 32) * 5/9;
  var outputK = outputC + 273.15;
  var totalOutput = currentInput + " F is " + outputC + " C which is " + outputK + " K.";
  if (outputC < 0) {
   totalOutput += " ooh it's cold out!";
} else if (outputC > 40) {
    totalOutput += " ooh it's hot out!";
} else if (outputC > 100) {
 totalOutput += " ooh it's boiling!";
} else {
    var totalOutput;
}
  return totalOutput ;

}

//var convertCelsius = function(currentInput){
function convertCelsius (currentInput) {
  console.log( currentInput );
  var outputF = (currentInput * 9/5) + 32;
  var outputK = currentInput + 273.15;
  var totalOutput = currentInput + " C is " + outputF + "  F which is " + outputK + " K.";
  if (outputK < 32) {
   totalOutput += " ooh it's cold out!";
} else if (outputK > 104) {
    totalOutput += " ooh it's hot out!";
} else if (outputK > 212) {
 totalOutput += " ooh it's boiling!";
} else {
    var totalOutput;
}
  return totalOutput ;
};

//var convertKelvin = function(currentInput){
function convertKelvin (currentInput) {
  console.log( currentInput );
  var outputC = currentInput - 273.15;
  var outputF = outputC * 9/5 + 32;
  var totalOutput = currentInput + " K is " + outputC + " C which is " + outputF + "  F.";
  if (outputC < 0) {
   totalOutput += " ooh it's cold out!";
} else if (outputC > 40) {
    totalOutput += " ooh it's hot out!";
} else if (outputC > 100) {
 totalOutput += " ooh it's boiling!";
} else {
    var totalOutput;
}
  return totalOutput ;
};