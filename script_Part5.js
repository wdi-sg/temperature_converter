//inherited from Part 2
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
//new variable for Part 3
var temps = [];
//new variable for Part 5
var username;
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



//inherited from Part 2
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

//inherited from Part 2
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

//inherited from Part 2
displayTemp = function() {
    fahrenheitDisplay2 = fahrenheit2 + "\xB0 F";
    celsiusDisplay2 = celsius2 + "\xB0C";
    kelvinDisplay2 = kelvin2 + "K" ;
}

// new for Part 5
username = prompt("What is your name?")
//inherited from Part 2
checkTemp2();
checkUnit2();
switch (unit2) {
    case "F":
    fahrenheit2 = Math.round(temp2 * 10) / 10;
    celsius2 = Math.round(((temp2 - 32) / 1.80) * 10) / 10;
    kelvin2 = Math.round(((5 / 9) * (temp2 - 32) + 273.15) * 10) / 10;
    displayTemp();
    // new for Part 3
    temps.push(fahrenheitDisplay2);
    temps.push(celsiusDisplay2);
    temps.push(kelvinDisplay2);
    //inherited from Part 2
    alert (fahrenheitDisplay2 + " = " + celsiusDisplay2 + " = " + kelvinDisplay2);
    break;
    case "C":
    fahrenheit2 = Math.round((temp2 * 1.8000) * 10) / 10;
    celsius2 = Math.round(temp2 * 10) / 10;
    kelvin2 = Math.round((temp2 + 273.15) * 10) / 10;
    displayTemp();
        // new for Part 3
    temps.push(celsiusDisplay2);
    temps.push(fahrenheitDisplay2);
    temps.push(kelvinDisplay2);
    //inherited from Part 2
    alert (celsiusDisplay2 + " = " + fahrenheitDisplay2 + " = " + kelvinDisplay2);
    break;
    case "K":
    fahrenheit2 = Math.round(((9 / 5) * (temp2 - 273) + 32) * 10) / 10;
    celsius2 = Math.round((temp2 - 273.15) * 10) / 10;
    kelvin2 = Math.round(temp2 * 10) / 10;
    displayTemp();
        // new for Part 3
    temps.push(kelvinDisplay2);
    temps.push(fahrenheitDisplay2);
    temps.push(celsiusDisplay2);
    //inherited from Part 2
    alert (kelvinDisplay2 + " = " + fahrenheitDisplay2 + " = " + celsiusDisplay2);
    break;
    default:
    alert('Invalid input. Try again later!');
    break;
}
// new for Part 4. Updated for Part 5
if (celsius2 > 100) {
    alert(username + ", your literally boiling. wear " + clothes[0] + ". and " + clothes[7]);
    } else if (celsius2 > 40) {
        alert(username + ", ooh it's hot outside. wear " + clothes[2] + ".");
    } else if (celsius2 > 30) {
        alert(username + ", wear " + clothes[2] + "." )
    } else if (celsius2 >20) {
        alert(username + ", wear " + clothes[3] + "." )
    } else if (celsius2 >= 0) {
        alert(username + ", wear " + clothes[4] + "." )
    } else if (celsius2 < 0) {
        alert(username + ", ooh it's cold outside. wear " + clothes[6] + ".");
}