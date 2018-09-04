/* Formulas you will need
temperature = temperatureInFahr - 32; //fahr to deg
temperatureInFahr = temperature + 32; //deg to fahr
temperatureInKelv = (5*(temperatureInFahr - 32))/9  + 273; //fahr to kel
temperatureInFahr = (9*(temperatureInKelv - 273))/5 + 32; //kel to fahr
temperatureInKelv = temperature + 273; //deg to kel
temperature = temperatureInKelv - 273; //kel to deg */

//Part 1
temperatureInFahr = prompt("Please enter a temperature in Fahrenheit:");
temperature = temperatureInFahr - 32;
temperatureInKelv = (5*(temperatureInFahr - 32))/9  + 273;
console.log(temperature); //represents degrees
console.log(temperatureInKelv);
