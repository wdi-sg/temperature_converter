// Part 1
// try to prompt user to answer the name , however once user click "cancel" , I don know how to stop the rest of game for running

var  userName = prompt("Hi what your name?");
    if (userName == null) {
        alert("Thank for playing ! ")
    }
    else if (userName == "") {
    userName = "User";
    }


var temperatureInFahr =  prompt("Hi " + userName + " , what the temperature now in Fahrenheit? ");
var Fahr = parseFloat(temperatureInFahr).toFixed(2);
var kelvin = parseFloat(((Fahr - 32 ) * 5/9 + 273.15)).toFixed(2);
var celsius = parseFloat(((Fahr -32) * 5/9)).toFixed(2);
    console.log("The current temperature is " + kelvin+ "K");
    console.log( "The current temperature is " + celsius + "C");
    console.log("The current temperature is " + Fahr + "F")
    alert("The temperature is " + kelvin+ " K= " + celsius + "C= " + Fahr + "F");

//Part 2& Part 3
var storeTemp = [ ];
var temperatureUnit = ["Fahrenheit", "Celsius" , "Kelvin"];
var tempUnit = prompt("What's your temperature unit? Fahrenheit,Celsius,Kelvin");
var temperature = prompt("What's is current temperature?");
if (tempUnit === temperatureUnit[0]) {
    var Fah = ((temperature) + "F");
    var Kel = (temperature- 32 ) * 5/9 + 273.15 + "K";
    var Cel = (temperature- 32 ) * 5/9 + "C";
    storeTemp.push(Fah);
    storeTemp.push(Cel);
    storeTemp.push(Kel);
}
else if(tempUnit === temperatureUnit[1]) {
    var Cel = ((temperature) + "C");
    var Kel = (temperature + 273.15 + "K");
    var Fah = (temperature * 9/5 + 32 + "F");
    storeTemp.push(Fah);
    storeTemp.push(Cel);
    storeTemp.push(Kel);
}
else if(tempUnit === temperatureUnit[2]) {
    var Kel = ((temperature) + "K");
    var Cel = (temperature) - 273.15 + "C";
    var Fah = (temperature) -273.15 * 9/5 +32 + "F";
    storeTemp.push(Kel);
    storeTemp.push(Cel);
    storeTemp.push(Fah);
}
else {
    console.log("Invalid");
    alert("Invalid, please key in the exact words ")
}

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

if (storeTemps[2] < 0){
    alert("ohh it's cold out!");
    clothes.push(   )
}
else if( storeTemps[2] > 40){
    alert("ohh it's hot out!");
}
else if(storeTemps[2] > 100){
    alert("It is literally boiling!");
}
else{
    alert("Shiok !!");



