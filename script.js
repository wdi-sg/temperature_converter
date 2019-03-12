//part 1
/*var temperatureInFahr = prompt("Enter the temperature in Fahrenheit");
var temperatureInCel = (temperatureInFahr - 32) * 5/9;
var temperatureInKel = (temperatureInFahr - 32) * 5/9 + 273.15;

alert("Temperature in Fahrenheit: " + temperatureInFahr + "\nTemperature in Celcius: " + temperatureInCel + "\nTemperature in Kelvin: " + temperatureInKel);*/




// part 2
/*var temperature = Number(prompt("Enter value of temperature"));
var temperatureUnit = prompt("Enter unit of temperature (Fahrenheit, Celcius, Kelvin)").toLowerCase();

if (temperatureUnit === "fahrenheit") {
    var temperatureInKel = (temperature - 32) * 5/9 + 273.15;
    var temperatureInCel = (temperature - 32) * 5/9;

    alert("Temperature in Fahrenheit: " + temperature + "\nTemperature in Celcius: " + temperatureInCel + "\nTemperature in Kelvin: " + temperatureInKel);

} else if (temperatureUnit === "celcius") {
    var temperatureInKel = temperature + 273.15
    var temperatureInFahr = (temperature * 9/5) + 32

    alert("Temperature in Fahrenheit: " + temperatureInFahr + "\nTemperature in Celcius: " + temperature + "\nTemperature in Kelvin: " + temperatureInKel);

} else if (temperatureUnit === "kelvin") {
    var temperatureInCel = (temperature - 273.15)
    var temperatureInFahr = (temperature - 273.15) * 9/5 + 32

    alert("Temperature in Fahrenheit: " + temperatureInFahr + "\nTemperature in Celcius: " + temperatureInCel + "\nTemperature in Kelvin: " + temperature);
} else {
    alert("Invalid value!");
};*/




// part 3 + part 4
/*var temperature = Number(prompt("Enter value of temperature"));
var temperatureUnit = prompt("Enter unit of temperature (Fahrenheit, Celcius, Kelvin)").toLowerCase();

//0 - fahrenheit   1 - celcius   2 - kelvin
var temps = []    // can use push but since its only three elements, just manually adding

if (temperatureUnit === "fahrenheit") {
    var temperatureInCel = (temperature - 32) * 5/9;
    var temperatureInKel = (temperature - 32) * 5/9 + 273.15;

    temps = [temperature, temperatureInCel, temperatureInKel];

    alert("Temperature in Fahrenheit: " + temps[0] + "\nTemperature in Celcius: " + temps[1] + "\nTemperature in Kelvin: " + temps[2]);

} else if (temperatureUnit === "celcius") {
    var temperatureInFahr = (temperature * 9/5) + 32
    var temperatureInKel = temperature + 273.15

    temps = [temperatureInFahr, temperature, temperatureInKel];

    alert("Temperature in Fahrenheit: " + temps[0] + "\nTemperature in Celcius: " + temps[1] + "\nTemperature in Kelvin: " + temps[2]);

} else if (temperatureUnit === "kelvin") {
    var temperatureInFahr = (temperature - 273.15) * 9/5 + 32
    var temperatureInCel = (temperature - 273.15)

    temps = [temperatureInFahr, temperatureInCel, temperature];

    alert("Temperature in Fahrenheit: " + temps[0] + "\nTemperature in Celcius: " + temps[1] + "\nTemperature in Kelvin: " + temps[2]);

} else {
    alert("Invalid value!");
};

console.log(temps);  // to check what is stored in the array

if (temps[1] <= 0) {
    alert("Ooh.. It's COLD out.");
} else if (temps[1] >= 40 && temps[1] < 100) {
    alert("Ooh.. It's HOT out.")
} else if (temps[1] >= 100) {
    alert("You're literally boiling!");
} else {   /// anything between 1-39
    alert("Normal weather");
}*/


// ..... + part 6 + part 7
// decided to change array to object instead
while (true) {
    var choice = Number(prompt("Enter 1 to Convert Temperature. \nEnter 0 to Exit."))

    if (choice === 1) {

        var temperature = Number(prompt("Enter value of temperature"));
        var temperatureUnit = prompt("Enter unit of temperature (Fahrenheit, Celcius, Kelvin)").toLowerCase();

        var temps = {} // creating an object for temperatures

        if (temperatureUnit === "fahrenheit") {
            temps["Fahrenheit"] = temperature;
            temps["Celcius"] = (temperature - 32) * 5/9;
            temps["Kelvin"] = (temperature - 32) * 5/9 + 273.15;

        } else if (temperatureUnit === "celcius") {
            temps["Fahrenheit"] = (temperature * 9/5) + 32;
            temps["Celcius"] = temperature;
            temps["Kelvin"] = temperature + 273.15;

        } else if (temperatureUnit === "kelvin") {
            temps["Fahrenheit"] = (temperature - 273.15) * 9/5 + 32;
            temps["Celcius"] = (temperature - 273.15);
            temps["Kelvin"] = temperature;

        } else {
            alert("Invalid value!");
        };

        console.log(temps);  // to check what is stored in the array

        // loop through the object and output it
        for (var key in temps) {
            alert(key + ": " + temps[key]);
            //console.log(temps[i]);
        }

        if (temps.Celcius <= 0) {
            alert("Ooh.. It's COLD out.");
        } else if (temps.Celcius > 0 && temps.Celcius < 40) {
            alert("Normal weather :D");
        } else if (temps.Celcius >= 40 && temps.Celcius < 100) {
            alert("Ooh.. It's HOT out.")
        } else if (temps.Celcius >= 100) {
            alert("You're literally boiling!");
        }
    } else if (choice === 0){
        break;
    }
}