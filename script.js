// Let User to enter desired temperature and it's value
var name = prompt("What is your name?")
var temperature = prompt ("Please enter the temperature value");
var temperatureUnit = prompt ("Please enter fahrenheit, celsius or kelvin");

// Ignore the case, so later we won't be confused inside function with === operator
var temperatureUnit = temperatureUnit.toLowerCase();

// Creating an array for current converted temperature
var temps = [];

// Defining function, return for every User output, including weird stuff with ERROR message
var convertTemp = function() {
if (temperatureUnit === "celsius") {
        var celsiusCels = "Celsius = " + temperature;
        var celsiusKelvin = "Kelvin = " + Math.floor(((temperature * 1) + 273.15));
        var celsiusFahr = "Fahrenheit = " + Math.floor(((temperature * 1.8) + 32));

//creating variable for future exersize
        var celsiusOne = temperature;

// Using push method to add data inside the array
        temps.push(celsiusOne, celsiusKelvin, celsiusFahr);

console.log(celsiusCels, celsiusKelvin, celsiusFahr);

    } else if (temperatureUnit === "fahrenheit") {
        var fahrenheitFahr = "Fahrenheit = " + temperature;
        var fahrenheitKelvin = "Kelvin = " + Math.floor((temperature - 32) / 1.8 + 273.15);
        var fahrenheitCels = "Celsius = " + Math.floor((temperature - 32) / 1.8);

//creating variable for future exersize
        var celsiusTwo = Math.floor((temperature - 32) / 1.8)
        temps.push(celsiusTwo, fahrenheitFahr, fahrenheitKelvin);

console.log(fahrenheitFahr, fahrenheitCels, fahrenheitKelvin);

        } else if (temperatureUnit === "kelvin") {
            var kelvinKelv = "Kelvin = " + temperature;
            var kelvinFahr = "Fahrenheit = " + Math.floor((temperature - 273.15) * 1.8 + 32);
            var kelvinCels = " Celsius = " + Math.floor(temperature - 273.15);

//creating variable for future exersize
            var celsiusThree = Math.floor(temperature - 273.15);

            temps.push(celsiusThree, kelvinKelv, kelvinFahr);

console.log(kelvinKelv, kelvinFahr, kelvinCels);

        }else {

console.log("Please, enter Fahrenheit, Celsius or Kelvin ")

        }
};

convertTemp();
console.log(temps);

/* to avoid below code, every .push method always incert CELSIUS first, so we can access the celsius no matter
what user typed in
if (temperature <= 0 && temperatureUnit === "celsius" ||
temperature <= 32 && temperatureUnit === "fahrenheit" ||
temperature <= 273.15 && temperatureUnit = "kelvin")
*/
console.log(temps[0]);
/*
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

if (temps[0] <= 0) {
    console.log("ooh its cold out");
    console.log(name + " "  + "you should wear " + clothes[6]);

    } else if (temps[0] > 40 && temps[0] < 100) {
    console.log("ooh it's hot out");
    console.log(name + " "  + "you should wear " + clothes[2]);

    }else if (temps[0] > 100) {
    console.log ("You are literally burning!");
    console.log(name + " "  + "you should wear " + clothes[0]);

} else {
    console.log("Probably, you better not to leave home");
};
*/







