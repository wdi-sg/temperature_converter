console.log("hello script js");

//var inputHappened = function(currentInput){
//  console.log( currentInput );
//  var output = "WOW TEMPERATURE";
//  return output;
//};

var inputHappened = function (currentInput) {

    var tempratureFahrenheit = parseInt ( currentInput );

    var tempratureCelsius = ( ( tempratureFahrenheit - 32 ) * ( 5 / 9 ) );

    var tempratureKelvin = tempratureCelsius + 237.15

    var output = ( tempratureFahrenheit + " Fahrenheit converts to " + tempratureCelsius + " Celsius or " + tempratureKelvin +   " Kelvin");

    return output;

}