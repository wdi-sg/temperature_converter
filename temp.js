//T(°C) = (T(°F) - 32) / 1.8
//T(K) = (T(°F) - 32) /1.8 + 273.15
var inputHappened = function(currentInput){
    console.log(typeof currentInput)
    var output = degreesC;
    var output = degreesK;
    //define output as Celsius
    if (isNaN(currentInput) === false){
  // make the Deg Celsius and Kelvin temperature  calculation
        var degreesC = (currentInput - 32) /1.8;
        var degreesK = (degreesC) + 273.15;

  // output something in integer
        output = parseInt(degreesC) + " " + "Deg Celsius" +" " + "and" + " " + parseInt(degreesK) + " " + "Kelvins";
        return output;
// error message if values other than numbers are entered
    } else {
        alert("Invalid entry");
    }
};