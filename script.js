var temperatureInFahr=prompt("Please enter a starting temperature.","In Farenheit");
alert(temperatureInFahr);
parseInt(temperatureInFahr);

var temperatureInDegrees =(temperatureInFahr-32)*5/9;
var temperatureInKelvin =(temperatureInFahr+459.67)*5/9;
alert(temperatureInDegrees + " degrees");
alert(temperatureInKelvin+" kelvin");
