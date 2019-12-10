console.log("hello script js");

/*function that shows the input temperature in both Kelvin and Celsius */
var inputHappened = function(currentInput){
  console.log( currentInput );
  var tempInt = parseInt(currentInput);
  var kelvin = (tempInt - 32) * (5/9) + 273.15;
  var celsius = kelvin - 273.15;
output =  tempInt + " Fahrenheit = " + celsius +" Degree Celcius = "+ kelvin
+ " Kelvin";
  return output;
};

/*Part 3
var inputHappened = function(currentInput){
  console.log( currentInput );
  var tempInt = parseInt(currentInput);
  if(tempInt < 0){
    output = "ooh it's cold out";
}else if(tempInt > 40){
    output = "your literally boiling"
}else if(tempInt > 40)
{
        output = "ooh it's hot out";
    }
  return output;
};
*/