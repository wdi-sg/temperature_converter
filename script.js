console.log("hello script js");

var startingTemp;
var startingTempUnits;
var validTempEntry = false;
var validUnitEntry = false;
var name;
var tempInFah;

/////////////////
/* Starts here */
/////////////////
// Parsing Inputs : (1) Starting Temperature (2) Starting Temperature Units
var inputHappened = function(currentInput) {
    console.log("InputVal: " + currentInput + " " + validTempEntry + " " + validUnitEntry);

    // Check for Entering Temperature or Units
    if (!validTempEntry) {
        if (validNumInput(currentInput)) {
            validTempEntry = true;
            //display('Please Key in Temperature Units : "F", "K" or "C"');
            clearInput('Please Key in Temperature Units : "F", "K" or "C"');
        } else {
            //display('Please Key in PROPER Starting Temperature in numerical values');
            clearInput('Please Key in PROPER Starting Temperature in numerical values');
        }

    } else if (validTempEntry && !validUnitEntry) {
        if (validUnitsInput(currentInput)) {
            // console.log(startingTempUnits);
            validUnitEntry = true;
            switch (startingTempUnits) {
                case "K":
                    kelToFahCel(startingTemp);
                    break;
                case "F":
                    fahToKelCel(startingTemp);
                    break;
                case "C":
                    celToFahKel(startingTemp);
                    break;
                default:
                    alert('Error!');
                    break;
            }

        } else {
            //display('Please Key in PROPER Temperature Units : "F", "K" or "C"');
            clearInput('Please Key in PROPER Temperature Units : "F", "K" or "C"');
        }

    } else {
        console.log("here! " + tempInFah);
        addUserName(currentInput, tempInFah);
        resetParams();
    }
};


///////////////////////////////////////////
/* Code block for Input & Validation     */
///////////////////////////////////////////
// functions to check the validity of the user's temp and unit inputs
var validNumInput = function(currentInput) {
    startingTemp = parseFloat(currentInput);
    if (!isNaN(startingTemp)) {
        return true; // Valid Input
    } else {
        return false; // Invalid Input
    }
};

var validUnitsInput = function(currentInput) {
    startingTempUnits = currentInput.toUpperCase();
    if (startingTempUnits === 'K' || startingTempUnits === 'F' || startingTempUnits === 'C') {
        return true;
    } else {
        return false;
    }
};


///////////////////////////////////////////
/* Code block for Temperature Conversion */
///////////////////////////////////////////

// fahToKelCel = function to convert fahrenheit to kelvin and celsius
var fahToKelCel = function(startingTemp) {
    var tempInKel = Math.round(((startingTemp - 32) * 5 / 9 + 273.15) * 100) / 100;
    var tempInCel = Math.round(((startingTemp - 32) * 5 / 9) * 100) / 100;
    tempInFah = Math.round(startingTemp * 100) / 100;
    //console.log(`${startingTemp}\xB0F = ${tempInCel}\xB0C = ${tempInKel}K`);
    display(`${startingTemp}\xB0F = ${tempInCel}\xB0C = ${tempInKel}K`);
    loveMessage(tempInFah);
};

// kelToFahCel = function to convert kelvin to fahrenheit and celsius
var kelToFahCel = function(startingTemp) {
    var tempInCel = Math.round((startingTemp - 273.15) * 100) / 100;
    tempInFah = Math.round(((startingTemp - 273.15) * 9 / 5 + 32) * 100) / 100;
    // console.log(`${startingTemp}K = ${tempInCel}\xB0C = ${tempInFah}\xB0F`);
    display(`${startingTemp}K = ${tempInCel}\xB0C = ${tempInFah}\xB0F`);
    loveMessage(tempInFah);
};

// celToFahKel = function to convert celsius to fahrenheit and kelvin
var celToFahKel = function(startingTemp) {
    var tempInKel = Math.round((startingTemp + 273.15) * 100) / 100;
    tempInFah = Math.round(((startingTemp * 9 / 5) + 32) * 100) / 100;
    // console.log(`${startingTemp}\xB0C = ${tempInKel}K = ${tempInFah}\xB0F`);
    display(`${startingTemp}\xB0C = ${tempInKel}K = ${tempInFah}\xB0F`);
    loveMessage(tempInFah);
};



///////////////////////////////////////////
/* Code block for Part 3 & 4 Add Messages*/
///////////////////////////////////////////

var loveMessage = function(tempInFah) {
    switch (true) {
        case (tempInFah < 0):
            document.getElementById("output").innerHTML += " <p>ooh it's cold out</p>";
            break;
        case (tempInFah > 40 && tempInFah <= 100):
            document.getElementById("output").innerHTML += " <p>ooh it's hot out</p>";
            break;
        case (tempInFah > 100):
            document.getElementById("output").innerHTML += " <p>your literally boiling</p>";
            break;
        default:
            break;
    }
    clearInput("Enter your name for some lame developer's advice");
    //document.getElementById("output").innerHTML += " <p>Enter your name for some lame developer's advice</p>";

};


var addUserName = function(currentInput, tempInFah) {
    switch (true) {
        case (tempInFah < 0):
            document.getElementById("output").innerHTML += " <p>" + currentInput + " dont go outside if you want to live</p>";
            break;
        case (tempInFah >= 0):
            document.getElementById("output").innerHTML += " <p>" + currentInput + " need heavy jacket and toe warmers</p>";
            break;
        case (tempInFah > 60 && tempInFah <= 80):
            document.getElementById("output").innerHTML += " <p>" + currentInput + " put on a jacket</p>";
            break;
        case (tempInFah > 80 && tempInFah <= 100):
            document.getElementById("output").innerHTML += " <p>" + currentInput + " just wear shorts and shirt</p>";
            break;
        case (tempInFah > 100):
            document.getElementById("output").innerHTML += " <p>" + currentInput + " take off your clothes</p>";
            break;
        default:
            break;
    }
}


// RESET Parameters and input field;
function resetParams() {
    validTempEntry = false;
    validUnitEntry = false;
    clearInput('Enter the Temperature here');
}
