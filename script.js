var temp, unit

var alertTemp = function () {
    alert('Please enter a temperature below.');
}

var alertUnit = function () {
    alert('Next, enter a temperature unit (i.e. Farenheit/ Celsius/ Kelvin).');
}

var alertName = function () {
    alert('Lastly, enter your name.');
}

alertTemp();

var secondInput = 0;
var temp, unit, name;

var inputHappened = function(currentInput) {
    var notInteger = isNaN(parseInt(currentInput))

    if (secondInput === 0) {
        if(notInteger) {
            return "Please enter a valid number.";
        } else {
            secondInput = 1;
            temp = currentInput;
            alertUnit();
        }

    } else if (secondInput === 1) {
        unit = currentInput;
        alertName();
        return calcTemp(temp, unit);

    } else {
        name = currentInput;
        secondInput = 0;
        return clothing(name, temp)
    }
};

var calcTemp = function (temp, unit) {
    var farenheit, celsius, kelvin;

    if (unit.toLowerCase() === 'farenheit') {
        secondInput = 2;
        celsius = (temp - 32) * (5/9);
        kelvin = (temp - 32) * (5/9) + 273.15;
        return `${temp}F = ${celsius}C = ${kelvin}K. ` + weather(celsius);

    } else if (unit.toLowerCase() === 'celsius') {
        secondInput = 2;
        farenheit = (temp * (9/5)) + 32;
        kelvin = temp + 273.15;
        return `${temp}C = ${farenheit}F = ${kelvin}K. ` + weather(temp);

    } else if (unit.toLowerCase() === 'kelvin') {
        secondInput = 2;
        farenheit = (temp - 273.15) * (9/5) + 32;
        celsius = temp - 273.15;
        return `${temp}K = ${farenheit}F = ${celsius}C. ` + weather(celsius);
    } else {
        return 'Please enter a valid temperature unit.';
    }
}

var weather = function(celsius) {
    if (celsius < 0) {
        return "Ooh it's cold out.";
    } else if (celsius > 40 && celsius <= 100) {
        return "Ooh it's hot out.";
    } else if (celsius > 100) {
        return "You're literally boiling!";
    } else {
        return "It's fine out!";
    }
}

var clothing = function(name, celsius) {
    if (celsius < -10) {
        return `Don't go outside if you want to live, ${name}.`;
    } else if (celsius < -5 && celsius >= -10) {
        return `Put on a heavy jacket and toe warmers, ${name}.`
    } else if (celsius < 0 && celsius >= -5) {
        return `Put on a heavy jacket, ${name}.`;
    } else if (celsius >= 0 && celsius < 10) {
        return `Put on a sweater and jacket, ${name}.`;
    } else if (celsius >= 10 && celsius < 20) {
        return `Put on sweater, ${name}.`;
    } else if (celsius >= 20 && celsius <= 40) {
        return `Put on shorts and a shirt, ${name}.`;
    } else if (celsius > 40 && celsius <= 50) {
        return `Put on a swimsuit, ${name}.`;
    } else if (celsius > 50 && celsius <= 100) {
        return `Put on nothing, ${name}.`
    } else {
        return `Don't go outside if you want to live, ${name}.`;
    }
}