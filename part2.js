var temperature = prompt("What is the temperature in Degrees?");
var temperatureUnit = prompt("What temperature unit? kelvin/celsius/fahrenheit *case sensitive")

temperature = parseFloat(temperature);

if(temperatureUnit === "kelvin"){
    var celsius = temperature - 273;
    var fahrenheit = celsius*9/5 + 32;
    alert(temperature + " K = "+ celsius + " C = " + fahrenheit + " F ");
}else if(temperatureUnit === "celsius"){
    var kelvin = temperature + 273;
    var fahrenheit = 9/5*temperature + 32;
    alert(temperature + " C = "+ fahrenheit + " F = " + kelvin + " K ");
}else{
    var celsius = 5/9*(temperature-32);
    var kelvin = celsius + 273;
    alert(temperature + " F = "+ celsius + " C = " + kelvin + " K ");
}

