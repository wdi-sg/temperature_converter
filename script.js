
var temperature = prompt("Enter the temperature to convert?");
var temperatureUnit = prompt
("What unit of temperature are you measuring? Choose either Fahrenheit, Celsius, or Kelvin")


if (temperatureUnit === "celsius") {

   // console.log("The Temperature in Fahrenheit is " + (9/5 * (temperature - 32) + 32))
   // console.log("The Temperature in Kelvin is " + (temperature + 273))

    var temps = [temperature, ((9/5 * (temperature - 32) + 32), (temperature + 273)]
    console.log(temps)

} else if (temperatureUnit === "kelvin") {
    //console.log("The Temperature in Fahrenheit is " + (9/5 * (temperature - 273) + 32))
    //console.log("The Temperature in Celsius is " + (temperature - 273))

    var temps = [temperature, (9/5 * (temperature - 273) + 32), (temperature - 273)]
    console.log(temps)

} else if (temperatureUnit === "fahrenheit") {

    //console.log("The Temperature in Kelvin is " + (5/9 * (temperature - 32) + 273))
    //console.log("The Temperature in Celsius is " + (5/9 * (temperature - 32)))

    var temps = [temperature, (5/9 * (temperature - 32) + 273), (5/9 * (temperature - 32))]
    console.log(temps)

} else {

    console.log ("Please check your temperature entry")
}
