var temperatureInFahr = prompt("What's the TEMP in Fahrenheit?");
alert( temperatureInFahr );

var temperatureInCel = ((temperatureInFahr - 32) * (5 / 9));
var temperatureInKel = (parseInt(temperatureInCel) + 273.15);

console.log(temperatureInFahr + "Fahrenheit");
console.log(temperatureInCel + "Celcius");
console.log(temperatureInKel + "Kelvin");

var storeTemps = [];
var startingTempUnit = "C";
var startingTemp = 10;

// while((startingTempUnit == "C" || startingTempUnit == "F" || startingTempUnit == "K") && ((startingTemp - 1) != NaN)){
    startingTemp = prompt("Whats the starting temperature");
    startingTempUnit = prompt("Whats the Unit of Measurement (C/F/K)?");
// }

//conversion from F, K, C to the 2 other units
//store in storeTemps array in order [F, K, C]
if(startingTempUnit === "F"){
    var Cel = ((startingTemp - 32) * (5 / 9));
    var Kel = (parseInt(Cel) + 273.15);
    storeTemps.push(startingTemp);
    storeTemps.push(Kel);
    storeTemps.push(Cel);
}else if(startingTempUnit === "K"){
    var Cel = (startingTemp - 273.15) * 9 / 5 + 32;
    var Fahr = Cel - 273.15;
    storeTemps.push(Fahr);
    storeTemps.push(startingTemp);
    storeTemps.push(Cel);
}else{
    var Kel = (parseInt(startingTemp) + 273);
    var Fahr = (startingTemp * 9 / 5) + 32;
    storeTemps.push(Fahr);
    storeTemps.push(Kel);
    storeTemps.push(startingTemp);
}

console.log("Temperatures are, " + storeTemps[0] + "F, " + storeTemps[1] + "K, " + storeTemps[2] + "C.");

if (storeTemps[2] < 0){
    console.log("ohh it's cold out!");
}else if(storeTemps[2] > 40){
    console.log("ohh it's hot out!");
}else if(storeTemps[2] > 100){
    console.log("It is literally boiling!");
}else{
    console.log("Its fine out!");
}
// switch(storeTemps[2]){
//     case
// }
/*questions
return; ??
switch statement for a range of values

