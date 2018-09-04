/**
 * This program converts a temperature in Fahrenheit, Celsius or Kelvin to the other two units.
 * @author Liang Xin Chloe <nliangxin@gmail.com>
 */

var name;
var temperature;
var temperatureUnit;
var temperatures;

name = prompt('What is your name?');

// Ask the user for temperature conversions until the user hits 'q'.
while (true) {
  temperature = prompt('Please enter a numerical value that represents degrees.\n' +
                       'Enter q to quit');

  if (temperature === 'q') {
    console.log('Bye');
    break;
  }

  temperatureUnit = prompt('Please enter unit: fahrenheit, celsius, or kelvin');
  temperature = Number(temperature);

  if (temperature) {
    if (temperatureUnit === 'fahrenheit' ||
        temperatureUnit === 'kelvin' ||
        temperatureUnit === 'celsius') {
      setTemperaturesFromUnit(temperature, temperatureUnit);
      displayTemperatures(temperatures);
      printMessage(temperatures[2]);
      printClothes(temperatures[2]);
    } else {
      console.log('Invalid unit');
    }
  } else {
    console.log('The temperature is not a number.');
  }
}

/**
 * Calculate temperatures in the other two units based on a given unit.
 * @param {number} temp     The temperature entered by user.
 * @param {string} tempUnit The temperature unit entered by user.
 */
function setTemperaturesFromUnit(temp, tempUnit) {
  var tempFahr;
  var tempKelvin;
  var tempCelsius;

  if (tempUnit === 'fahrenheit') {
    tempFahr = temp;
    tempKelvin = ((5 / 9) * (temperature - 32) + 273.15).toFixed(2);
    tempCelsius = ((5 / 9) * (temperature - 32)).toFixed(2);
  } else if (tempUnit === 'kelvin') {
    tempFahr = ((temperature - 273.15) * (9 / 5) + 32).toFixed(2);
    tempKelvin = temp;
    tempCelsius = (temperature - 273.15).toFixed(2);
  } else if (tempUnit === 'celsius') {
    tempFahr = (temperature * (9 / 5) + 32).toFixed(2);
    tempKelvin = (temperature + 273.15).toFixed(2);
    tempCelsius = temp;
  } else {
    console.log('Invalid temperature unit');
  }

  addTemperatures(tempFahr, tempKelvin, tempCelsius);
}

/**
 * Add temperatures in three units into an array.
 * @param {number} tempFahr    The temperature in Fahrenheit.
 * @param {number} tempKelvin  The temperature in Kelvin.
 * @param {number} tempCelsius The temperature in Celsius.
 */
function addTemperatures(tempFahr, tempKelvin, tempCelsius) {
  temperatures = [];
  temperatures.push(tempFahr);
  temperatures.push(tempKelvin);
  temperatures.push(tempCelsius);
}

/**
 * Display temperatures in Fahrenheit, Kelvin, and Celsius.
 * @param {number[]} temperatures The temperatures in Fahrenheit, Kelvin, and Celsius.
 */
function displayTemperatures(temperatures) {
  var i;

  console.log('Temperatures in Fahrenheit, Kelvin and Celsius is: ');

  for (i = 0; i < temperatures.length; i++) {
    console.log(temperatures[i]);
  }
}

/**
 * Print a message based on the temperature in Celsius.
 * @param {number} tempCelsius The temperature in Celsius.
 */
function printMessage(tempCelsius) {
  if (tempCelsius < 0) {
    console.log('ooh it\'s cold out');
  }

  if (tempCelsius > 40) {
    console.log('ooh it\'s hot out');
  }

  if (tempCelsius > 100) {
    console.log('you\'re literally boiling');
  }
}

/**
 * Suggest user the type of clothing they should wear.
 * @param {number} tempCelsius The temperature in Celsius.
 */
function printClothes(tempCelsius) {
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
  var message = 'Hey ' + name + ', ';
  var index;

  if (tempCelsius > 50) {
    index = 0;
  } else if (tempCelsius > 40) {
    index = 1;
  } else if (tempCelsius > 30) {
    index = 2;
  } else if (tempCelsius > 20) {
    index = 3;
  } else if (tempCelsius > 10) {
    index = 4;
  } else if (tempCelsius > 0) {
    index = 5;
  } else if (tempCelsius > -10) {
    index = 6;
  } else {
    index = 7;
  }

  message = index === 7 ? clothes[index] : 'you should wear ' + clothes[index];

  console.log(message);
}
