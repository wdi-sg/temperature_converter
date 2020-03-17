console.log("hello script js");

//Create new array to store user input values.
var userInput = [];


//Give starting instructions.
document.querySelector('#output').innerText = `Hi! To get started, please give me the value of the temperature you wish to convert. (E.g. for 90 Celsius, just type 90. Then, press enter or click anywhere outside the input box.`;

//Add function to clear input after every value is given.
function clearInput() {
    return document.getElementById("input").value = ""
}

function resetValues() {
    return userInput = [];
}

var inputHappened = function(currentInput) {
    //Add the value given into the userInput array.
    userInput.push(currentInput);

    //If user has input only the first value, prompt for second value.
    if (userInput.length === 1) {
        clearInput();
        if (isNaN(userInput[0])){
          userInput.pop();
          return output = `Sorry, that was not a number. Please try again by inputting only a number.`
        } else {
          return output = `Nice! The value you gave is ${userInput[0]}. Next, what's the unit of the temperature you have given? Please input one of the three: C (for Celsius), K (for Kelvin) or F (for Fahrenheit). Then, press enter or click anywhere outside the input box.`
        }
        //Once user has given both value and units, ask for name.
    } else if (userInput.length === 2) {
        clearInput();
        var unit = userInput[1];
        if (unit!=="K" && unit!=="C" && unit!=="F"){
          userInput.pop();
          return output = `Sorry, we cannot process that unit. Please try again by inputting only C, F or K above.`
        } else {
        return output = `Alright! You're trying to convert ${userInput[0]}${userInput[1]}. Before I give you the results, can I get your name?`
        //Give the final output after user has given all 3 inputs.
    }
  }else if (userInput.length === 3) {
        clearInput();

        //Naming the user inputs for easier reference & readability.
        var msg = "";
        var name = userInput[2];
        var unit = userInput[1];

        //convert temperatures.
        var temp = parseInt(userInput[0]);
        var cToK = (temp + 273.15).toFixed(2);
        var cToF = (temp * (9 / 5) + 32).toFixed(2);
        var fToC = ((temp - 32) * (5 / 9)).toFixed(2)
        var fToK = ((temp - 32) * (5 / 9) + 273.15).toFixed(2)
        var kToC = (temp - 273.15).toFixed(2);
        var kToF = ((temp - 273.15) * (9 / 5) + 32).toFixed(2);


        //Part 3: Generate additional message according to tempature and name.
        if ((unit === "C" && temp < 0) || (unit === "F" && fToC < 0) || (unit === "K" && kToC < 0)) {
            msg = `Damn it's cold. ${name}, I suggest wearing a really heavy jacket.`
        } else if ((unit === "C" && temp > 100) || (unit === "F" && fToC > 100) || (unit === "K" && kToC > 100)) {
            msg = `Damn it's literally boiling. ${name}, don't go out if you want to live.`
        } else if ((unit === "C" && temp > 40) || (unit === "F" && fToC > 40) || (unit === "K" && kToC > 40)) {
            msg = `It's pretty warm. ${name}, I suggest wearing nothing. Nothing at all. Or a swimsuit to be modest.`
        } else {
            msg = `That's an alright temperature. ${name}, you could wear your regular shorts/shirt, or a sweater if it's too cold.`
        }

        //Convert temperature and give personalised dressing suggestions.
        if (unit === "C") {
            output = `${temp}C is.... ${cToK}K and ${cToF}F. ${msg} Feel free to start afresh by inputting a new temperature value.`;
            resetValues();
        } else if (unit === "F") {
            output = `${temp}F is.... ${fToK}K and ${fToC}C. ${msg} Feel free to start afresh by inputting a new temperature value.`
            resetValues();
        } else if (unit === "K") {
            output = `${temp}K is.... ${kToC}C and ${kToF}F. ${msg} Feel free to start afresh by inputting a new temperature value.`
            resetValues();

        } else {
            //There was an error, second value given was not one of the three units provided. Reset values and give error message.
            userInput = [];
            output = "Sorry, there was an error. Please ensure your second input is one of the following three units: C, F or K. Try again by inputting the value of your temperature!"
        }
    } else {
        //User has given more than 3 inputs. Reset inputs and give error message.
        clearInput();
        userInput = [];
        output = "Sorry, there was an error. Try again by inputting the value of your temperature!"
    }
    return output;
}
