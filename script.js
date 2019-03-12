//Part 1
var temp = prompt("Please enter value of temperature (numbers only)");
var tempNum = parseFloat(temp);
var tempC, tempK, tempF

while (isNaN(tempNum)) {
    temp = prompt("Invalid entry. Please enter value of temperature (numbers only)");
    tempNum = parseFloat(temp);
}

//Function converts Fahrenheit to the other temp units
var caseF = function () {
    tempC = (tempNum - 32) / 1.8;
    tempK = tempC + 273.15;
    tempF = tempNum;
    return tempF, tempK; tempC;
}

//Function converts Celcius to the other temp units
var caseC = function () {
    tempK = tempNum + 273.15;
    tempF = tempNum * 1.8 + 32;
    tempC = tempNum;
    return tempF, tempK; tempC;
}

//Function converts Kelvin  to the other temp units
var caseK = function () {
    tempC = tempNum - 273.15;
    tempF = tempC * 1.8 + 32;
    tempK = tempNum;
    return tempF, tempK; tempC;
}


var unit = prompt("Please enter unit of temperature input (C: kelvin, F: fahrenheit, C: celcius)");

//Codeblock converts input temp (if valid) to other units and returns result by alert
if (unit.toLowerCase() === "f") {
    caseF();
    alert(`${tempF}F = ${tempC}C = ${tempK}K`);
}
else if (unit.toLowerCase() === "c") {
    caseC();
    alert(`${tempC}C = ${tempK}K = ${tempF}F`);
}
else if (unit.toLowerCase() === "k") {
    caseK();
    alert(`${tempK}K = ${tempC}C = ${tempF}F`);
}
else {
    alert("Invalid entry. Please refresh/restart and try again");
}
console.log("Run ended");