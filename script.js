/* Formulas you will need
temperature = temperatureInFahr - 32; //fahr to deg
temperatureInFahr = temperature + 32; //deg to fahr
temperatureInKelv = (5*(temperatureInFahr - 32))/9  + 273; //fahr to kel
temperatureInFahr = (9*(temperatureInKelv - 273))/5 + 32; //kel to fahr
temperatureInKelv = temperature + 273; //deg to kel
temperature = temperatureInKelv - 273; //kel to deg */

//Part 4
var temperatureInFahr;
var temperatureInDeg;
var temperatureInKelv;
var temperatureRead;

var temps = []; //F C K
temperatureRead = prompt("Please enter a temperature:");
temperatureUnit = prompt("Please enter a temperature unit","Fahrenheit, Celsius, or Kelvin");

if (temperatureUnit === "Fahrenheit"){
  // F to C
  temperatureInDeg = parseInt(temperatureRead) - 32;
  // F to K
  temperatureInKelv = (5*(parseInt(temperatureRead) - 32))/9  + 273;

  temps = [parseInt(temperatureRead), temperatureInDeg, temperatureInKelv];
  console.log(temps[1] + "°C ");
  console.log(temps[2] + "K");
  printMessage(temps[1])
}

else if (temperatureUnit === "Celsius"){
  // C to F
  temperatureInFahr = parseInt(temperatureRead) + 32;
  // C to K
  temperatureInKelv = parseInt(temperatureRead) + 273;

  temps = [temperatureInFahr, parseInt(temperatureRead), temperatureInKelv];
  console.log(temps[0] + "° F ");
  console.log(temps[2] + "K");
  printMessage(temps[1])
}

else if (temperatureUnit === "Kelvin"){
  // K to F
  temperatureInFahr = (9*(parseInt(temperatureRead) - 273))/5 + 32;
  // K to C
  temperatureInDeg = parseInt(temperatureRead) - 273;

  temps = [temperatureInFahr, temperatureInDeg, parseInt(temperatureRead)];
  console.log(temps[0] + "° F ");
  console.log(temps[1] + "°C ");
  printMessage(temps[1])
}

else{
  alert("Incorrect Unit");
}

function printMessage() {
  if (temperatureInDeg < 0){
    console.log("ooh it's cold out");
  }
  else if (temperatureInDeg > 40 && temperatureInDeg <= 100){
    console.log("ooh it's hot out");
  }
  else if (temperatureInDeg > 100){
    console.log("your literally boiling");
  }
}
