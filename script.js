var input = prompt(" Key in the value of Temperature In Fahr.(Eg. 85)");
var temperatureInFahr = parseInt(input)
var celsius = (temperatureInFahr - 32) * (5/9)
console.log(celsius.toFixed(3))
var kelvin = ((temperatureInFahr -32) * (5/9) + 273.15)
console.log(kelvin.toFixed(3))