var STARTING_TEMP= prompt("Enter a starting temperature");
var temperatureUnit = prompt("Enter the temperature unit","Either in K, F or Celcius");
parseInt(STARTING_TEMP);
if(temperatureUnit == "K")
{
	parseInt(STARTING_TEMP);
	var temperatureInFarenheit =(STARTING_TEMP*9/5)-459.67;
	var temperatureInCelcius = STARTING_TEMP- 273.15;
	CONVERTED_TEMP_1= temperatureInFarenheit;
	CONVERTED_TEMP_2=temperatureInCelcius;
	var temps = [ STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2 ];
	console.log(temps[0]+" "+temperatureUnit+" "+ temps[1]+" Farenheit "+ temps[2]+ " Celcius")
}

else if (temperatureUnit == "F")
{
	parseInt(STARTING_TEMP);
	var temperatureInCelcius =(STARTING_TEMP-32)*5/9;
	var temperatureInKelvin =(STARTING_TEMP+459.67)*5/9;
	CONVERTED_TEMP_1= temperatureInKelvin;
	CONVERTED_TEMP_2=temperatureInCelcius;
	var temps = [ STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2 ];
	console.log(temps[0]+" "+temperatureUnit+" "+ temps[1]+
		 " kelvin"+ temps[2]+ " Celcius")

}

else
{
parseInt(STARTING_TEMP);
var temperatureInKelvin= STARTING_TEMP+273.15;
var temperatureInFarenheit= ((STARTING_TEMP*1.8)+32);
CONVERTED_TEMP_1= temperatureInKelvin;
CONVERTED_TEMP_2=temperatureInFarenheit;
var temps = [ STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2 ];
console.log(temps[0]+" "+temperatureUnit+" "+ temps[1]+
		 " kelvin "+ temps[2]+ " Farenheit")
}

