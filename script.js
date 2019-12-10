console.log("hello script js");

let unitF;
let unitC;
let unitK;
let tempF;
let tempC;
let tempC1;
let tempK;
let unitType;
let tempNum;

convertTemp= function (tempNum) {
    if (unitF === true) {
    tempF = tempNum;
    tempC = (tempF - 32) * 5 / 9;
    tempK = (tempC + 273.15);
    } else if (unitC === true) {
        tempC = tempNum;
        tempC1 = parseInt(tempC);
        tempK = (tempC1 + 273);
        tempF = (tempK - 273.15) * 9 / 5 + 32;
    } else if (unitK === true) {
        tempK = tempNum;
        tempC = tempK - 273.15;
        tempF = (tempC * 9 / 5) + 32;
    } else {
        output = "I screwed something up"
    };
}
var inputHappened1 = function(currentInput) {
    console.log(currentInput);
    let unitType = currentInput;
    switch (unitType.toUpperCase()) {
        case "CELSIUS":
            unitC = true;
            unitF = false;
            unitK = false;
            output = "Now please enter the temperature in the next input bar."
            break;
        case "KELVIN":
            unitC = false;
            unitF = false;
            unitK = true;
            output = "Now please enter the temperature in the next input bar."
            break;
        case "FAHRENHEIT":
            unitC = false;
            unitF = true;
            unitK = false;
            output = "Now please enter the temperature in the next input bar."
            break;
        default:
        output = "Please enter valid unit of temperature.";
    };
    return output;
}
var inputHappened2 = function(currentInput){
    tempNum = currentInput;
    convertTemp(tempNum);
    var output = "The temperature in Celsius is " + tempC + "C." + "\n" + "The temperature in Kelvin is " + tempK + "K." + "\n" + "The temperature in Fahrenheit is " + tempF + "F.";
  return output;
};