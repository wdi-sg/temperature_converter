/*Goal: Create a program that can convert a temperature in Fahrenheit, Celsius or Kelvin to the other two units.

Specifications
Part 1
Your application should...
Prompt the user for a starting temperature. This should be a numerical value that represents degrees in fahrenheit.
After receiving input it should show that same temperature in both Kelvin and Celsius.*/
console.log("hello script js");

var inputHappened = function(currentInput) {
    var fahrenheit = parseInt(currentInput);
    var celsius = (fahrenheit - 32)/1.8;
    var kelvin = ((fahrenheit - 32)/1.8) + 273.15;

    // Round down the Fahrenheit temperature
    fahrenheit = Math.floor(fahrenheit);

    // Round down kelvin
    kelvin = Math.floor(kelvin);

    // Round down celsius temperature
    celsius = Math.floor(celsius);

    var output = "The temperature is : " + celsius + " celsius" + " and " + kelvin + " kelvin";
  return output;
};





/*!NaN*

 if (currentInput === integer ) {
    alert("Here is your temperature");
  } else {
    alert("This is not a number");
  };


/*Part 2*/



/*Part 3   and Part 4
if (temperature > 0) {
    console.log("ooh it is cold out" + " do not go out if you want to live");
} else if (temperature is > 40) {
    console.log("ooh it is hot out" + " wear shorts and shirt");
} else (temperature > 100) {
    console.log("you are literally boiling" + " wear a swimsuit");
}*/



