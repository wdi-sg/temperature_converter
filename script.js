console.log("hello script js");

//alert("Please enter a numerical temperature & temperature unit");

var tempConvert = function() {
	var inputN = document.getElementById("input").value;
	var x = document.getElementById("tempUnit").selectedIndex;
	var y = document.getElementById("tempUnit").options;
	var unit = y[x].text;
	console.log(unit);
	var farenToCel = Math.round((inputN - 32) * 5/9*10)/10;
	var farenToKel = farenToCel + 273.2;
	var celToFaren = Math.round(inputN*9/5*10)/10+32;
	var celToKel = parseInt(inputN) + 273.2;
	var kelToFaren = Math.round((inputN-273.2)*9/5*10)/10+32;
	var kelToCel = inputN - 273.2;
	var log;
	switch (unit) {
		case "Farenheit":
		log = farenToCel +"°C = " + farenToKel +"°K"
		break;
		case "Celcius":
		log = celToFaren +"°F = " + celToKel +"°K"
		break;
		case "Kelvin":
		log = kelToFaren +"°F = " + kelToCel +"°C"
		break;
	}



	/*if (unit = "Farenheit") {
		var log = farenToCel +"°C = " + farenToKel +"°K";
	} else if (unit = "Celcius") {
		var log = celToFaren +"°F = " + celToKel +"°K";
	} else {
		var log = kelToFaren +"°F = " + kelToCel +"°C";
	}*/
	var output = inputN + "°" + unit +"= "+log
	document.getElementById("output").innerHTML = output;
	return output;
}