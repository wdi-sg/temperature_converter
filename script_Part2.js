var userInputTemp2;
var temp2;
var userInputUnit2;
var unit2;
var fahrenheit2;
var celsius2;
var kelvin2;
var fahrenheitDisplay2;
var celsiusDisplay2;
var kelvinDisplay2;

//prompt user input temperature
//check user input if it is a number
//if not number, error
//if !error, exit
//if error <i times,prompt input temperature again
var checkTemp2 = function() {
    userInputTemp2 = prompt("Input temperature.");
    temp2 = userInputTemp2*1;
    var i = 1;
    for (i = 1; i <= 10; i += 1) {
        if (temp2) {
            console.log(temp2);
            i = 100;
        } else {
            console.log(temp2);
            alert('Error! Input should be a number');
            userInputTemp2 = prompt("Input temperature.");
            temp2 = userInputTemp2*1;
            i = i + 1;
        }
    }
}

//prompt user input unit
//check user input if F or K or C
//if not F && not K && not C, error
// if !error, exit
//if error <i times, prompt input unit again
var checkUnit2 = function() {
    userInputUnit2 = prompt("Input unit of temperature i.e. F, C, or K.");
    unit2 = userInputUnit2
    var i = 1;
    for (i = 1; i <= 10; i += 1) {
        if (unit2 === 'F' || unit2 === 'K' || unit2 === 'C') {
            console.log(unit2);
            i = 100;
        } else {
            console.log(unit2);
            alert('Error! Input should be F, C or K');
            userInputUnit2 = prompt("Input unit of temperature i.e. F, C, or K.");
            unit2 = userInputUnit2;
            i = i + 1;
        }
    }
}

//display calculated temperature with symbols
displayTemp = function() {
    fahrenheitDisplay2 = fahrenheit2 + "\xB0 F";
    celsiusDisplay2 = celsius2 + "\xB0C";
    kelvinDisplay2 = kelvin2 + "K" ;
}

//calculate based on userinput2_temp and userinput2_unit
checkTemp2();
checkUnit2();
switch (unit2) {
    case "F":
    fahrenheit2 = Math.round(temp2 * 10) / 10;
    celsius2 = Math.round(((temp2 - 32) / 1.80) * 10) / 10;
    kelvin2 = Math.round(((5 / 9) * (temp2 - 32) + 273.15) * 10) / 10;
    displayTemp();
    alert (fahrenheitDisplay2 + " = " + celsiusDisplay2 + " = " + kelvinDisplay2);
    break;
    case "C":
    fahrenheit2 = Math.round((temp2 * 1.8000) * 10) / 10;
    celsius2 = Math.round(temp2 * 10) / 10;
    kelvin2 = Math.round((temp2 + 273.15) * 10) / 10;
    displayTemp();
    alert (celsiusDisplay2 + " = " + fahrenheitDisplay2 + " = " + kelvinDisplay2);
    break;
    case "K":
    fahrenheit2 = Math.round(((9 / 5) * (temp2 - 273) + 32) * 10) / 10;
    celsius2 = Math.round((temp2 - 273.15) * 10) / 10;
    kelvin2 = Math.round(temp2 * 10) / 10;
    displayTemp();
    alert (kelvinDisplay2 + " = " + fahrenheitDisplay2 + " = " + celsiusDisplay2);
    break;
    default:
    alert('Invalid input. Try again later!');
    break;
}