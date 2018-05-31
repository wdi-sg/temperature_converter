var STARTING_TEMP= prompt("Enter a starting temperature");
var temperatureUnit = prompt("Enter the temperature unit","Either in K, F or Celcius");
var STARTING_TEMP_1= parseInt(STARTING_TEMP);
if(temperatureUnit == "K")
{
	var temperatureInFarenheit =(STARTING_TEMP_1*9/5)-459.67;
	var temperatureInCelcius = STARTING_TEMP_1- 273.15;
	STARTING_TEMP= STARTING_TEMP_1 + "Kelvin "
	CONVERTED_TEMP_1= temperatureInFarenheit +" Farenheit ";
	CONVERTED_TEMP_2=temperatureInCelcius+" Celcius";
	var temps = [ STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2 ];
	for (i=0; i< temps.length; i++)
	{
	temps[i];
	console.log(temps[i])
	}

}

else if (temperatureUnit == "F")
{
	var temperatureInCelcius =(STARTING_TEMP_1-32)*5/9;
	var temperatureInKelvin =(STARTING_TEMP_1+459.67)*5/9;
	STARTING_TEMP= STARTING_TEMP_1 + "Farenheight ";
	CONVERTED_TEMP_1= temperatureInKelvin+ " kelvin ";
	CONVERTED_TEMP_2=temperatureInCelcius+ " Celcius";
	var temps = [ STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2 ];
	for (i=0; i< temps.length; i++)
	{
	temps[i];
	console.log(temps[i])
	}	
}

else
{
var temperatureInKelvin= STARTING_TEMP_1+273.15;
var temperatureInFarenheit= ((STARTING_TEMP_1*1.8)+32);
STARTING_TEMP= STARTING_TEMP_1 + " Celcius ";
CONVERTED_TEMP_1= temperatureInKelvin+ " kelvin ";
CONVERTED_TEMP_2=temperatureInFarenheit+ " Farenheit";
var temps = [ STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2 ];
for (i=0; i< temps.length; i++)
	{
	temps[i];
	console.log(temps[i])
	}
}

