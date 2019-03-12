
//Part 1
var temperatureInFahr = prompt("What's the temperature in Fahrenheit?");
console.log(temperatureInFahr);

var temperatureInCelsius = (temperatureInFahr-32) * (5/9);
var temperatureInKelvin = temperatureInCelsius + 273.15;

alert("The temperature in celsius is "+temperatureInCelsius+"°C."+" "+"While the temperature in kelvin is "+temperatureInKelvin+"K.");

//Part 2
var temperature = prompt("What is the temperature in (any) degrees?")
console.log(temperature);

var temperatureInUnit = prompt("Now, what unit will this temperature take? (If in fahrenheit, use 'f'; if in celsius, use 'c'; if in kelvin, use 'k'.)" );
console.log(temperatureInUnit);

//reset
temperatureInKelvin = 0;
temperatureInCelsius = 0;
temperatureInFahr = 0;
temperature = parseFloat(temperature);
console.log(typeof(temperature));

//A: convert Fahr to Celsius function
var convertFahrToCelsius = function(temperature){
  temperatureInCelsius = ((temperature-32)*(5/9));
  return temperatureInCelsius;
};
//B: convert fahr to kelvin function
var convertFahrToKelvin = function(temperature){
  temperatureInKelvin = (temperature-32)*(5/9)+273.15;
  //console.log(typeof(temperatureInKelvin));
  return temperatureInKelvin;
};
//C: convert kelvin to celsius function
var convertKelvinToCelsius = function(temperature){
  temperatureInCelsius = (temperature-273.15);
  return temperatureInCelsius;
};
//D: convert kelvin to fahr function
var convertKelvinToFahr = function(temperature){
  temperatureInFahr = (temperature-273.15) * 9/5 + 32;
  return temperatureInFahr;
};
//E: convert celsius to fahr function
var convertCelsiusToFahr = function(temperature){
  temperatureInFahr = (temperature * 9/5) + 32;
  return temperatureInFahr;
};
//F: convert celsius to kelvin function
var convertCelsiusToKelvin = function(temperature){
  temperatureInKelvin = (temperature + 273.15);
  return temperatureInKelvin;
};

//console.log(temperatureInUnit);
var smartConvert = function(){
  if (temperatureInUnit == ("f" || "F" || "Fahrenheit" || "fahrenheit")){
    //convertFahrToKelvin;
    //convertFahrToCelsius;
    alert(temperature+"° F"+" = "+convertFahrToCelsius(temperature)+"°C"+" = "+convertFahrToKelvin(temperature)+"K");
    //console.log(temperature+"° F"+" = "+ convertFahrToCelsius+"°C"+" = "+convertFahrToKelvin+"K");
  } else if (temperatureInUnit == ("c" || "C" || "celsius" || "Celsius")){
    //convertCelsiusToFahr;
    //convertCelsiusToKelvin;
    alert(convertCelsiusToFahr(temperature)+"° F"+" = "+temperature+"°C"+" = "+convertCelsiusToKelvin(temperature)+"K");
    //console.log(convertCelsiusToFahr+"° F"+" = "+temperature+"°C"+" = "+convertCelsiusToKelvin+"K");
  }else if (temperatureInUnit == ("k" || "K" || "kelvin" || "Kelvin")){
    //convertKelvinToFahr;
    //convertKelvinToCelsius;
    alert(convertKelvinToFahr(temperature)+"° F"+" = "+convertKelvinToCelsius(temperature)+"°C"+" = "+temperature+"K");
    //console.log(convertKelvinToFahr+"° F"+" = "+convertKelvinToCelsius+"°C"+" = "+temperature+"K");
  }else{
    alert("Could you please not break my code?");
  }//create a loop here when free so that user can re-do
};

smartConvert();

//Part 3
var temps =[];
  if (temperatureInUnit == ("f" || "F" || "Fahrenheit" || "fahrenheit")){
  temps = [temperature,convertFahrToCelsius(temperature),convertFahrToKelvin(temperature)];
}else if (temperatureInUnit == ("c" || "C" || "celsius" || "Celsius")){
  temps = [convertCelsiusToFahr(temperature), temperature, convertCelsiusToKelvin(temperature)];
}else if (temperatureInUnit == ("k" || "K" || "kelvin" || "Kelvin")){
  temps = [convertKelvinToFahr(temperature), convertKelvinToCelsius(temperature),temperature];
} else {
  console.log("Something is wrong with the temps array, or user did not input");
}

console.log(temps[0], temps[1], temps[2]);

//Part 4, assuming we use degrees celsius
if (temps[1]<0){
  alert("Brrr... It is cold outside....br..");
}else if (temps[1]>40){
  alert("Oh, its HOT outside!");
}else if (temps[1]>100){
  alert("You are literally boiling OMG!");
}
