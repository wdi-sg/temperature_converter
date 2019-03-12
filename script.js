var userTemperatureInFahr = prompt("What's the temperature in Fahrenheit?");
console.log(userTemperatureInFahr);
alert(userTemperatureInFahr);

/* when user inputs value, convert value from fahrenheit to kelvin and celsius */
var temperatures = {
	Fahrenheit: parseInt(userTemperatureInFahr),
	Kelvin: ((parseInt(userTemperatureInFahr)-32)/1.8)+273.15,
	celsius: (parseInt(userTemperatureInFahr)-32)/1.8
};
