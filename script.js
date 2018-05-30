//prompt user for starting temperature in fahrenheit and save as variable
//Changed to starting temperature (numerical value only) 
var temp = prompt("Please enter temperature.");
var tempUnit = prompt("Please state temperature unit. (C=Celcius/F=Fahrenheit/K=Kelvin)")
var tempFahr; 
var tempKelvin; 
var tempCelcius; 


if (tempUnit === "C") {
    tempFahr = Math.round((temp * 1.8) * 32);
    tempKelvin = Math.round(temp + 273.15);
    console.log(temp + tempUnit + " = " + tempFahr + "F = " + tempKelvin + "K");
} 
else if (tempUnit === "F") {
    tempCelcius = Math.round((temp - 32) / 1.8);
    tempKelvin = Math.round((temp + 459.67) * (5/9));
    console.log(temp + tempUnit + " = " + tempCelcius + "C = " + tempKelvin + "K");
}  
else { 
    tempCelcius = Math.round(temp - 273.15);
    tempFahr = Math.round((temp * (9/5))-459.67);
    console.log(temp + tempUnit + " = " + tempCelcius + "C = " + tempFahr + "F");
}



