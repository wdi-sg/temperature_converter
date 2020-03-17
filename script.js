console.log("hello script js");

var inputHappened = function(currentInput){
    if (isNaN(parseInt(currentInput))===false){
    //fahrenheit to celcius
  var degreeCelcius = (currentInput - 32) * 5 / 9 ;
  //fahrenheit to kelvin
  var degreeKelvin = degreeCelcius + 273 ;
  return output = currentInput + ' Fahrenheit = ' +(degreeCelcius + 'C  Or ') + (degreeKelvin + 'K');
    }
};