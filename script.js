// Part 1
//var temperatureInFahr = prompt(temperatureInFahr);
//temperattureInCelcius = (temperatureInFahr - 32)/18
//temperattureInKelvin = ((temperatureInFahr - 32)/1.8) + 273.15
//console.log(temperattureInCelcius);
//console.log(temperattureInKelvin);

// Part 2
var temperature = prompt(temperature);
var temperatureUnit = prompt(temperatureUnit);
var temperatureFahr;
var temperatureCelcius;
var temperatureKelvin;

if (temperatureUnit == 'Fahrenheit') {
temperatureFahr= temperature;
temperatureCelcius= (temperature - 32)/18;
temperatureKelvin = ((temperature - 32)/1.8) + 273.15;
}

else if (temperatureUnit == 'Celcius') {
temperatureCelcius= temperature;
temperatureFahr= (temperature *1.8) + 32;
temperatureKelvin = temperature + 273.15;
}

else {
temperatureKelvin= temperature;
temperatureCelcius= temperature - 273.15;
temperatureFahr = ((temperature - 273.15) * 1.8) + 32;
}

//console.log(temperatureFahr + "F" + "=" + temperatureCelcius + "C" + "=" + temperatureKelvin + "K");

// Part 3
var temps = [temperature, temperatureFahr, temperatureCelcius, temperatureKelvin];
//console.log(temps[0], temps[1]+"F", temps[2]+"C", temps[3]+"K");

// Part 4
if (temps[2] < 0){
	console.log("ooh it's cold out");
}

else if (temps[2] > 40){
	console.log("ooh it's hot out");
}

else if (temps[2] > 100){
	console.log("your literally boiling");
}

// Part 5
var name = prompt(name);
var clothes = [
 'nothing',
 'swimsuit',
 'shorts and shirt',
 'sweater',
 'sweater + jacket',
 'heavy jacket',
 'heavy jacket and toe warmers',
 'dont go outside if you want to live'
];
console.log(name + " " + "should put on" + " " + clothes[1]);

// Part 6

