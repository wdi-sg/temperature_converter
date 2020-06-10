

var temperature = prompt("Please enter temperature in Fahrenheit");

var fah_to_cel = function(temperature){
  temp_cel = (temperature − 32) × 5/9
  return temp_cel;
};

var fah_to_kel = function(temperature){
  temp_kel = (temperature − 32) × 5/9 + 273.15
  return temp_kel;
};

console.log(fah_to_cel, fah_to_kel);



var temp = prompt("Please enter temperature");
var tempUnit = prompt("Please enter temperature unit (Fahrenheit, Celsius, or Kelvin)");

if( tempUnit == "Fahrenheit"){
  tempOriginal = temp
  tempC = (temp − 32) × 5/9
  tempK = (temp − 32) × 5/9 + 273.15
  output = temp +"° F = "+ tempC + " °C = " + tempK + "K"
}
else if (temperatureUnit == "Celsius"){
  tempOriginal = temp
  tempF = (temp x (9/5)) + 32
  tempK = temp + 273.15
  output = temp +"°C = "+ tempF + " ° F = " + tempK + "K"
}
else if (temperatureUnit == "Kelvin"){
  tempOriginal = temp
  tempC = temp - 273.15
  tempF = (temp - 273.15) x(9/5) + 32
  output = temp +"K = "+ tempC + " °C = " + tempF + "° F"
}
else{
  output = "units does not fall under ahrenheit, Celsius, or Kelvin ):"
}


  return output;
};

/*i not exactly sure how to join part 3 output with part 2*/
if (tempC < 0){
  print("ooh it's cold outside")
}
else if (tempC > 100){
  print("your literally boiling")
}
else {
  print("ooh it's hot outside")
}

/*why should the clothing require the name of the user as a prompt ?_?*/
var nameUser = prompt("Please enter name");
print("dont go outside without mask")