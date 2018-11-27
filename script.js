var userInputNum = prompt("Input the temperature");
var userInputUnit = prompt("Input the type of temperature unit")

var temperatureInNum = userInputNum;
var temperatureInUnit = userInputUnit;

if(temperatureInUnit == "fahrenheit"){
    var temperatureInCelsius = (userInputNum - 32) * (5 / 9);
    console.log("Temperature converted into Celsius" + " " + temperatureInCelsius + "C");
    var temperatureInKelvin = (userInputNum - 32) * (5 / 9 ) + 273.15;
    console.log("Temperature converted into Kelvin" + " " + temperatureInKelvin + "K");
} else if(temperatureInUnit == "kelvin"){
    var temperatureInfahr = (userInputNum - 273.15) * (9 / 5) + 32;
    console.log("Temperature converted into Fahrenheit" + " " + temperatureInfahr + "F");
    var temperatureInCelsius = (userInputNum - 273.15);
    console.log("Temperature converted into Celsius" + " " + temperatureInCelsius + "C");
} else if(temperatureInUnit == "celsius"){
    var temperatureInfahr = userInputNum * (9 / 5) + 32;
    console.log("Temperature converted into Fahrenheit" + " " + temperatureInfahr + "F");
    var temperatureInKelvin = Number(userInputNum) + 273.15;
    console.log("Temperature converted into Kelvin" + " " + temperatureInKelvin + "K");
}
else {
    alert("Error! Type in the right inputs!");
    var userInputNum = prompt("Input the temperature");
    var userInputUnit = prompt("Input the type of temperature unit")
}

// ### Part 2

// > Your application should...

// * Prompt the user for a starting `temperature`. This should be a numerical value that represents degrees.
// * Prompt the user for a starting `temperatureUnit`. This will represent either Fahrenheit, Celsius, or Kelvin.
// * The application should print out the user-submitted temperature in the two remaining units.
//   * So, if the user submitted `32` and `fahrenheit`, the program should output something like the below. Feel free to customize this however you'd like.
//     ```text
//     32° F = 0°C = 273.15K
//     ```

// Using Conditionals, have your code accept either fahrenheit, celsius or kelvin, and output the other two temp types.

// ### Part 1

// > Your application should...

// * Prompt the user for a starting `temperatureInFahr`. This should be a numerical value that represents degrees in fahrenheit.
// * After receiving input it should log that same temperature in both Kelvin and Celsius.