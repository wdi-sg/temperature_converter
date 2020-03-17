//console.log("hello script js");
/*
var inputHappened = function(currentInput){
  console.log( currentInput );
  var output = "WOW TEMPERATURE";
  return output;
};
*/


var inputHappened = function(currentInput){
  console.log( currentInput );
if (isNaN(currentInput) === false) {
      var output = (currentInput - 32) * (5/9);
      var kelv = (currentInput - 32) * (5/9) + 273.15;
    return output + " Cel and " + kelv + " Kel.";
} else {
    return "Please input a number.";
}
}