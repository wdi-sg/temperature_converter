//P1. log temperature in Kelvin and Celsius
var temperatureInFahr = prompt("Enter your temperature in Fahrenheit");

var temperatureInCelsius = 5 / 9 * (temperatureInFahr - 32);
var temperatureInKelvin = temperatureInCelsius + 273;

console.log(temperatureInCelsius + "Celsius");
console.log(temperatureInKelvin + "Kelvin");

//P2.

var temperature = prompt("Enter your temperature");
var temperatureUnit = prompt("Which temperature unit did you use - F, C or K?");

console.log("Start temperature is" temperature + temperatureUnit =);

//P3. Conditionals to do convertion based on temp unit
var f;
var c;
var k;
var temps = [];

if (temperatureUnit === "Fahrenheit") {
    f = temperature;
    c = 5 / 9 * (temperatureInFahr - 32);
    k = (temperatureInCelsius + 273);
    temps.push (f + "Fahrenheit");
    temps.push (c + "Celsius");
    temps.push (k + "Kelvin");
    }
else if (temperatureUnit === "Celsius") {
    f = 9 / 5 * (temperature + 32);
    c = temperature;
    k = temperature + 273;
    temps.push (f + "Fahrenheit");
    temps.push (c + "Celsius");
    temps.push (k + "Kelvin");
    }
else if (temperatureUnit === "Kelvin") {
    f = 9 / 5 * (temperature - 273);
    c = (temperature - 273);
    k = temperature;
    temps.push (f + "Fahrenheit");
    temps.push (c + "Celsius");
    temps.push (k + "Kelvin");
    }

else console.log('Please enter farenheit, celsius or kelvin for the temperature unit.');

if (temps.length === 3) {
console.log(`${temps[0]} = ${temps[1]} = ${temps[2]}`);
}

//P4. Alert Messages
if (c < 0)
    { alert("ooh it's cold out");
} else if (c > 40)
    { alert("ooh it's hot out"); }
} else if (c > 100)
    { alert("your literally boiling"); }


//P5. Name and Choice of Clothes
var Name = prompt("Enter your name");
var statement = "You should be wearing:" + " " +

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

if (c < -20 || c > 45)
    console.log(clothes[7]);
if (c >= -20 && c < -10)
    console.log(clothes[6]);
if (c >= -10 && c < 0)
    console.log(clothes[5]);
if (c >= 0 && c < 10)
    console.log(clothes[4]);
if (c >= 10 && c < 15)
    console.log(clothes[3]);
if (c >= 15 && c < 30)
    console.log(clothes[2]);
if (c >= 30 && c < 40)
    console.log(clothes[1]);
if (c >= 40)
    console.log(clothes[0]);

//P6 and P7


