var input = prompt(" Key in the value of Temperature In Fahr.(Eg.85)");
var temperatureInFahr = parseInt(input)
var celsius = (temperatureInFahr - 32) * (5/9)
console.log(celsius.toFixed(3))
var kelvin = ((temperatureInFahr -32) * (5/9) + 273.15)
console.log(kelvin.toFixed(3))

var STARTING_TEMP = prompt(" Key in the value of Temperature number");
var input3 = prompt(" Key in the Temperature Unit (fahr,celsius or kelvin.)");
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
if (input3 === "fahr"){
	var temps = [parseInt(STARTING_TEMP), FahrToCelsius(parseInt(STARTING_TEMP)).toFixed(3), FahrToKelvin(parseInt(STARTING_TEMP)).toFixed(3)]
	console.log(temps[0] + "F = " + temps[1] + "C = " + temps[2] + "K")
}else if(input3 === "celsius"){
	var temps = [parseInt(STARTING_TEMP), CelsiusToFahr(parseInt(STARTING_TEMP)).toFixed(3), CelsiusToKelvin(parseInt(parseInt(STARTING_TEMP))).toFixed(3)]
	console.log(temps[0] + "C = " + temps[1] + "F = " + temps[2] + "K")
}else if(input3 === "kelvin"){
	var temps = [parseInt(STARTING_TEMP), KelvinToFahr(parseInt(STARTING_TEMP)).toFixed(3), KelvinToCelsius(parseInt(STARTING_TEMP)).toFixed(3)]
	console.log(temps[0] + "K = " + temps[1] + "F = " + temps[2] + "C")
}else{
	console.log("Invalid input. Please try again.")
}


