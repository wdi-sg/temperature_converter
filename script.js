// define each conversion in a function
function convert(temp, unit) {
    // Use object key-value to store and access the user-submitted and converted temperatures.
    var temperaturesList = {};

    var celsius = "";
    var kelvin = "";
    var fahrenheit = "";

    if (unit === "Fahrenheit") {
        celsius = (temp - 32) * 1.8;
        kelvin = ((temp - 32) * 5/9) + 273.15;
        temperaturesList[unit] = temp;
        temperaturesList["Celsius"] = celsius;
        temperaturesList["Kelvin"] = kelvin;
    } else if (unit === "Celsius") {
        fahrenheit = (temp / 1.8) + 32;
        kelvin = temp + 273.15;
        temperaturesList[unit] = temp;
        temperaturesList["Kelvin"] = kelvin;
        temperaturesList["Fahrenheit"] = fahrenheit;
    } else if (unit === "Kelvin") {
        fahrenheit = (temp - 273.15) * 1.8 + 32;
        celsius = temp - 273.15;
        temperaturesList[unit] = temp;
        temperaturesList["Celsius"] = celsius;
        temperaturesList["Fahrenheit"] = fahrenheit;
    } else {
        alert("Invalid Unit!");
        return;
    }
    return temperaturesList;
}

// Use a for or while loop to print out the conversion results for each temperature.
do {
    // Prompt the user for a starting temperature. This should be a numerical value that represents degrees.
    var temperatureInput = parseFloat(prompt("Enter a temperature"));
    // Prompt the user for a starting temperatureUnit. This will represent either Fahrenheit, Celsius, or Kelvin.
    var temperatureUnit = prompt("Enter a temperature unit in Fahrenheit, Celsius, or Kelvin");

    var temperatures = convert(temperatureInput, temperatureUnit);

    var keys = Object.keys(temperatures);

    console.log(Object.keys(temperatures));

    if (temperatures) {
        alert(temperatures[keys[0]].toFixed(2) + " " + keys[0] + " is " + temperatures[keys[1]].toFixed(2) + " " + keys[1] + " or " + temperatures[keys[2]].toFixed(2) + " " + keys[2] + ".");
    }

// Using loops, create an interface that continues to ask the user for temp conversions until the user requests to stop.
} while (prompt("Continue? Input Y for Yes or N for No.") === "Y");





