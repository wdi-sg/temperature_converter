// Part 1

// var tempInFahr = prompt("Please enter temperature in Fahrenheit.")
// tempInFahr = parseInt(tempInFahr);
// console.log(tempInFahr);


// tempInKel = ((tempInFahr + 459.67) * (5/9) ).toFixed(1);
// tempInCel = ((tempInFahr - 32) / 1.8).toFixed(1) ;

// console.log(tempInKel+"K");
// console.log(tempInCel+"°C");


// --------------------------------------------------------------------------------------------


// Part 2 + Part 3 + Part 6 + Part 7


var stillContinue; // ask user if they still want to do another temp conversion
var userResponse = true; // user response to stillContinue

var tempInFahr;
    var tempInKel;
    var tempInCel;
    var temps = [];
    var alltemps = []; // to consolidate all the temps in one array.

while (userResponse == true) {
    var temperature = prompt("Please enter temperature.")
    temperature = parseInt(temperature);

    while (Number.isInteger(temperature) == false) {
        console.log("hi")
        temperature = prompt("Please re-enter temperature in number.")
            temperature = parseInt(temperature);
            console.log(temperature);
            }

    var temperatureUnit = prompt("Please enter temperature unit.");
    // console.log(typeof temperatureUnit);

    while ((temperatureUnit != "Fahrenheit") && (temperatureUnit != "Kelvin") && (temperatureUnit != "Celsius")) {
        temperatureUnit = prompt("Please re-enter temperature unit (Fahrenheit, Kelvin or Celsius).");
    }

    if (temperatureUnit == "Fahrenheit") {
        tempInFahr = temperature;
        tempInKel = ((tempInFahr + 459.67) * (5/9) ).toFixed(1);
        tempInCel = ((tempInFahr - 32) / 1.8).toFixed(1) ;
        temps.push(tempInFahr, tempInCel, tempInKel); // converted temp in alphabetical order

        alert(temperature + "°F" + " = " + tempInKel + "K" + " = " + tempInCel + "°C");

    } else if (temperatureUnit == "Kelvin") {
        tempInKel = temperature;
        tempInCel = (tempInKel - 273.15).toFixed(1);
        tempInFahr = ((temperature * 1.8)- 459.67).toFixed(1);
        temps.push(tempInKel, tempInCel, tempInFahr); // converted temp in alphabetical order

        alert(temperature + "K" + " = " + tempInFahr + "°F" + " = " + tempInCel + "°C");

    } else {
        tempInCel = temperature;
        tempInKel = (temperature + 273.15).toFixed(1);
        tempInFahr = ((temperature * 1.8) + 32).toFixed(1);
        temps.push(tempInCel, tempInKel, tempInFahr); // converted temp in alphabetical order

        alert(temperature + "°C" + " = " + tempInFahr + "°F" + " = " + tempInKel + "K");
    }


    console.log(temps);
    alltemps.push(temps);
    console.log(alltemps);

    for (var i=0; i < temps.length; i++) {
        console.log(temps[i]);
    }

    temps = []; //refresh temps array for next loop


    stillContinue = prompt("Do you want to convert another temperature? (Yes/No)");

    if (stillContinue == "Yes"){
            userResponse = true; // will continue looping while true
        } else if (stillContinue == "No") {
            userResponse = false;
        } else {
            stillContinue = prompt("Response not recognised. Do you want to convert another temperature? (Yes/No)");
        }
}

// --------------------------------------------------------------------------------------------


// Part 4 + Part 5

// var clothes = [
//  'nothing',
//  'swimsuit',
//  'shorts and shirt',
//  'sweater',
//  'sweater + jacket',
//  'heavy jacket',
//  'heavy jacket and toe warmers',
//  'dont go outside if you want to live'
// ];


// var temp = 130;
// // var temp = tempInCel; if needed to be combined with above steps
// var name = prompt("Enter your name!")

// if (temp <0){
//     console.log("ooh it's cold outside");
//     console.log("hey " + name + ", get some " + clothes[6] + " but actually " + clothes[7])
// } else if (temp>40) {
//     console.log("ooh it's hot out");
//     console.log("hey " + name + ", get some " + clothes[2] + " or even " + clothes[1])
// } else if (temp>100) {
//     console.log("you're literally boiling");
//     console.log("hey " + name + ", just wear " + clothes[0] + " already")
// }


