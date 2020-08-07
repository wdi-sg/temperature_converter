
alert("Enter a temperature in degrees.")
var temperature = null
var temperatureUnit = null
var name = " "
var state = "name"



var inputHappened = function(currentInput){
    if (!isNaN(currentInput)){
        temperature = parseInt(currentInput)
        return "Enter the unit in which you gave the temperature (F for Fahrenheit, C for Celcius and K for Kelvin."
    } else {
        temperatureUnit = currentInput
        if(temperatureUnit=="F"){
            var tempInC = (temperature-32)*5/9
            var tempInK = tempInC + 273
            var tempString1 = tempInC.toFixed(2).toString() + " C"
            var tempString2 = tempInK.toFixed(2).toString() + " K"
        } else if(temperatureUnit=="K"){
            var tempInC = temperature - 273
            var tempInF = tempInC*9/5 + 32
            var tempString1 = tempInC.toFixed(2).toString() + " C"
            var tempString2 = tempInF.toFixed(2).toString() + " F"
        } else if(temperatureUnit=="C"){
            var tempInC = temperature
            var tempInF = temperature*9/5 + 32
            var tempInK = temperature + 273
            var tempString1 = tempInF.toFixed(2).toString() + " F"
            var tempString2 = tempInK.toFixed(2).toString() + " K"
        } else {
            return "Invalid Input, only 'F', 'C' and 'K' are accepted. Try again."
        }

        var message = " "
        if(tempInC<0){
            message = "Oof! It's cold out!"
        } else if(tempInC > 40 && tempInC <= 100){
            message = "Yikes! It's hot out!"
        } else if(tempInC > 100){
            message = "It's literally boiling!!"
        }

        return tempString1 + ", " + tempString2+ ". " + message

    }
};