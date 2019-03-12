var temperature = prompt("What is the temperature?");
var temperatureUnit = prompt("What is the temperature's unit? Key in 'C', 'F', or 'K'.");
console.log( "The temperature to be converted is " + temperature + temperatureUnit );

//alert("The temperature to be converted is " + temperature + temperatureUnit);

//convert to Celsius = (F-32)/1.8 OR K-273.15
//convert to Kelvin = ((F-32)/1.8)+273.15 OR C+273.15
//convert to Fahrenheit = (C*1.8)+32 OR ((K-273.15)*1.8)+32
//Print as: 32° F = 0°C = 273.15K

//if temperatureUnit is C, convert to F and K, then print both
//else if temperatureUnit is F, convert to C and K, then print both
//else if temperatureUnit is K, convert to C and F, then print both
//else prompt for unit again

if (temperatureUnit === "C" || temperatureUnit === "c") {
    var output1 = (temperature*1.8)+32;
    var output2 = temperature+273.15;
    document.getElementById("tempF").innerHTML = output1;
    document.getElementById("tempC").innerHTML = temperature;
    document.getElementById("tempK").innerHTML = output2;
}
else if (temperatureUnit === "F" || temperatureUnit === "f") {
    console.log("hello")
    var output1 = (temperature-32)/1.8;
    var output2 = ((temperature-32)/1.8)+273.15;
    document.getElementById("tempF").innerHTML = temperature;
    document.getElementById("tempC").innerHTML = output1;
    document.getElementById("tempK").innerHTML = output2;
}
else if (temperatureUnit === "K" || temperatureUnit === "k") {
    var output1 = temperature-273.15;
    var output2 = ((temperature-273.15)*1.8)+32;
    document.getElementById("tempF").innerHTML = output2;
    document.getElementById("tempC").innerHTML = output1;
    document.getElementById("tempK").innerHTML = temperature;
}
else {
    var temperatureUnit = alert("Please key in temperature's unit as 'C', 'F', or 'K'.");
};

var STARTING_TEMP = parseFloat(temperature);
var CONVERTED_TEMP_1 = parseFloat(output1);
var CONVERTED_TEMP_2 = parseFloat(output2);

var temps = [ STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2 ];
console.log(temps)

if (temperature < 0) {
    document.getElementById("howCold").innerHTML = "ooh it's cold out!";
} else if (temperature > 40 && temperature < 100) {
    document.getElementById("howCold").innerHTML = "ooh it's hot out!";
} else  if (temperature >= 100) {
    document.getElementById("howCold").innerHTML = "your're literally boiling!";
}