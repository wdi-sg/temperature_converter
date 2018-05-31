//Part 1
var temperatureInFahr = prompt('Key in Temperature');//Prompt temperature in F
var tempF=parseInt(temperatureInFahr)// Conver str to int
var tempD=(tempF-32)/1.8; // Convertion of F to C
console.log('The fahrenheit is'+' '+ tempF); //Print Fahrenheit
console.log('The degree is'+' '+ tempD); //Print Degree
//Part 2
var temp = prompt('Key in temperature');//value entered in degree
var temperature = parseInt(temp)//convert str to int
var temperatureUnit = prompt('Choose Fahrenheit, Celsius or Kelvin');


var fahrenheit=function(){
  var valueF = (temperature*1.8)-32;
  console.log('The fahrenheit is'+' '+ valueF);
}
var celsius=function(){
  console.log('The degree is'+' '+temperature);
}
var kelvin=function(){
  var valueK = temperature + 273.15;
  console.log('The kelvin is'+' '+ valueK)
}

if (temperatureUnit=='Faherenheit'){
  celsius();
  kelvin();
}else if(temperatureUnit=='Celsius'){
  fahrenheit();
  kelvin();
}else if(temperatureUnit=='Kelvin'){
  fahrenheit();
  celsius();
}else{
  alert('Error, invaild request');
}
