var temperatureInKelvin;
var temperatureInCelcius;
var temperatureInFahr;


var temperature = prompt("What is the temperature?");
temperature = parseInt(temperature)
var temperatureUnit = prompt("What is the temperature Unit?", "F, Deg C or K");
 	
	if (temperatureUnit != ('F' || 'Deg C' || 'K')) {
 		prompt("Answer using the following Inputs ", "F, Deg C or K")
 	}

 	else if (temperatureUnit == "F") {
 		temperatureInKelvin = temperature + 255.372 + "K" ;
 			console.log(temperatureInKelvin);
 		temperatureInCelcius =  temperature - 17.7778  + " Deg C" ;
 			console.log(temperatureInCelcius);
 	}

 	else if (temperatureUnit == "Deg C") {
 		temperatureInKelvin = temperature + 273.15 + "K" ;
 			console.log(temperatureInKelvin);
 		temperatureInFahr =  temperature + 32  + "F" ;
 			console.log(temperatureInFahr);
 	}

 	 else if (temperatureUnit == "K") {
 		temperatureInCelcius = temperature - 273.15 + " Deg C" ;
 			console.log(temperatureInKelvin);
 		temperatureInFahr =  temperature - 459.67  + "F" ;
 			console.log(temperatureInFahr);
 	}

 