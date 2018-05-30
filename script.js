var temperatureInKelvin;
var temperatureInCelcius;
var temperatureInFahr;

var STARTING_TEMP = prompt("What is the temperature?");
STARTING_TEMP = parseInt(STARTING_TEMP)
var temperatureUnit = prompt("What is the temperature Unit?", "F, Deg C or K") 
 	
 	
	if (temperatureUnit != 'F' && temperatureUnit !=  'Deg C' && temperatureUnit !=  'K') {
 		prompt("Answer using the following Inputs ", "F, Deg C or K")
 	}

 	if (temperatureUnit == "F") {
 		temperatureInKelvin = (STARTING_TEMP + 459.67) * (5 / 9) + "K" ;
 			console.log(temperatureInKelvin);
 		temperatureInCelcius =  (STARTING_TEMP - 32) *(5/9)  + " Deg C" ;
 			console.log(temperatureInCelcius);
 			CONVERTED_TEMP_1 = temperatureInKelvin;
 			CONVERTED_TEMP_2 = temperatureInCelcius;
 	}

 	if (temperatureUnit == "Deg C") {
 		temperatureInKelvin = STARTING_TEMP + 273.15 + "K" ;
 			console.log(temperatureInKelvin);
 		temperatureInFahr =  (STARTING_TEMP * 1.8) + 32  + "F" ;
 			console.log(temperatureInFahr);
 			CONVERTED_TEMP_1 = temperatureInKelvin;
 			CONVERTED_TEMP_2 = temperatureInFahr;
 	}

 	if (temperatureUnit == "K") {
 		temperatureInCelcius = STARTING_TEMP - 273.15 + " Deg C" ;
 			console.log(temperatureInCelcius);
 		temperatureInFahr =  (STARTING_TEMP * 1.8) - 459.67  + "F" ;
 			console.log(temperatureInFahr);
 			CONVERTED_TEMP_1 = temperatureInCelcius;
 			CONVERTED_TEMP_2 = temperatureInFahr;
 	}


var temps = [ STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2 ]
console.log(temps);

