// define each conversion in a function
function FtoC(temp) {
    return (temp - 32) * 1.8;
}
function FtoK(temp) {
    return ((temp - 32) * 5/9) + 273.15;
}
function CtoF(temp) {
    return (temp / 1.8) + 32;
}
function CtoK(temp) {
    return temp + 273.15;
}
function KtoC(temp) {
    return temp - 273.15;
}
function KtoF(temp) {
    return (temp - 273.15) * 1.8 + 32;
}

function convert(temp, unit) {
    // Use object key-value to store and access the user-submitted and converted temperatures.
    var temperaturesList = {};

    if (unit === "Fahrenheit") {
        temperaturesList[unit] = temp;
        temperaturesList["Celsius"] = FtoC(temp);
        temperaturesList["Kelvin"] = FtoK(temp);
    } else if (unit === "Celsius") {
        temperaturesList[unit] = temp;
        temperaturesList["Kelvin"] = CtoK(temp);
        temperaturesList["Fahrenheit"] = CtoF(temp);
    } else if (unit === "Kelvin") {
        temperaturesList[unit] = temp;
        temperaturesList["Celsius"] = KtoC(temp);
        temperaturesList["Fahrenheit"] = KtoF(temp);
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

    if (temperatures) {
        alert(temperatures[keys[0]].toFixed(2) + " " + keys[0] + " is " + temperatures[keys[1]].toFixed(2) + " " + keys[1] + " or " + temperatures[keys[2]].toFixed(2) + " " + keys[2] + ".");
    }

// Using loops, create an interface that continues to ask the user for temp conversions until the user requests to stop.
} while (confirm("Continue to convert?"));





