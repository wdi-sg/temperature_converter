var input = prompt(" Key in the value of Temperature In Fahr.(Eg.85)");
var temperatureInFahr = parseInt(input)
var celsius = (temperatureInFahr - 32) * (5/9)
console.log(celsius.toFixed(3))
var kelvin = ((temperatureInFahr -32) * (5/9) + 273.15)
console.log(kelvin.toFixed(3))

var input2 = prompt(" Key in the value of Temperature(Eg.28)");
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
	var x = parseInt(input2)
	var results = console.log(x + "F = " + FahrToCelsius(x).toFixed(3) + "C = " + FahrToKelvin(x).toFixed(3) + "K")
}else if(input3 === "celsius"){
	var x = parseInt(input2)
	var results = console.log(CelsiusToFahr(x) + "F = " + x + "C = " + CelsiusToKelvin(x).toFixed(3) + "K")
}else if(input3 === "kelvin"){
	var x = parseInt(input2)
	var results = console.log(KelvinToFahr(x).toFixed(3) + "F = " + KelvinToCelsius(x).toFixed(3) + "C = " + x + "K")
}else{
	console.log("Invalid input. Please try again.")
}


