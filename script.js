console.log("hello script js");

  //prompt("what is your temperature");
//part 1
/*var inputHappened = function(currentInput){
  //console.log( currentInput );
  //display( "WOW SOMETHING HAPPENED" );
  //prompt("what is your temperature", "type your temperature in Fahrenheit");
  var degree = (currentInput - 32)*(5/9);
  var degDecimal = degree.toFixed(1);
  var kelvin = ((currentInput - 32)*(5/9)) + 273.15;
  var kelDecimal = kelvin.toFixed(1);
  display("you temperature is " + degDecimal + " degree " + kelDecimal + "K");
};
*/

//part 2
//creating program from scratching using input from prompt and convert to degree and kelvin.
function temperature2 () {
    //prompting user to key in temperature
    var newInput = prompt("what is your temperature");
    //prompting user to specify type of temperature
    var typeOfTemperature = prompt("please type in whether you temperature is in Degree, Kelvin, or Fahrenheit");
    //converting the various temperature
    var degree = (newInput - 32)*(5/9);
    var degDecimal = degree.toFixed(1);
    var kelvin = ((newInput - 32)*(5/9)) + 273.15;
    var kelDecimal = kelvin.toFixed(1);
    //specifying if else conditionals
    //if type of temperature is Fahrenheit, display F and other temperature
    if (typeOfTemperature === "Fahrenheit") {
        display(newInput + " Fahrenheit " + degDecimal + " Degree " + kelDecimal + " Kelvin");
    } else if(typeOfTemperature === "Degree") {
        display(degDecimal + " Degree " + newInput + " Fahrenheit " + kelDecimal + " Kelvin");
    } else if(typeOfTemperature === "Kelvin") {
        display(kelDecimal + " Kelvin " + degDecimal + " Degree " + newInput + " Fahrenheit");
    } else {
        display("Please try again");
    }
};
temperature2();
//part 3