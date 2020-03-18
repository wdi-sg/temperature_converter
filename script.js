// Initialise global variables

var temp;
var unit;
var username;



// Starting instructions

document.querySelector('#input').placeholder = "Start?"

document.querySelector('#output').innerText =
`Temperature Converter

- converts between all temperature units -
- start by inputting YES -`;



// Helper functions

var clearInput = function() {
    document.querySelector('#input').value = "";
}



// Helper functions to convert temperature between units

var celToFahr = function (temp, unit) {
  if (unit === 'celsius') {
    return (Math.floor(((temp * 9/5) + 32) * 100) / 100).toFixed(1);
}
return (Math.floor(((temp - 32) * 5/9) * 100) / 100).toFixed(1);
}

var celToKelvin = function(temp, unit) {
  if (unit === 'celsius') {
    return (Math.floor((temp - 273.15) * 100) / 100).toFixed(1);
}
return (Math.floor((temp + 273.15) * 100) / 100).toFixed(1);
}



// Helper functions to generate messages for the user

var message = function(temp) {
  if (temp < 0) {
    return "ooh it's cold out."
} else if (temp > 100) {
    return "you are literally boiling."
} else if (temp > 40) {
    return "ooh it's hot out."
} else {
    return "the weather is not bad today."
}
}

var clothes = function(temp, username) {
  if (temp > -40 && temp < -20) {
    return `${username}, you should wear a heavy jacket and toe warmers.`
} else if (temp < -10) {
    return `${username}, you should wear a heavy jacket.`
} else if (temp < 0) {
    return `${username}, you should wear a sweater and a jacket.`
} else if (temp < 10) {
    return `${username}, you should wear a sweater.`
} else if (temp < 20) {
    return `${username}, you should wear shorts and a shirt.`
} else if (temp < 30) {
    return `${username}, you should wear a swimsuit.`
} else if (temp < 40) {
    return `${username}, you should wear nothing.`
} else {
    return `${username}, don't go outside it you want to live.`
}
}



// Actual function

var inputHappened = function(currentInput) {
    if (currentInput.toLowerCase() === 'yes') {
        clearInput();

        temp = prompt("Please enter a temperature");
        while (parseInt(temp).toString() !== temp) {
            alert("Please enter a valid temperature");
            temp = prompt("Please enter a temperature");
        }
        temp = parseInt(temp);

        unit = prompt("Please enter a temperature unit");
        while (unit !== 'fahrenheit' && unit !== 'celsius' && unit !== 'kelvin') {
            alert("Please enter a valid temperature unit");
            unit = prompt("Please enter a temperature unit");
        }

        var fahrenheit;
        var celsius;
        var kelvin;

        switch (unit) {
            case 'fahrenheit':
                fahrenheit = temp;
                celsius = celToFahr(temp, unit);
                kelvin = celToKelvin(celsius, 'celsius');
                break;

            case 'celsius':
                celsius = temp;
                fahrenheit = celToFahr(temp, unit);
                kelvin = celToKelvin(temp, unit);
                break;

            case 'kelvin':
                kelvin = temp;
                celsius = celToKelvin(temp, unit);
                fahrenheit = celToFahr(celsius, 'celsius');
        }

        username = prompt("Please enter your name");

        var output =
        `${fahrenheit}°F = ${celsius}°C = ${kelvin}K
        ${message(celsius)}
        ${clothes(celsius, username)}`;

        return output;
    }
};