var temperatureInFahr;
var temperatureCelsius;
var temperatureKelvin;

temperatureInFahr = prompt("please enter the temperature in fahr");
temperatureCelsius = (temperatureInFahr-32)*(5/9);
temperatureKelvin = temperatureCelsius+273;
//document.getElementById("line").textContent("temperature celcius: "+temperatureCelsius+ " termperature kelvin: "+temperatureKelvin);

console.log(temperatureCelsius);
console.log(temperatureKelvin);