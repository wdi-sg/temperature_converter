console.log("hello script js");

var inputHappened = function(currentInput){
  //console.log( currentInput );
  var temperature = parseInt(currentInput);
    var output = ((temperature - 32)*(5/9)+(273.15)) + "K" + " " + ((temperature - 32)*(5/9)) + "C";
  return output;
};