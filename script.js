
//exercise 1, enter temperature in fahrenheit and return celsius and kelvin
console.log("hello!");
console.log("exercise 1")

var temperatureInFahr;
var temperatureInCelsius;
var temperatureInKelvin;

var fahrToCelsius = function(temperatureInFahr){
    var temperatureInCelsius = (temperatureInFahr - 32)* 5 / 9;
    return temperatureInCelsius
};

var celsiusToKelvin = function(temperatureInCelsius){
    var temperatureInKelvin = temperatureInCelsius + 273;
    return temperatureInKelvin
};

var kelvinToFahrenheit = function(temperatureInKelvin){
    var temperatureInFahr = 9/5*(temperatureInKelvin - 273) + 32;
    return temperatureInFahr
}

/*var temperatureInFahr = prompt("Please enter your temperature in Farenheit");

console.log("Your temperature in Celsius is " + fahrToCelsius(temperatureInFahr));
console.log("Your temperature in Kelvin is " + celsiusToKelvin(fahrToCelsius(temperatureInFahr)));
*/

console.log(kelvinToFahrenheit(celsiusToKelvin(32)));

/*exercise part 2, enter temperature in either fahrenheit, kelvin or celsius and reuturn the remaining
using the functions that was defined in exercise part 1
*/
console.log("exercise 2")

function tempConverter(temperature, temperatureUnit)
//this function prints to console and returns an array in the form of [fahrenheit, celsius, kelvin]
{
    if (temperatureUnit === "fahrenheit"){

        var celsius = fahrToCelsius(temperature);
        var kelvin = celsiusToKelvin(fahrToCelsius(temperature));

        var array = [temperature, celsius, kelvin];

        console.log("Your temperature is\nFahrenheit: " + array[0] + "\nCelsius: " + array[1] + "\nKelvin: " + array[2]);

        return array;
    }


    else if (temperatureUnit === "kelvin"){

        var fahrenheit = kelvinToFahrenheit(temperature);
        var celsius = fahrToCelsius(kelvinToFahrenheit(temperature));

        var array = [fahrenheit, celsius, temperature];

        console.log("Your temperature is\nFahrenheit: " + array[0] + "\nCelsius: " + array[1] + "\nKelvin: " + array[2]);
        return array;
    }

    else if (temperatureUnit === "celsius") {

        var kelvin = celsiusToKelvin(temperature);

        var fahrenheit = kelvinToFahrenheit(celsiusToKelvin(temperature));

        //not sure why this does not produce the values when both values should be the same
        console.log(kelvinToFahrenheit(celsiusToKelvin(temperature)));
        console.log(kelvinToFahrenheit(celsiusToKelvin(32)));

        var array = [fahrenheit, temperature, kelvin];

        console.log("Your temperature is\nFahrenheit: " + array[0] + "\nCelsius: " + array[1] + "\nKelvin: " + array[2]);
        return array;
    }

    else {
        console.log("You have entered the wrong unit");

    };
};

var temperature = prompt("Please enter your temperature");
var temperatureUnit = prompt("Please enter your unit, e.g. fahrenheit, kelvin, celsius");


tempConverter(temperature, temperatureUnit);

//exercise 3

console.log("exercise 3")

var temps =[]
var convertedTemps = tempConverter(temperature, temperatureUnit);//this function returns an array

var temps = convertedTemps;
console.log(temps); //array of converted temperatures


//exercise 4
console.log("exercise 4")

console.log("The temperature is " + temps[1] + " celsius");

function commentTemperature(){
   if (temps[1] < 0 ){
        console.log("oh it's cold out");
    }
    else if (temps[1] >= 40 && temps[1] <100){
        console.log("ooh it's hot out");
    }

    else if (temps[1] >= 100){
        console.log("your literally boiling hot");
    }

    else{
        console.log("The weather is nice");
    };
    };

commentTemperature();

//exercise 5
console.log("exercise 5")

var name = prompt("What is your name?")

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

function commentClothing(){
   if (temps[1] < 0 ){
        console.log(name + " , you should wear " + clothes[6]);
    }
    else if (temps[1] >= 40 && temps[1] <100){
        console.log(name + " , you should wear " + clothes[1]);
    }

    else if (temps[1] >= 100){
        console.log(name + " , you should wear " + clothes[7]);
    }

    else{
        console.log(name + " , you should wear a " + clothes[2]);
    };
    };

commentClothing();

//exercise 6
console.log("exercise 6")








