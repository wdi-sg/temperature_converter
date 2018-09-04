/* Formulas you will need
temperature = temperatureInFahr - 32; //fahr to deg
temperatureInFahr = temperature + 32; //deg to fahr
temperatureInKelv = (5*(temperatureInFahr - 32))/9  + 273; //fahr to kel
temperatureInFahr = (9*(temperatureInKelv - 273))/5 + 32; //kel to fahr
temperatureInKelv = temperature + 273; //deg to kel
temperature = temperatureInKelv - 273; //kel to deg */

//Part 6
var temperatureInFahr, temperatureInDeg, temperatureInKelv, temperatureRead;
var name;

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

var temps = []; //F C K
temperatureRead = prompt("Please enter a temperature:");
temperatureUnit = prompt("Please enter a temperature unit:","Fahrenheit, Celsius, or Kelvin");
name = prompt("Please enter your name:");

if (temperatureUnit === "Fahrenheit"){
  // F to C
  temperatureInDeg = parseInt(temperatureRead) - 32;
  // F to K
  temperatureInKelv = (5*(parseInt(temperatureRead) - 32))/9  + 273;

  temps = [parseInt(temperatureRead) + "° F ", temperatureInDeg + "°C ", temperatureInKelv + "K"];
  for (var i=0; i < temps.length; i++){
    console.log(temps[i]);
  }
  printMessage(temps[1])
}

else if (temperatureUnit === "Celsius"){
  // C to F
  temperatureInFahr = parseInt(temperatureRead) + 32;
  // C to K
  temperatureInKelv = parseInt(temperatureRead) + 273;

  temps = [temperatureInFahr + "° F ", parseInt(temperatureRead) + "°C ", temperatureInKelv + "K"];
  for (var i=0; i < temps.length; i++){
    console.log(temps[i]);
  }
  printMessage(temps[1])
}

else if (temperatureUnit === "Kelvin"){
  // K to F
  temperatureInFahr = (9*(parseInt(temperatureRead) - 273))/5 + 32;
  // K to C
  temperatureInDeg = parseInt(temperatureRead) - 273;

  temps = [temperatureInFahr + "° F ", temperatureInDeg + "°C ", parseInt(temperatureRead)+ "K"];
  for (var i=0; i < temps.length; i++){
    console.log(temps[i]);
  }
  printMessage(temps[1])
}

else{
  alert("Incorrect Unit");
}

function printMessage(){
  if (temperatureInDeg < 0){
    console.log("ooh it's cold out");
    console.log(name + ", You are advised to wear " + clothes[6]);
  }
  else if (temperatureInDeg > 40 && temperatureInDeg <= 100){
    console.log("ooh it's hot out");
    console.log(name + ", You are advised to wear " + clothes[0]);
  }
  else if (temperatureInDeg > 100){
    console.log("your literally boiling");
    console.log(name + ", You are advised to wear " + clothes[7]);
  }
}
