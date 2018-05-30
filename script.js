//prompt user for starting temperature in fahrenheit and save as variable
//Changed to starting temperature (numerical value only) 
var temp = prompt("Please enter temperature.");
var tempUnit = prompt("Please state temperature unit. (C=Celcius/F=Fahrenheit/K=Kelvin)")
var tempFahr; 
var tempKelvin; 
var tempCelcius; 
var temps = [];

if (tempUnit === "C") {
    tempFahr = Math.round((temp * 1.8) * 32);
    tempKelvin = Math.round(temp + 273.15);
    temps = [temp, tempFahr, tempKelvin];
    console.log(temps[0] + "C = " + temps[1] + "F = " + temps[2] + "K");
} 
else if (tempUnit === "F") {
    tempCelcius = Math.round((temp - 32) / 1.8);
    tempKelvin = Math.round((temp + 459.67) * (5/9));
    temps = [temp, tempCelcius, tempKelvin];
    console.log(temps[0] + "F = " + temps[1] + "C = " + temps[2] + "K");
}  
else { 
    tempCelcius = Math.round(temp - 273.15);
    tempFahr = Math.round((temp * (9/5))-459.67);
    temps = [temp, tempCelcius, tempFahr];
    console.log(temps[0] + "K = " + temps[1] + "C = " + temps[2] + "F");
}

