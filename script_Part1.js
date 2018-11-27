var userInput1 = prompt("Input temperature in fahrenheit")*1;
var fahrenheit1 = userInput1;
var celsius1 = Math.round(((fahrenheit1 - 32) / 1.80) * 10) / 10;
var kelvin1 = Math.round(((5 / 9) * (fahrenheit1 - 32) + 273.15) * 10);
alert(fahrenheit1 + "\xB0 F = " + celsius1 + "\xB0C = " + kelvin1 + "K");