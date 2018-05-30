// prompt temp 
var temp = parseInt(prompt("Input temperature"), 10);

// prompt unit
var tempUnit = prompt("Specify Unit eg. C , K or F")


// converting Celsius
if (tempUnit == "C") {
	var tempInFar = (temp * (9 / 5) + 32);  // to Fahrenheit
	var tempInKel = (temp + 273.15); // to Kelvin
	var result = temp + " " + tempUnit + " = " + tempInFar + " F" + " = " + tempInKel + " K"
	console.log(result);
	alert(result);
}  
// converting Kelvin
else if (tempUnit == "K") {
	var tempInFar = (temp * (9 / 5) - 459.67);
	var tempInCel = (temp - 273.15)
	var result = temp + " " + tempUnit + " = " + tempInFar + " F" + " = " + tempInCel + " C"
	console.log(result);
	alert(result);
}
// converting Fahrenheit
else {
	var tempInCel = (temp - 32 * (5 / 9))
	var tempInKel = (temp + 459.67 * (5 / 9))
	var result = temp + " " + tempUnit + " = " + tempInCel + " C" + " = " + tempInKel + " K"
	console.log(result);
	alert(result);
};
