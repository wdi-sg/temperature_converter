console.log("hello script js");

/******************************* Part 1 *******************************************
* Function Purpose
* Converts a temperature from Fahrenheit to Celcius and Kelvin
*
* Input Data Description
* temp - the temperature in Fahrenheit to be converted
*
* Data Examples:
* var temp = 32
*
* Function Signature
* temp (number) --> inKelvin (number), inCelcius (number)
*/

// Part 1 code
/*
var convertTemp = function(temp) {
    var temp = parseInt(temp);
    var inKelvin = (temp + 459.67) * 5 / 9;
    var inCelcius = (temp - 32) * 5 / 9;
    return temp + "\xB0F = " + inKelvin + "\xB0K" + " = " + inCelcius + "\xB0C";
};

var inputHappened = function(currentInput){
    console.log( currentInput );
    var output = convertTemp(currentInput);
    return output;
};
*/

/******************************* Part 2 *******************************************
* Function Purpose
* Converts a temperature between Fahrenheit, Celcius and Kelvin
*
* Input Data Description
* currentInput - the temperature to be converted
*
*
* Data Examples:
* var currentInput = 32
*
* Function Signature
* currentInput (number) currenInput(unit) -->  convertedTemp1 (number), convertedTemp2(number)
*/

/*
var state = 0;
var startTemp = 0;

var inputHappened = function(currentInput){
    if (state === 0) {
        state++;
        startTemp = currentInput;
        return "What is the current unit? [F, C, K]";
    } else if (state === 1) {
        if (currentInput === "F"){
            var inKelvin = (startTemp + 459.67) * 5 / 9;
            var inCelcius = (startTemp - 32) * 5 / 9;
            state = 0;
            return startTemp + "\xB0F = " + inKelvin + "\xB0K" + " = " + inCelcius + "\xB0C";
        } else if (currentInput === "C") {
            var inFahrenheit = startTemp * 9 / 5 + 32;
            var inKelvin = startTemp + 273.15;
            state = 0;
            return startTemp + "\xB0C = " + inKelvin + "\xB0K" + " = " + inFahrenheit + "\xB0F";
        } else if (currentInput === "K") {
            var inFahrenheit = startTemp * 9 / 5 - 459.67 ;
            var inCelcius = startTemp - 273.15;
            state = 0;
            return startTemp + "\xB0K = " + inCelcius + "\xB0C" + " = " + inFahrenheit + "\xB0F";
        } else {
            state = 0;
            return "Invalid unit. Please input a temperature.";
        }
    }
};
*/

/**************************** Part 3 **********************************
* Print messages based on temperature
*/

/*
var state = 0;
var startTemp = 0;
var inFarenheit = 0;
var inKelvin = 0;
var inCelcius = 0;
var userName="";

var inputHappened = function(currentInput){
    if (state === 0) {
        state++;
        startTemp = currentInput;
        return "What is the current unit? [F, C, K]";
    } else if (state === 1) {
        if (currentInput === "F"){
            inFarenheit = startTemp;
            inKelvin = (startTemp + 459.67) * 5 / 9;
            inCelcius = (startTemp - 32) * 5 / 9;
            state = 0;
            return printMessage();
            //return startTemp + "\xB0F = " + inKelvin + "\xB0K" + " = " + inCelcius + "\xB0C";
        } else if (currentInput === "C") {
            inFahrenheit = startTemp * 9 / 5 + 32;
            inKelvin = startTemp + 273.15;
            inCelcius = startTemp
            state = 0;
            return printMessage();
        } else if (currentInput === "K") {
            inFahrenheit = startTemp * 9 / 5 - 459.67 ;
            inCelcius = startTemp - 273.15;
            inKelvin = startTemp
            state = 0;
            return printMessage();
        } else {
            state = 0;
            return "Invalid unit. Please input a temperature.";
        }
    }
};

var printMessage = function() {
    if (inFarenheit < 0) {
        return "ooh it's cold out. " + inFarenheit + "\xB0F = " + inKelvin + "\xB0K = " + inCelcius  + "\xB0C";
    } else if (inFarenheit > 40 && inFarenheit <= 100) {
        return "ooh it's hot out. " + inFarenheit + "\xB0F = " + inKelvin + "\xB0K = " + inCelcius  + "\xB0C";
    } else if (inFarenheit > 100) {
        return "you're literally boiling. " + inFarenheit + "\xB0F = " + inKelvin + "\xB0K = " + inCelcius  + "\xB0C";
    } else {
        return inFarenheit + "\xB0F = " + inKelvin + "\xB0K = " + inCelcius  + "\xB0C";
    }
};
*/

/**************************** Part 4 **********************************
* Suggest clothing for user
*/

var state = 0;
var startTemp = 0;
var inFarenheit = 0;
var inKelvin = 0;
var inCelcius = 0;
var userName="";

var inputHappened = function(currentInput){
    if (state === 0) {
        state++;
        startTemp = currentInput;
        return "What is the current unit? [F, C, K]";
    } else if (state === 1) {
        if (currentInput === "F"){
            inFarenheit = startTemp;
            inKelvin = (startTemp + 459.67) * 5 / 9;
            inCelcius = (startTemp - 32) * 5 / 9;
            state++;
            return printMessage();
        } else if (currentInput === "C") {
            inFarenheit = startTemp * 9 / 5 + 32;
            inKelvin = startTemp + 273.15;
            inCelcius = startTemp
            state++;
            return printMessage();
        } else if (currentInput === "K") {
            inFarenheit = startTemp * 9 / 5 - 459.67 ;
            inCelcius = startTemp - 273.15;
            inKelvin = startTemp
            state++;
            return printMessage();
        } else {
            state = 0;
            return "Invalid unit. Please input a temperature.";
        }
    } else if (state === 2) {
        state = 0;
        userName = currentInput;
            if (inFarenheit < 0) {
                return userName + ", don't go outside if you want to live.";
            } else if (inFarenheit > 40 && inFarenheit <= 100) {
                return userName + ", shorts and a shirt should do the trick."
            } else if (inFarenheit > 100) {
                return userName + ", it's so hot you should wear nothing."
            //} else {
                //return userName + ", hope your clothes are appropriate for the weather."
            }
    }
};

var printMessage = function() {
    if (inFarenheit < 0) {
        return "ooh it's cold out. " + inFarenheit + "\xB0F = " + inKelvin + "\xB0K = " + inCelcius  + "\xB0C. What's your name?";
    } else if (inFarenheit > 40 && inFarenheit <= 100) {
        return "ooh it's hot out. " + inFarenheit + "\xB0F = " + inKelvin + "\xB0K = " + inCelcius  + "\xB0C. What's your name?";
    } else if (inFarenheit > 100) {
        return "you're literally boiling. " + inFarenheit + "\xB0F = " + inKelvin + "\xB0K = " + inCelcius  + "\xB0C. What's your name?";
    //} else {
        //return inFarenheit + "\xB0F = " + inKelvin + "\xB0K = " + inCelcius  + "\xB0C. What's your name?";
    }
};