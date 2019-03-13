var temperatureInFahr = prompt("What's the temperature in Fahrenheit?");
console.log(temperatureInFahr);

var temperatureInCelsius = (temperatureInFahr-32) * (5/9);
var temperatureInKelvin = temperatureInCelsius + 273.15;

alert("The temperature in celsius is "+temperatureInCelsius+"c."+" "+"While the temperature in kelvin is "+temperatureInKelvin+"k.");

var temperature = prompt("What is the temperature in (any) degrees?")
console.log(temperature);

var temperatureInUnit = prompt("Now what unit will this temperature take? Choose between Fahrenheit, kelvin, and celsius.")
console.log(temperatureInUnit);

/* Apologies, I stayed to try and finish the deliverable but spent too much time trying to work out how to use a for..in loop 
(which still doesn't work...). I didn't manage to finish this part. I would have used boolean expressions to compare the 
input from the user and then to use that as the prompt JS to generate the relevant answers depending on that input.

Hence, starting by defining the variables for Fahrenheit, kelvin and celsius, using parseInt() to define the numerical values 
ane produce a mathematical expression. Then using these defined variables in the if, else if, else statement to generate the relevant 
output. */ 