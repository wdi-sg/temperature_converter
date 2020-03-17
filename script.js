console.log("hello script js");

/*
var inputHappened = function(currentInput) {
  console.log(currentInput);
  var output = "WOW TEMPERATURE";
  return output;
};
*/

var inputHappened = function(currentInputF) {
  let output; 
  let tempK;
  let tempC;
  let tempF = parseInt(currentInputF);
  if (isNaN(parseInt(currentInputF))) {
    output = "please enter a NUMBER"
    return output;
  }
  else {
    tempK = tempF + 241.2;
    tempC = currentInputF - 32;
    output = currentInputF + " F = " + tempC + " C = " + tempK + " K";
    return output;
  }
}
