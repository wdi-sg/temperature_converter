var temperature = prompt("What is the temperature in Degrees?");
var temperatureUnit = prompt("What temperature unit? kelvin/celsius/fahrenheit *case sensitive")

temperature = parseFloat(temperature);

if(temperatureUnit === "kelvin"){
    var celsius = temperature - 273;
    var fahrenheit = celsius*9/5 + 32;
    var temps = [temperature, celsius, fahrenheit];
        alert(temps[0] + " K = "+ temps[1] + " C = " + temps[2] + " F ");

}else if(temperatureUnit === "celsius"){
    var kelvin = temperature + 273;
    var fahrenheit = 9/5*temperature + 32;
    var temps = [temperature, fahrenheit, kelvin];
    alert(temps[0] + " C = "+ temps[1] + " F = " + temps[2] + " K ");
}else{
    var celsius = 5/9*(temperature-32);
    var kelvin = celsius + 273;
    var temps = [temperature, celsius, kelvin];
    alert(temps[0] + " F = "+ temps[1] + " C = " + temps[2] + " K ");
}


