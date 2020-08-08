
//defining required global variables
var temperature = null
var temperatureUnit = null
var name = null
var state = "name" //state variable tells the code which global variable to store the input in. When the page loads, we first collect the name of the user.


/*
message function
This function returns a short message about the weather depending on the input temperature, which is given in Celcius.
tempInC is the temperature in Celcius
tempInC (number) --> message (string)
*/
var message = function(tempInC){
    if(tempInC<0){
        return "Oof! It's cold out!"
    } else if(tempInC > 40 && tempInC <= 100){
        return "Yikes! It's hot out!"
    } else if(tempInC > 100){
        return "It's literally boiling!!"
    }
    return " "
}

/*
whatToWear function
This function returns a recommendation on what to wear depending on the temperature. Input is temperature in Celcius.
tempInC is the temperature in Celcius
tempInC (number)  ---> recommendation (string)
*/
var whatToWear = function(tempInC){
    if(tempInC< -20 || tempInC > 45){
        return name + ", don't go outside if you want to live."
    } else if (tempInC>=-20&&tempInC<5){
        return name + ", wear a heavy jacket and toe warmers!"
    } else if (tempInC>=5&&tempInC<10){
        return name + ", a heavy jacket is in order!"
    } else if (tempInC>=10&&tempInC<15){
        return name + ", maybe a sweater AND a jacket today."
    } else if (tempInC>=15&&tempInC<20){
        return name + ", a light sweater will suffice!"
    } else if (tempInC>=20&&tempInC<25){
        return name + ", shorts and shirt weather today, rejoice!"
    } else if (tempInC>=25&&tempInC<33){
        return name + ", swimsuit seasonnnnn!"
    } else if (tempInC>=33&&tempInC<=45){
        return name + ", eep! Wear nothing!"
    }
}

/*
tempConverter function
This function converts the temperature from one unit to the other two units. It returns an array which contains the converted temperatures and the temperature in Celcius (which is used as the input for the message and whatToWear function).

temperature - number value of temperature
temperatureUnit - unit of temperature, can only have values "C", "K" or "F"

temperature (number), temperature unit (string) ---> [ convertedTemps (string), tempInC (number) ] (array)

var convertedTemp = tempConverter(350, F) //will be ["176.67 C, 449.67 K", 176.67]

*/

var tempConverter = function(temperature, temperatureUnit) {
    if(temperatureUnit=="F"){
        var tempInC = (temperature-32)*5/9
        var tempInK = tempInC + 273.15
        var tempString1 = tempInC.toFixed(2)+ " C"
        var tempString2 = tempInK.toFixed(2)+ " K"
    } else if(temperatureUnit=="K"){
        var tempInC = temperature - 273.15
        var tempInF = tempInC*9/5 + 32
        var tempString1 = tempInC.toFixed(2)+ " C"
        var tempString2 = tempInF.toFixed(2)+ " F"
    } else if(temperatureUnit=="C"){
        var tempInC = temperature
        var tempInF = temperature*9/5 + 32
        var tempInK = temperature + 273.15
        var tempString1 = tempInF.toFixed(2)+ " F"
        var tempString2 = tempInK.toFixed(2)+ " K"
    }
    return [tempString1 + ", " + tempString2, tempInC]

}


/*
inputHappened function
Reads the input as a name, temperature or unit depending on the value of the state variable. When a name or temperature is entered, a message on what to enter next is returned. When the temperature unit is entered, a message with the converted temperatures is returned.

currentInput - a string containing a name, temperature or temperature unit.
message - a string containing a prompt on what to enter next or the converted temperatures, a comment on the weather and a recommendation on what to wear.

currentInput (string) ---> message (string)
*/
var inputHappened = function(currentInput){
    if (state=="name") {
        name = currentInput
        state="temp" //now that name has been entered, we set the state to "temp", which tells the code that the next input is the temperature.
        return "Enter a temperature in degrees. Only enter a number, not the unit."
    } else if (state=="temp"){
        document.getElementById("promptOutput").innerHTML = "prompt"
        document.getElementById("output").style.backgroundColor = "lightgray"
        if(isNaN(currentInput)){
            return "Invalid input. Enter a number. Please try again."
        }
        temperature = parseInt(currentInput)
        state="unit" //now that temperature has been entered, we set the state to "unit", which tells the code that the next input is the unit.
        return "Now enter the unit in which you gave the temperature (F for Fahrenheit, C for Celcius and K for Kelvin."
    } else if (state=="unit") {
        temperatureUnit = currentInput
        if (!["K", "C", "F"].includes(temperatureUnit)){
            return "Invalid input, only 'F', 'C' and 'K' are accepted. Try again."
        }
        var convertedTemp = tempConverter(temperature, temperatureUnit)[0]
        var tempInC = tempConverter(temperature, temperatureUnit)[1]
        var messagePrint = message(tempInC)
        var whatToWearPrint = whatToWear(tempInC)

        state="temp" //setting the state back to "temp" to collect a new temperature
        document.getElementById("promptOutput").innerHTML = "output:"
        document.getElementById("output").style.backgroundColor = "cornflowerblue"
        return convertedTemp + ". " + messagePrint + " " + whatToWearPrint + "\nEnter another temperature."
    }
};