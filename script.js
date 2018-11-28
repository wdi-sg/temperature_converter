var userName = prompt("Hello! What's your name?");
//*** the below if statement for userName does not work, SO SAD!!!! *****
if (userName == null || userName == "") {
    userName = "stranger";
};

var temperature;
var temperatureUnit;

var tempDataArray = [userName, temperature, temperatureUnit];

var clothes = [
 'nothing',
 'a swimsuit',
 'shorts and shirt',
 'a sweater',
 'sweater + jacket',
 'a heavy jacket',
 'heavy jacket and toe warmers',
 'Don\'t go outside if you want to live!'
];
//creating function for my style of loop/reset
var oneMoreTime = function() {
    var again = prompt("Wanna try another conversion? (Yes or No)");
//if user presses cancel button
    if (again == null || again == "") {
        alert("Thank you for using my service! Should you require my assistance again, please refresh my web page. Goodbye!");
    };
//if user types any weird uppercase answer, convert all to lower case
    again = again.toLowerCase();
//if the first letter of user's answer starts with "y"
    if (again.charAt(0) == "y") {
        conversionRun();
//if the first letter of user's answer starts with "n"
    } else if (again.charAt(0) == "n") {
        alert("Thank you for using my service! Should you require my assistance again, please refresh my web page. Goodbye!");
    };
};
//creating function for when user gives Degrees to convert, function arguments taken from conversionRun function below later
var ifCharD = function(temperature, coldHotMessage, clothingMessage) {
    var degToFah = temperature * 9/5 + 32;
    degToFah = +degToFah.toFixed(2);
    var degToKel = temperature + 273.15;
    degToFah = +degToFah.toFixed(2);
    alert("Hello " + userName + "!\n" + coldHotMessage + "\n" + clothingMessage + temperature + " Degrees is " + degToFah + " in Fahrenheit and " + degToKel + " in Kelvin.");
//pushes Degree to Fahrenheit answer into array
    tempDataArray.push(degToFah);
    tempDataArray.push(degToKel);
//runs my loop function
    oneMoreTime();
};
//creating function for when user gives Kelvin to convert, function arguments taken from conversionRun function below later
var ifCharK = function(temperature, coldHotMessage, clothingMessage) {
    var kelToFah = (temperature - 273.15) * 9/5 + 32;
    kelToFah = +kelToFah.toFixed(2);
    var kelToDeg = temperature - 273.15;
    kelToDeg = +kelToDeg.toFixed(2);
    alert("Hello " + userName + "!\n" + coldHotMessage + "\n" + clothingMessage + temperature + " Kelvin is " + kelToFah + " in Fahrenheit and " + kelToDeg + " in Degrees Celsius.");
    tempDataArray.push(kelToFah);
    tempDataArray.push(kelToDeg);
    oneMoreTime();
};
//creating function for when user gives Fahrenheit to convert, function arguments taken from conversionRun function below later
var ifCharF = function(temperature, coldHotMessage, clothingMessage) {
    var fahToDeg = (temperature - 32) * 5/9;
    fahToDeg = +fahToDeg.toFixed(2);
    var fahToKel = (temperature - 32) * 5/9 + 273.15;
    fahToKel = +fahToKel.toFixed(2);
    alert("Hello " + userName + "!\n" + coldHotMessage + "\n" + clothingMessage + temperature + " Fahrenheit is " + fahToKel + " in Kelvin and " + fahToDeg + " in Degrees Celsius.");
    tempDataArray.push(fahToDeg);
    tempDataArray.push(fahToKel);
    oneMoreTime();
};
//creating the function for conversion process
var conversionRun = function() {
// //******* below if statement doesn't seem to work, sad *******
    temperature = parseInt(prompt("What is your temperature? (without the unit)"));
//if user presses cancel button for temperature prompt
if (temperature == null) {
    alert("Thank you for using my service! Should you require my assistance again, please refresh my web page. Goodbye!");
    return;
};
    temperatureUnit = prompt("What unit is it in? (Degrees, Fahrenheit or Kelvin)");
//if user presses cancel button for the temperatureUnit prompt
if (temperatureUnit == null) {
    alert("Thank you for using my service! Should you require my assistance again, please refresh my web page. Goodbye!");
    return;
};
//convert user's temperatureUnit answer to all lower case for easy checking later
temperatureUnit = temperatureUnit.toLowerCase();
//checking if user input is in degrees
if (temperatureUnit.charAt(0) == "d") {
    if (temperature <= 0) {
        var b = "Ohh it's cold out~";
        var c = "You should wear " + clothes[5] + "!\n";
    } else if (temperature >= 40 && temperature < 100) {
        var b = "Ohh it's hot out~";
        var c = "May I suggest wearing " + clothes[1] + " today? ;)\n";
    } else if (temperature > 100) {
        var b = "You're literally boiling!";
        var c = clothes[7] + "\n";
    } else {
        var b ="Fine weather today!";
        var c ="Wearing " + clothes[2] + " should be just fine today!\n"
    };
//passing sorted answers into degrees conversion function above
    ifCharD(temperature, b, c);
//checking if user input is in kelvin
} else if (temperatureUnit.charAt(0) == "k") {
    if (temperature <= 0) {
        var b = "Ohh it's cold out~";
        var c = "You should wear " + clothes[5] + "!\n";
    } else if (temperature >= 40 && temperature < 100) {
        var b = "Ohh it's hot out~";
        var c = "May I suggest wearing " + clothes[1] + " today? ;)\n";
    } else if (temperature > 100) {
        var b = "You're literally boiling!";
        var c = clothes[7] + "\n";
    } else {
        var b ="Fine weather today!";
        var c ="Wearing " + clothes[2] + " should be just fine today!\n"
    };
//passing sorted answers into kelvin conversion function above
    ifCharK(temperature, b, c);
//checking if user input is in fahrenheit
} else if (temperatureUnit.charAt(0) == "f") {
    if (temperature <= 0) {
        var b = "Ohh it's cold out~";
        var c = "You should wear " + clothes[5] + "!\n";
    } else if (temperature >= 40 && temperature < 100) {
        var b = "Ohh it's hot out~";
        var c = "May I suggest wearing " + clothes[1] + " today? ;)\n";
    } else if (temperature > 100) {
        var b = "You're literally boiling!";
        var c = clothes[7] + "\n";
    } else {
        var b ="Fine weather today!";
        var c ="Wearing " + clothes[2] + " should be just fine today!\n"
    };
//passing sorted answers into fahrenheit conversion function above
    ifCharF(temperature, b, c);
//if user inputs any other kinds of unit
} else {
    alert("Please try again, using only Degrees, Fahrenheit, or Kelvin for temperature unit.");
//activates my loop function
    oneMoreTime();
};
};
//the first activation when web page loads
conversionRun();