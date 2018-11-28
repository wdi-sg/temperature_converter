// * Prompt the user for a starting `temperatureInFahr`. This should be a numerical value that represents degrees in fahrenheit.
// * After receiving input it should log that same temperature in both Kelvin and Celsius.
// * Prompt the user for a starting `temperature`. This should be a numerical value that represents degrees.
// * Prompt the user for a starting `temperatureUnit`. This will represent either Fahrenheit, Celsius, or Kelvin.
// * The application should print out the user-submitted temperature in the two remaining units.
//   * So, if the user submitted `32` and `fahrenheit`, the program should output something like the below. Feel free to customize this however you'd like.
//     ```text
//     32° F = 0°C = 273.15K
//     ```

var STARTING_TEMP = 0
var CONVERTED_TEMP_1 = ""
var CONVERTED_TEMP_2 = ""
var newTemp = 0
var unit = ""

var temperatureInFahr = function ()   {
    STARTING_TEMP = parseInt(STARTING_TEMP);
    unit = unit.toLowerCase();
    if (unit === "k"){
        CONVERTED_TEMP_1 = (STARTING_TEMP - 273.15)
        CONVERTED_TEMP_2 = CONVERTED_TEMP_1*(9/5)+32
        console.log("Temperature in Celsius is " + CONVERTED_TEMP_1 + " Temperature in Fahrenheit is " + CONVERTED_TEMP_2);
    }
    else if (unit === "c"){
        CONVERTED_TEMP_1 = STARTING_TEMP + 273.15
        CONVERTED_TEMP_2 = (CONVERTED_TEMP_1-273.15)*(9/5)+32
        console.log("Temperature in Kelvin is " + CONVERTED_TEMP_1 + " Temperature in Fahrenheit is " + CONVERTED_TEMP_2);
    }
    else if (unit === "f"){
        CONVERTED_TEMP_1 = (STARTING_TEMP -32)*(5/9)+273.15
        CONVERTED_TEMP_2 = (CONVERTED_TEMP_1 - 273.15)
        console.log("Temperature in Kelvin is " + CONVERTED_TEMP_1 + " Temperature in Celsius is " + CONVERTED_TEMP_2);
    }

    var temps = [ STARTING_TEMP, unit, CONVERTED_TEMP_1, CONVERTED_TEMP_2 ]; // added initial unit to make better sense of numbers
} // End of processing function

for(var i = 0; i <= 10; i++){
    STARTING_TEMP = prompt("Please input temperature in numerical value input Q to quit");
    unit = prompt("Please input unit (C, K or F) input Q to quit");
    if (STARTING_TEMP === "q" || unit === "q"){
        break;
    }
    temperatureInFahr();
}

