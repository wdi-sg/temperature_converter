var temperature = prompt("What is the temperature?")
var temperatureUnit = prompt("What unit is the temperature in?")

if (temperatureUnit === "fahrenheit") {
    // console.log("The Temperature in Kelvin is " + (5/9 * (temperature - 32) + 273))
    // console.log("The Temperature in Celcius is " + (5/9 * (temperature - 32)))
    var temps = [temperature, (5 / 9 * (temperature - 32) + 273), (5 / 9 * (temperature - 32))]
    console.log(temps)
    console.log("The Temperature in Kelvin is " + temps[1] + " and the Temperature in Celcius is " + temps[2])
    if (temps[2] < 0) {
        console.log("ooh it's cold out")
    } else if (temps[2] > 40) {
        console.log("ooh it's hot out")
    } else if (temps[2] > 100) {
        console.log("you're literally boiling")
    } else {
        console.log("you're fine!")
    }
} else if (temperatureUnit === "celcius") {
    // console.log("The Temperature in Fahrenheit is " + (9/5 * (temperature - 32) + 32))
    // console.log("The Temperature in Kelvin is " + (temperature + 273))
    var temps = [temperature, (9 / 5 * (temperature - 32) + 32), (temperature + 273)]
    console.log(temps)
    console.log("The Temperature in Kelvin is " + temps[2] + " and the Temperature in Fahrenheit is " + temps[1])
    if (temps[0] < 0) {
        console.log("ooh it's cold out")
    } else if (temps[0] > 40) {
        console.log("ooh it's hot out")
    } else if (temps[0] > 100) {
        console.log("you're literally boiling")
    } else {
        console.log("you're fine!")
    }
} else if (temperatureUnit === "kelvin") {
    // console.log("The Temperature in Fahrenheit is " + (9/5 * (temperature - 273) + 32))
    // console.log("The Temperature in Celcius is " + (temperature - 273))
    var temps = [temperature, (9 / 5 * (temperature - 273) + 32), (temperature - 273)]
    console.log(temps)
    console.log("The Temperature in Fahrenheit is " + temps[1] + " and the Temperature in Celcius is " + temps[2])
    if (temps[2] < 0) {
        console.log("ooh it's cold out")
    } else if (temps[2] > 40) {
        console.log("ooh it's hot out")
    } else if (temps[2] > 100) {
        console.log("you're literally boiling")
    } else {
        console.log("you're fine!")
    }
} else {
    console.log("check your temperature unit input")
}