console.log("hello script js");

/*var inputHappened = function(currentInput){
  console.log( currentInput );
  var output = "WOW TEMPERATURE";
  return output;
};*/

//Part 1: display Kelvin and Celsius
var inputHappened = function (currentInput) {

    if (isNaN(parseFloat(currentInput))==false)  {

    var output = "Kelvin: " + (((currentInput-32)*5/9)+273.15).toFixed(2) + "K\n";
    var output2 = "Celsius: " + ((currentInput-32)*5/9).toFixed(2) + "C";

    return output + output2;
    }
}