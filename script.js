console.log("hello script js");

//Create new array to store user input values.
var userInput = [];

//Give starting instructions.
document.querySelector('#output').innerText = `Hi! To get started, please give me the value of the temperature you wish to convert. (E.g. for 90 Celsius, just type 90. Then, press enter or click anywhere outside the input box.`;

var inputHappened = function(currentInput){
//Add the value given into the userInput array.
  userInput.push(currentInput);

//If user has input only the first value, prompt for second value.
  if (userInput.length===1) {
    return output = `Nice! The value you gave is ${userInput[0]}. Next, what's the unit of the temperature you have given? Please input one of the three: C (for Celsius), K (for Kelvin) or F (for Fahrenheit). Then, press enter or click anywhere outside the input box.`

//Once user has given both value and units, convert value appropriately.
  } else if (userInput.length===2){
    var temp = parseInt(userInput[0]);
    var unit = userInput[1];

    //Determining what to calculate based on the unit given.
    if (unit==="C") {
     output = `${temp}C is.... ${(temp + 273.15).toFixed(1)}K and ${(temp*(9/5) + 32).toFixed(1)}F. Refresh to calculate a new value!`
    } else if (unit==="F") {
     output = `${temp}F is.... ${(temp*(5/9) + 273.15).toFixed(1)}K and ${((temp -32)*(5/9)).toFixed(1)}C. Refresh to calculate a new value!`
    } else if (unit==="K") {
     output = `${temp}K is.... ${(temp - 273.15).toFixed(1)}C and ${((temp -273.15)*(9/5) + 32).toFixed(1)}F. Refresh to calculate a new value!`
    } else {
      //There was an error. Reset values and give error message.
      userInput = [];
     output = "Sorry, there was an error. Please ensure your first input is a number and your second input is one of the following three units: C, F or K. Try again by inputting the value of your temperature!"
    }
//If user has given more than 3 inputs, reset values and give error message.
  } else {
  userInput = [];
   output = "Sorry, there was an error. Please ensure your first input is a number and your second input is one of the following three units: C, F or K. Try again by inputting the value of your temperature!"
 }
  return output;
}
