// Part 1

// var tempInFahr = prompt("Please enter temperature in Fahrenheit.")
// tempInFahr = parseInt(tempInFahr);
// console.log(tempInFahr);


// tempInKel = ((tempInFahr + 459.67) * (5/9) ).toFixed(1);
// tempInCel = ((tempInFahr - 32) / 1.8).toFixed(1) ;

// console.log(tempInKel+"K");
// console.log(tempInCel+"°C");


// --------------------------------------------------------------------------------------------


// Part 2 - 7


var stillContinue; // ask user if they still want to do another temp conversion
var userResponse = true; // user response to stillContinue
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

var tempInFahr;
    var tempInKel;
    var tempInCel;
    var temps = [];
    var alltemps = []; // to consolidate all the temps in one array.

while (userResponse == true) {
    var name = prompt("Enter your name!")
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
    temperatureUnit = temperatureUnit.toLowerCase(); // to make it non-case-sensitive

    while ((temperatureUnit != "fahrenheit") && (temperatureUnit != "kelvin") && (temperatureUnit != "celsius")) {
        temperatureUnit = prompt("Please re-enter temperature unit (Fahrenheit, Kelvin or Celsius).");
    }

    if (temperatureUnit == "Fahrenheit") {
        tempInFahr = temperature + "°F";
        tempInKel = ((temperature + 459.67) * (5/9) ).toFixed(1) + "K";
        tempInCel = ((temperature - 32) / 1.8).toFixed(1) + "°C";
        temps.push(tempInFahr, tempInCel, tempInKel);

        alert(tempInFahr + " = " + tempInKel+ " = " + tempInCel );

    } else if (temperatureUnit == "Kelvin") {
        tempInKel = temperature + "K";
        tempInCel = (temperature - 273.15).toFixed(1) + "°C";
        tempInFahr = ((temperature * 1.8)- 459.67).toFixed(1)+  "°F";
        temps.push(tempInKel, tempInCel, tempInFahr);

        alert(tempInKel + " = " + tempInFahr + " = " + tempInCel);

    } else {
        tempInCel = temperature +  "°C";
        tempInKel = (temperature + 273.15).toFixed(1) + "K";
        tempInFahr = ((temperature * 1.8) + 32).toFixed(1) + "°F";
        temps.push(tempInCel, tempInKel, tempInFahr);

        alert(tempInCel + " = " + tempInFahr  + " = " + tempInKel);
    }


    console.log(temps);
    alltemps.push(temps);
    console.log(alltemps);

    for (var i=0; i < temps.length; i++) {
        console.log(temps[i]);
    }

    temps = []; //refresh temps array for next loop

    var temp = tempInCel;


    if (temp <0){
        alert("ooh it's cold outside");
        alert("hey " + name + ", get some " + clothes[6] + " but actually " + clothes[7]);
    } else if (temp>100) {
        alert("you're literally boiling");
        alert("hey " + name + ", just wear " + clothes[0] + " already");
    } else if (temp>40) {
        alert("ooh it's hot out");
        alert("hey " + name + ", get some " + clothes[2] + " or even " + clothes[1]);
    } else {
        alert("cooling weather! " + name +  ", grab some " + clothes[4]);
    }


    stillContinue = prompt("Do you want to convert another temperature? (Yes/No)");
    stillContinue = stillContinue.toLowerCase(); // makes it case insensitive

    if (stillContinue == "yes"){
            userResponse = true; // will continue looping while true
        } else if (stillContinue == "no") {
            userResponse = false;
            alert("Alright bye! xD");
        } else {
            stillContinue = prompt("Response not recognised. Do you want to convert another temperature? (Yes/No)");
        }
}






