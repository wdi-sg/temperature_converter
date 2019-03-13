// var userInput = prompt("What's your name?")
// console.log(userInput);

// alert("I'm saying something");

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
// part 2:



var inputTemp, inputUnit;
// create output variables
var outFahr, outCel, outKel;
//part 3 array
var temps =[];

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
// prompt to take in temp & unit as user prompts
inputTemp = parseInt(prompt("What is the Temperature?"));
console.log(inputTemp);
inputUnit = prompt("Is this in Fahrenheit, Celsius or Kelvin?");
console.log(inputUnit);

if (inputUnit ==="Fahr" || inputUnit === "fahr" || inputUnit ==="Fahrenheit" || inputUnit==="f") {
    outCel = (inputTemp - 32) * (5/9);
    outKel = (inputTemp -32) * (5/9) + 273.15;
    console.log(inputTemp + "F" + " "+ "=" + " " +outCel.toFixed(2)+ "C" + " " + "=" + " " + outKel.toFixed(2) + "K");
    console.log(inputUnit);
    // console.log(outKel);
    // console.log(outCel);
    // console.log(outFahr);
} else if (inputUnit ==="Cel" || inputUnit === "celsius" || inputUnit ==="c" || inputUnit ==="C" || inputUnit === "Celsius") {
    outFahr = (inputTemp * 9/5) + 32;
    outKel = inputTemp + 273.15;
    console.log(inputTemp + "C" + " "+ "=" + " " +outFahr.toFixed(2)+ "F" + " " + "=" + " " + outKel.toFixed(2) + "K");
    console.log(inputUnit);
    // console.log(outKel);
    // console.log(outCel);
    // console.log(outFahr);
} else if (inputUnit ==="kel" || inputUnit === "kelvin" || inputUnit ==="k" || inputUnit ==="Kelvin") {
    outFahr = (inputTemp - 273.15) * 9/5 + 32;
    outCel = (inputTemp  - 273.15);
    console.log(inputTemp + "K" + " "+ "=" + " " +outFahr.toFixed(2)+ "F" + " " + "=" + " " + outCel.toFixed(2) + "C");
    console.log(inputUnit);
    // console.log(outKel);
    // console.log(outCel);
    // console.log(outFahr);
}



//part 3 & 4
var tempsArr = [inputTemp, outFahr, outCel, outKel]
// var temps =[];
console.log(tempsArr);
// console.log(tempsArr[1] != 0);
// for (var i = 0; i < temps.length; i++){
//     if (tempsArr[i] !== 0) {
//         console.log(tempsArr[i]);
//         temps.push(tempsArr[i]);
//         console.log(temps);
//     }
// }
// console.log(temps);

var randomNo = Math.floor(Math.random() * clothes.length);
console.log(randomNo);


console.log(outCel);
if (outCel < 0 || outKel < 273.15) {
    console.log("ooh it's COLD out, wear some "+ clothes[randomNo]);
} else if ( (outCel >= 0 && outCel <= 40) || (outKel >= 273.15  && outKel <= 273.15 +40) ) {
    console.log("Normal weather dude, wear some "+ clothes[randomNo]);
} else if ( (outCel > 40 && outCel < 100) || (outKel > 273.15 +40 && outKel <273.15 +100) ) {
    console.log("ooh it's HOT out, wear some "+ clothes[randomNo]);
} else if (outCel >= 100 || outKel >= 273.15 +100) {
    console.log("your literally boiling, wear some " + clothes[randomNo]);
}

//part 5
if (outCel <= 0 ) {
    console.log("Maybe you should wear " + clothes[0] + " or " + clothes[6]);
} else if ( outCel >= 40 && outCel <= 100 ) {
    console.log("ooh it's HOT out");
} else if (outCel >= 100 ) {
    console.log("your literally boiling");
}