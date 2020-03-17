//Part 1

var celsiusToKelvins = cels => cels + 273.15;

var celsiusToFahren = cels => cels / 5 * 9 + 32;

// var inputHappened = function(currentInput){
//     if (isNaN(currentInput)) {
//         console.log("not a number");
//         return "Please enter a number instead."
//     } else {
//         var fahren = celsiusToFahren(parseInt(currentInput));
//         var kelvin = celsiusToKelvins(parseInt((currentInput));
//         var output = `Kelvins: ${kelvin}\nFahrenheit: ${fahren}`;
//         return output;
//     }
// };

// document.getElementById("input").setAttribute("placeholder", "degrees celsius");

//Part 2
    //Prompting user

var inputField = document.getElementById("input")

inputField.setAttribute("style", "width: 28rem");

inputField.setAttribute("placeholder", "celsius/kelvins/fahrenheit");

var userName

var userPrompt = () => {
    userName = prompt("Please enter your name", "eg. John")
    alert(`Hi ${userName}, Please enter a number followed by celsius/kelvins/fahrenheit. eg. 15 celsius"`);
    inputField.removeEventListener("click", userPrompt);
}

inputField.addEventListener("click", userPrompt);

    //Fahrenheit and Kelvins conversion

var fahrenToCelsius = fah => (fah - 32) * 5 / 9;

var fahrenToKelvins = fah => celsiusToKelvins(fahrenToCelsius(fah));

var kelvinsToCelsius = kel => kel - 273.15;

var kelvinsToFahren = kel => celsiusToFahren(kelvinsToCelsius(kel));

    //Input Handler



var inputHappened = function(currentInput) {
    //Check input is in correct format
    if (currentInput.includes(" kelvins") ||
        currentInput.includes(" fahrenheit") ||
        currentInput.includes(" celsius")) {
    var tempNum = parseFloat(currentInput.split(" ")[0])
    var tempType = currentInput.split(" ")[1].toLowerCase()
    } else {
        console.log("Not valid input")
        return "Please enter a number followed by celsius/kelvins/fahrenheit. eg. 15 celsius"
    }
    //Converter
    var output = ""
    var celsius
    var fahren
    var kelvins

    if (isNaN(tempNum)) {
        console.log("Number not entered");
        return "Please enter a number followed by celsius/kelvins/fahrenheit. eg. 15 celsius"
    } else if (tempType === "kelvins") {
        celsius = kelvinsToCelsius(tempNum)
        fahren = kelvinsToFahren(tempNum)
        output = `Celsius: ${celsius}\nFahreneheit: ${fahren}`
    } else if (tempType === "celsius") {
        fahren = celsiusToFahren(tempNum)
        kelvins = celsiusToKelvins(tempNum)
        output = `Fahrenheit: ${fahren}\nKelvins: ${kelvins}`
    } else if (tempType === "fahrenheit") {
        celsius = fahrenToCelsius(tempNum)
        kelvins = fahrenToKelvins(tempNum)
        output = `Celsius: ${celsius}\nKelvins: ${kelvins}`
    }

//Part 4 and 5
    //Variable response to user depending on temperature
    if (celsius < 0 || kelvins < 273.15 || fahren < 32 ) {
        output = output + "\nOoh it's cold out!"
    } else if (celsius > 40 || kelvins > 313.15 || fahren > 104) {
        output = output + "\nOoh it's hot out!"
    } else if (celsius >= 100 || kelvins >= 373.15 || fahren >= 212) {
        output = output + "\nYou are literally boiling!"
    }


    if (celsius < 0 || kelvins < 273.15 || fahren < 32) {
        output = output + `\n${userName}, don't go outside if you want to live.`
    } else if (celsius < 5 || kelvins < 278.15 || fahren < 41) {
        output = output + `\n${userName}, wear a heavy jacket and toe warmers.`
    } else if (celsius < 12 || kelvins < 285.15|| fahren < 53.6) {
        output = output + `\n${userName}, wear a heavy jacket.`
    } else if (celsius < 18 || kelvins < 291.15|| fahren < 64.4) {
        output = output + `\n${userName}, I think you should wear both a sweater and a jacket.`
    } else if (celsius < 24 || kelvins < 297.15|| fahren < 75.2) {
        output = output + `\n${userName}, put on a sweater.`
    } else if (celsius < 30 || kelvins < 303.15|| fahren < 86) {
        output = output + `\n${userName}, put on shorts and a shirt.`
    } else if (celsius < 36 || kelvins < 309.15|| fahren < 96.8) {
        output = output + `\n${userName}, wear a swimsuit.`
    } else if (celsius >= 36 || kelvins > 309.15|| fahren > 96.8) {
        output = output + `\n${userName}, don't wear anything.`
    }

    return output;
};