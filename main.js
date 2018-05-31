var temps;

var STARTING_TEMP;
var tempUnit;

function printTemps() {
	for (var i = 0; i < temps.length; i++) {
		console.log(temps[i]);
	}
}

function f2c(c) {
	return (c - 32) * (5/9);
}

function f2k(c) {
	return (c + 459.67) * (5/9);
}

function k2f(c) {
	return c * (9/5) - 459.67;
}

function k2c(c) {
	return c - 273.15;
}

function c2f(c) {
	return c * 1.8 + 32;
}

function c2k(c) {
	return c + 273.15;
}

function tempConvert() {
	if (tempUnit === "Fahrenheit" || tempUnit === "fahrenheit") {
		temps = [STARTING_TEMP + " Fahrenheit", f2c(STARTING_TEMP) + " Celsius", f2k(STARTING_TEMP) + " Kelvin"];

	} else if (tempUnit === "Kelvin" || tempUnit === "kelvin") {
		temps = [k2f(STARTING_TEMP) + " Fahrenheit", + k2c(STARTING_TEMP) + " Celsius", + STARTING_TEMP + " Kelvin"];

	} else if (tempUnit === "Celsius" || tempUnit === "celsius") {
		temps = [c2f(STARTING_TEMP) + " Fahrenheit", + STARTING_TEMP + " Celsius", + c2k(STARTING_TEMP) + " Kelvin"];
	}
	printTemps();
};


function app() {
	var inputStr = prompt("Enter temperature");
	if (inputStr !== "") {
	    STARTING_TEMP = parseFloat (inputStr);
	    tempUnit = prompt ("Fahrenheit, Celsius, or Kelvin?");
	    tempConvert();
	    app();
	}
}
app();








