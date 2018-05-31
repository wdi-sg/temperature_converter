/*
var input = prompt(" Key in the value of Temperature In Fahr.(Eg.85)");
var temperatureInFahr = parseInt(input)
var celsius = (temperatureInFahr - 32) * (5/9)
console.log(celsius.toFixed(3))
var kelvin = ((temperatureInFahr -32) * (5/9) + 273.15)
console.log(kelvin.toFixed(3))
*/



  function FahrToCelsius(x){
  	  return (x - 32) * (5/9)
  }
  function FahrToKelvin(x){
	  return (x - 32) * (5/9) + 273.15
  }
  function CelsiusToFahr(x){
	  return (x * 9/5) + 32
  }
  function CelsiusToKelvin(x){
	  return x + 273.15
  }
  function KelvinToFahr(x){
	  return (x - 273.15) * 9/5 +32
  }
  function KelvinToCelsius(x){
	  return x - 273.15
  }

while (confirm("Ready to start the program?")) {
  var STARTING_TEMP = prompt(" Key in the value of Temperature number")
  var input3 = prompt(" Key in the Temperature Unit (fahr,celsius or kelvin.)")
  if (input3 === "fahr"){
	  var temps = [STARTING_TEMP, FahrToCelsius(parseInt(STARTING_TEMP)).toFixed(3), FahrToKelvin(parseInt(STARTING_TEMP)).toFixed(3)]
	  for (i = 0; i < temps.length; i++){
		  console.log(temps[i] + "F")
		  i = i + 1
		  console.log(temps[i] + "C")
		  i = i + 1
		  console.log(temps[i] + "K")
	  }
  }else if(input3 === "celsius"){
	  var temps = [STARTING_TEMP, CelsiusToFahr(parseInt(STARTING_TEMP)).toFixed(3), CelsiusToKelvin(parseInt(parseInt(STARTING_TEMP))).toFixed(3)]
		  for (i = 0; i < temps.length; i++){
		  console.log(temps[i] + "C")
		  i = i + 1
		  console.log(temps[i] + "F")
		  i = i + 1
		  console.log(temps[i] + "K")
	  }
  }else if(input3 === "kelvin"){
	  var temps = [STARTING_TEMP, KelvinToFahr(parseInt(STARTING_TEMP)).toFixed(3), KelvinToCelsius(parseInt(STARTING_TEMP)).toFixed(3)]
		  for (i = 0; i < temps.length; i++){
		  console.log(temps[i] + "K")
		  i = i + 1
		  console.log(temps[i] + "F")
		  i = i + 1
		  console.log(temps[i] + "C")
	  }
  }else{
	  console.log("Invalid input. Please try again.")
  }
}  





