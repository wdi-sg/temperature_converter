/* Formulas you will need
temperature = temperatureInFahr - 32; //fahr to deg
temperatureInFahr = temperature + 32; //deg to fahr
temperatureInKelv = (5*(temperatureInFahr - 32))/9  + 273; //fahr to kel
temperatureInFahr = (9*(temperatureInKelv - 273))/5 + 32; //kel to fahr
temperatureInKelv = temperature + 273; //deg to kel
temperature = temperatureInKelv - 273; //kel to deg */

//Part 2
temperatureRead = prompt("Please enter a temperature:");
temperatureUnit = prompt("Please enter a temperature unit","Fahrenheit, Celsius, or Kelvin");

if (temperatureUnit === "Fahrenheit"){
  temperatureInFahr = parseInt(temperatureRead)
  // F to C
  temperatureInDeg = parseInt(temperatureRead) - 32;
  // F to K
  temperatureInKelv = (5*(parseInt(temperatureRead) - 32))/9  + 273;
  console.log(temperatureInDeg + "°C ");
  console.log(temperatureInKelv + "K");
}

else if (temperatureUnit === "Celsius"){
  temperatureInDeg = parseInt(temperatureRead);
  // C to F
  temperatureInFahr = parseInt(temperatureRead) + 32;
  // C to K
  temperatureInKelv = parseInt(temperatureRead) + 273;
  console.log(temperatureInFahr + "° F ");
  console.log(temperatureInKelv + "K");
}

else if (temperatureUnit === "Kelvin"){
  temperatureInKelv = parseInt(temperatureRead);
  // K to F
  temperatureInFahr = (9*(parseInt(temperatureRead) - 273))/5 + 32;
  // K to C
  temperatureInDeg = parseInt(temperatureRead) - 273;
  console.log(temperatureInFahr + "° F ");
  console.log(temperatureInDeg + "°C ");
}

else{
  alert("Incorrect Unit");
}
