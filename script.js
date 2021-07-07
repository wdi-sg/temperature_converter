console.log("hello script js");

//Create new array to store user input values.
var userInput = [];


//Give starting instructions.
document.querySelector('#output').innerText = `Hi! To get started, please give me the value of the temperature you wish to convert. (E.g. for 90 Celsius, just type 90. Then, press enter or click anywhere outside the input box.`;

//Add function to clear input after every value is given.
function clearInput() {
    return document.getElementById("input").value = ""
}

//Add function to reset all input values to start afresh.
function resetValues() {
    return userInput = [];
}

//What happens everytime a new input is detected.
var inputHappened = function(currentInput) {
    //Add the newest value given into the userInput array.
    clearInput();
    userInput.push(currentInput);

    //If user has input only the first value, prompt for second value.
    if (userInput.length === 1) {
        //1 values has been given.
        //Check if first input was a number.
        if (isNaN(userInput[0])) {
            userInput.pop();
            output = `Sorry, that was not a number. Please try again by inputting only a number.`
        } else {
            output = `Nice! The value you gave is ${userInput[0]}. Next, what's the unit of the temperature you have given? Please input one of the three: C (for Celsius), K (for Kelvin) or F (for Fahrenheit). Then, press enter or click anywhere outside the input box.`
        }
    } else if (userInput.length === 2) {
        //2 values have been given.
        var unit = userInput[1];
        //If value given is not K or C or F, remove the most recent value and give error message. If not, ask for name.
        if (unit !== "K" && unit !== "C" && unit !== "F") {
            userInput.pop();
            output = `Sorry, we cannot process that unit. Please try again by inputting only C, F or K above.`
        } else {
            output = `Alright! You're trying to convert ${userInput[0]}${unit}. Before I give you the results, can I get your name?`
        }
    } else if (userInput.length === 3) {
        //3 values have been given.
        //Naming the user inputs for easier reference & readability.
        var name = userInput[2];
        var unit = userInput[1];
        var temp = parseInt(userInput[0]);


        //Convert temperatures.
        var cToK = (temp + 273.15).toFixed(2);
        var cToF = (temp * (9 / 5) + 32).toFixed(2);
        var fToC = ((temp - 32) * (5 / 9)).toFixed(2)
        var fToK = ((temp - 32) * (5 / 9) + 273.15).toFixed(2)
        var kToC = (temp - 273.15).toFixed(2);
        var kToF = ((temp - 273.15) * (9 / 5) + 32).toFixed(2);

        //Part 3: Generate personalised message according to tempature and name.
        var msg = "";
        if ((unit === "C" && temp < 0) || (unit === "F" && fToC < 0) || (unit === "K" && kToC < 0)) {
            msg = `Damn it's cold. ${name}, I suggest wearing a really heavy jacket.`
        } else if ((unit === "C" && temp > 100) || (unit === "F" && fToC > 100) || (unit === "K" && kToC > 100)) {
            msg = `Damn it's literally boiling. ${name}, don't go out if you want to live.`
        } else if ((unit === "C" && temp > 40) || (unit === "F" && fToC > 40) || (unit === "K" && kToC > 40)) {
            msg = `It's pretty warm. ${name}, I suggest wearing nothing. Nothing at all. Or a swimsuit to be modest.`
        } else {
            msg = `That's an alright temperature. ${name}, you could wear your regular shorts/shirt, or a sweater if it's too cold.`
        }

        //Generate the final output.
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
            //There was an error. Reset values and give error message.
            resetValues();
            output = "Sorry, there was an error. Please ensure your second input is one of the following three units: C, F or K. Try again by inputting the value of your temperature!"
        }
    } else {
        //General error out of given scope. Reset everything.
        resetValues();
        output = "Sorry, there was an error. Try again by inputting the value of your temperature!"
    }
    return output;
}
