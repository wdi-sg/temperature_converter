console.log("hello script js");

// get temperature - in fahrenheit

// convert input (fahrenheit) to celsius

// output fahrenheit and celsius

// input (fahrenheit) --> output (celsius) and output (fahrenheit)

// var output = convertToCelsius( 15 ) // will equal to ...

var defaultPrompt = 'Enter temperature';
document.querySelector('#output').innerText = defaultPrompt;

var defaultState = {
    inputTemperature : 0,
    inputUnit : '',
    state : 0,
}
/*

Prompt for temperature

Prompt for temperatureUnit -> Fahrenheit/Celsius/Kelvin

Keep temperature and temperatureUnit as global variable

Convert temperature to the other two units

Output sample -> 32˚F = 0˚C = 273.15K

*/

var inputTemperature = 0;
var inputUnit = '';
var state = 0;
var username = '';

// cycle thru steps
// get temp
// get unit
// invoke conversion
// return values in a string
var promptUser = function(input){
    switch (state) {
        case 0:
            state++;
            inputTemperature = input;
            return 'Enter unit of measure'
            break;
        case 1:
            state++;
            inputUnit = input;
            return 'Enter your name';
            break;
        case 2:
            state++;
            var username = input;
            var converted = convertInput(inputUnit);
            var suggestion = temperatureCheck(inputTemperature);
            return `${converted}\n${username} ${suggestion}.\nEnter any key to start again.`;
            break;
        case 3:
            state = defaultState.state;
            inputTemperature = defaultState.inputTemperature;
            inputUnit = defaultState.inputUnit;
            return defaultPrompt;
            break;
    }
}

var convertCelsiusToKelvin = function(temperature){
    var kelvin = temperature + 273.15;
    return kelvin;
}

var convertFahrenheitToCelsius = function(temperature){
    var celsius = (temperature - 32) * (5 / 9)
    return celsius;
}

var convertCelsiusToFahrenheit = function(temperature){
    var fahrenheit = temperature * 1.8 + 32;
    return fahrenheit;
}

var convertKelvinToCelsius = function(temperature){
    var celsius = temperature - 273.15;
    return celsius;
}

var convertInput = function(input){
    input = input.toLowerCase();
    switch(input) {
        case 'fahrenheit':
            var celsius = convertFahrenheitToCelsius(inputTemperature);
            var kelvin = convertCelsiusToKelvin(celsius);
            return `${inputTemperature}\xB0F = ${celsius}\xB0C = ${kelvin}K`;
            break;
        case 'celsius':
            var kelvin =  convertCelsiusToKelvin(inputTemperature);
            var fahrenheit = convertCelsiusToFahrenheit(inputTemperature);
            return `${inputTemperature}\xB0C = ${fahrenheit}\xB0F = ${kelvin}K`;
            break;
        case 'kelvin':
            var celsius = convertKelvinToCelsius(inputTemperature);
            var fahrenheit = convertCelsiusToFahrenheit(celsius);
            return `${inputTemperature}K = ${celsius}\xB0C = ${fahrenheit}\xB0F`;
            break;
    }
}


// gives clothing suggestions with regards to temperature in Celsius
var temperatureCheck = function(input){
    if (input > 100) {
        return 'don\'t go outside if you want to live';
    } else if (input > 40) {
        return 'should wear nothing';
    } else if (input > 30) {
        return 'should wear a swimsuit';
    } else if (input > 20) {
        return 'should wear shorts and a shirt';
    } else if (input > 15) {
        return 'should wear a sweater';
    } else if (input > 10) {
        return 'should wear sweater \+ jacket';
    } else if (input > 5) {
        return 'should wear a heavy jacket';
    } else if (input > 2) {
        return 'should wear a heavy jacket and toe warmers';
    } else {
        return 'don\'t go outside if you want to live';
    }
}

// use input to prompt user and reset input value
var inputHappened = function(currentInput){
  console.log( currentInput );
  var output = promptUser(currentInput);
  document.querySelector('input').value = '';
  return output;
};