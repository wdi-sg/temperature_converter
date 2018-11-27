var temperature = prompt("Please input the temperature:");
var tempNum = Number(temperature); //change string to number and store in var tempInFahr
    console.log(tempNum);

var temperatureUnit = prompt("Please key in the Unit (farenheit, celsius or kelvin) :");
    console.log(temperatureUnit);

function tempFahr(){
    var tempInCelsius = ((tempNum - 32) / 1.8); //convert to Celcius
    var tempInKelvin = ((tempNum - 32) / 1.8) + 273.15; //convert to Kelvin

     alert("You have key in " + tempNum + "\u2109" + "\nTemperature in Celcius is " + tempInCelsius.toFixed(2) + "\u2103"+ "\nTemperature in Kelvin is " + tempInKelvin.toFixed(2) +"K");
}

function tempCelc() {
    var tempInFahr = (tempNum * 1.8) + 32;
    var tempInKelvin = tempNum + 273.15;

     alert("You have key in " + tempNum +"\u2103" + "\nTemperature in Farenheit is " + tempInFahr.toFixed(1) + "\u2109" + "\nTemperature in Kelvin is " + tempInKelvin.toFixed(2) +"K");

}

function tempKelvin() {
    var tempInFahr = ((tempNum - 273.15) * 1.8) + 32;
    var tempInCelsius = tempNum - 273.15;

    alert("You have key in " + tempNum + "K" + "\nTemperature in Farenheit is " + tempInFahr.toFixed(1) + "\u2109" + "\nTemperature in Celcius is " + tempInCelsius.toFixed(2) + "\u2103");
}

if (temperatureUnit === "farenheit") {
   tempFahr();

} else if (temperatureUnit === "celsius") {
    tempCelc();

} else if (temperatureUnit === "kelvin"){
    tempKelvin();

} else {
    alert("invalid!");
}