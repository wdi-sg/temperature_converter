

   /* temperatureInFahr = parseInt(temperatureInFahr)

if (!Number.isInteger(temperatureInFahr)) {
    alert ("ERROR! NAN!");
}
*/

var unit;
var temperature;
var userName;
var temps;

var askMeAnything = function () {
        unit = prompt("Please enter a temperature unit(celsius, farenheit or kelvin: ");
        unit = unit.toLowerCase();
        temperature = parseInt(prompt("Please enter the temperature: "), 10); // radix or praseFloat
        temps = [temperature];

        userName = prompt("Please enter your name: ");

        innerWorkings();
        whileQuitter();
}


var whileQuitter = function () {
    var response = prompt("Continue? Press n to quit or y to continue: ");
    response = response.toLowerCase();

    while (response !== 'n' && response !== 'y'){
        response = prompt("Continue? Press n to quit or y to continue: ");
        response = response.toLowerCase();
    }

    if (response === 'n')
        prompt("User ends program");
    else
        askMeAnything();
};


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

var whatToWear = function () {
    // random wear!
    var wear = Math.floor(Math.random () * clothes.length);

    console.log("HI! " + userName + ". You should wear: " + clothes[wear]);
};


var displayOutput = function (temp) { // converted to celsius

    if (temp < '0')
        console.log('oooh it\'s cold out');
    else if (temp > '40')
        console.log("oooh it's hot out");
    else if (temp > '100')
        console.log("your literally boiling");
    else
        console.log("self-destruct please");

    // give some friendly advice
    whatToWear();

    // display converted temperatures
    for (var i = 0; i < temps.length; i++)
        console.log(`converted temperatures: ${temps[i]}`);
};

var kelvinToFarenheit = function (temp) {
    return (9/5 * (temp - 273) + 32);
};

var farenheitToKelvin = function (temp) {
    return (5/9 * (temp - 32) + 273);
};

var farenheitToCelsius = function (temp) {
     return (farenheitToKelvin(temp) - 273);
};

var celsiusToFarenheit = function (temp) {
    return kelvinToFarenheit(temp + 273);
};

var innerWorkings = function () {
    var celsius;

    if (unit === 'celsius') {
        temps.push(temperature - 273); // celsius to kelvin
        temps.push(celsiusToFarenheit(temperature)); // celsius to farenheit

        console.log("temperature is " + temperature + " degrees celsius");

        // so it's easier to show celsius first
        displayOutput(temperature);

    } else if (unit === 'farenheit') {
        console.log("temperature is " + temperature + " degrees farenheit");
        celsius = farenheitToCelsius(temperature); // conversion farenheit to celsius

        temps.push(celsius); // farenheit to celsius
        temps.push(farenheitToKelvin(temperature)); // push into array kelvin value

        // so it's easier to show celsius first
        displayOutput(celsius);

    } else if (unit === 'kelvin') {
        console.log("temperature is "+ temperature + " Kelvin");
        // conversion to celsius = kelvin - 273
        celsius = temperature - 273;

        temps.push(celsius);
        temps.push(kelvinToFarenheit(temperature)); // convert to farnheit and push return value into array

        // so it's easier to show celsius first
        displayOutput(celsius);
    }
}

// to start it all
askMeAnything();

//TODO: make use of temperature unit for display







