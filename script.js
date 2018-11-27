var temperature = prompt("Please input the temperature (farenheit):");
var tempInFahr = parseInt(temperature); //change string to number and store in var tempInFahr
    console.log(tempInFahr);

var tempInCelsius = ((tempInFahr - 32) / 1.8); //convert to Celcius
var tempInKelvin = (((tempInFahr - 32) / 1.8) + 273.15); //convert to Kelvin

alert("Temperature in degree Celcius is " + tempInCelsius.toFixed(2) + "\nTemperature in Kelvin is " + tempInKelvin.toFixed(2));