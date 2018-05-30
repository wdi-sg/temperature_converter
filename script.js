var input = prompt(" Key in the value of Temperature In Fahr.(Eg.85)");
var temperatureInFahr = parseInt(input)
var celsius = (temperatureInFahr - 32) * (5/9)
console.log(celsius.toFixed(3))
var kelvin = ((temperatureInFahr -32) * (5/9) + 273.15)
console.log(kelvin.toFixed(3))

var input2 = prompt(" Key in the value of Temperature(Eg.28)");
var input3 = prompt(" Key in the Temperature Unit (fahr,celsius or kelvin.)");
if (input3 === "fahr"){
	var temperatureInFahr = parseInt(input2)
	var celsius = (temperatureInFahr - 32) * (5/9)
	var kelvin = ((temperatureInFahr -32) * (5/9) + 273.15)
	console.log(input2 + "F = " + celsius.toFixed(3) + "C = " + kelvin.toFixed(3) + "K")
}else if(input3 === "celsius"){
	var temperatureInCelsius = parseInt(input2)
	var fahr = ((temperatureInCelsius * 9/5) + 32)
	var kelvin = (temperatureInCelsius + 273.15)
	console.log(fahr + "F = " + input2 + "C = " + kelvin.toFixed(3) + "K")
}else if(input3 === "kelvin"){
	var temperatureInKelvin = parseInt(input2)
	var fahr = ((temperatureInKelvin - 273.15) * 9/5 +32)
	var celsius = (temperatureInKelvin - 273.15)
	console.log(fahr.toFixed(3) + "F = " + celsius.toFixed(3) + "C = " + input2 + "K")
}else{
	console.log("Invalid input. Please try again.")
}

/*
var temperatureInCelsius = parseInt(input2)
var fahr = ((temperatureInCelsius * 9/5) + 32)
var kelvin = (temperatureInCelsius + 273.15)
function Fahrinput(){
	console.log(input2 + "F = " + celsius.toFixed(3) + "C = " + kelvin.toFixed(3) + "K")
}
function Celsiusinput(){
	console.log(fahr + "F = " + input2 + "C = " + kelvin.toFixed(3) + "K")
}
function Kelvininput(){
	console.log(fahr + "F = " + celsius.toFixed(3) + "C = " + input2 + "K")
}

if (input3 === "fahr"){
	Fahrinput(input2, input3);
}else if(input3 === "celsius"){
	Celsiusinput(input2, input3);
}else if(input3 === "kelvin"){
	Kelvininput(input2, input3);
}else{
	console.log("Invalid input. Please try again.")
}
*/
