console.log("hello script js");

//alert("Please enter a numerical temperature & temperature unit");

var tempConvert = function() {
	var inputN = document.getElementById("input").value;
	var x = document.getElementById("tempUnit").selectedIndex;
	var y = document.getElementById("tempUnit").options;
	var unit = y[x].text;
	var farenToCel = Math.round((inputN - 32) * 5/9*100)/100;
	var farenToKel = Math.round((inputN - 32) * 5/9*100)/100 + 273.15;
	var celToFaren = "celToFaren";
	var celToKel = "celToKel";
	var kelToFaren = "kelToFaren";
	var kelToCel = "kelToCel";
	if (unitN = "Farenheit") {
		var log = farenToCel +"°C = " + farenToKel +"°K";
	} else if (unitN = "Celcius") {
		var log = "celToFaren" +"°F = " + "celToKel" +"°K";
	} else {
		var log = "kelToFaren" +"°F = " + "kelToCel" +"°C";
	}
	var output = inputN + "°" + unit +"= "+input;
	document.getElementById("output").innerHTML = output;
	return output;
}