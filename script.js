var userInput = prompt("What's your name?")
console.log(userInput);

alert("I'm saying something");

/*
1. userinput prompt for temp(inputFahr)
2. output a) kelvin b) celsius

1. take input1 temperature and input2 temperatureunit (fahr, celsuis, kelvin)
2. if input2 = F
    input1 = xxx
3. if input2 = cel
    input1=xxx
4. if input2 = kel
    input1=xx
*/

var inputTemp, inputUnit;
var outFahr, outCel, outKel;

inputTemp = prompt("What is the Temperature?");
console.log(inputTemp);
inputUnit = prompt("Is this is Fahrenheit, Celsius or Kelvin?");
console.log(inputUnit);

if (inputUnit ==="Fahr" || inputUnit === "fahr" || inputUnit ==="Fahrenheit") {
    outCel = (inputTemp - 32) * (5/9);
    outKel = (inputTemp -32) * (5/9) + 273.15;
    console.log(outCel + " Celsius", outKel + " kelvin");
} else if (inputUnit ==="Cel" || inputUnit === "celsuis" || inputUnit ==="c" || inputUnit ==="C") {
    outKel = (inputTemp + 273.15);
    outFahr = (inputTemp * 9/5) + 32;
    console.log(outKel + " kelvin", outFahr + " F");
} else if (inputUnit ==="kel" || inputUnit === "kelvin" || inputUnit ==="k" || inputUnit ==="Kelvin") {
    outFahr = (inputTemp - 273.15) * 9/5 + 32;
    outCel = (inputTemp  - 273.15);
    console.log(outFahr + " Fahr", outCel + " c");
}