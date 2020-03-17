console.log("hello script js");

//Part 1: display Kelvin and Celsius
/*var inputHappened = function (currentInput) {

    if (isNaN(parseFloat(currentInput))==false)  {

    var output = "Kelvin: " + (((currentInput-32)*5/9)+273.15).toFixed(2) + "K\n";
    var output2 = "Celsius: " + ((currentInput-32)*5/9).toFixed(2) + "C";

    return output + output2;
    }
}*/

//Part 2: display Kelvin and Celsius

var temp = [];
var i;
document.getElementById("input").placeholder = "temperature";
var inputHappened = function (currentInput) {

    temp.push(currentInput);

    if(temp.length == 1){

        document.getElementById("input").value = "";
        document.getElementById("input").placeholder = "temperature unit";
    }
    if(temp.length == 2) {

        var temperature = temp [0];
        var temperatureUnit = temp [1];

        if (temperatureUnit == "kelvin"){

            var tempKelvin = temperature;
            var tempCelsius = (parseFloat(temperature)-273.15).toFixed(2);
            var tempFahrenheit = ((parseFloat(temperature)-273.15)*9/5+32).toFixed(2);

        } else if (temperatureUnit == "fahrenheit"){

            var tempKelvin = (((parseFloat(temperature)-32)*5/9)+273.15).toFixed(2);
            var tempCelsius = ((parseFloat(temperature)-32)*5/9).toFixed(2);
            var tempFahrenheit = temperature;

        } else if (temperatureUnit == "celsius") {

            var tempCelsius = temperature;
            var tempKelvin = (parseFloat(temperature)+273.15);
            var tempFahrenheit = ((parseFloat(temperature)*9/5)+32).toFixed(2);
        }

    //Part 3 Temperature check
    if(tempCelsius<40) {
        var tempMsg = "Ooh it's cold out.";
    } else if (tempCelsius>=40 && temperature<=100) {
        var tempMsg = "Ooh it's hot out.";
    } else if (tempCelsius>100) {
        var tempMsg = "You're literally boiling.";
    }

    document.getElementById("input").value = "";
    document.getElementById("input").placeholder = "";

    //Part 4 Prompt Name and clothing
    var personName = prompt("Please enter your name");
    var wear;
    switch (true) {
        case (tempCelsius>70):
            wear = "nothing";
            break;
        case (tempCelsius>50):
            wear = "swimsuit";
            break;
        case (tempCelsius>30):
            wear = "shorts and shirt";
            break;
        case (tempCelsius>20):
            wear = "sweater";
            break;
        case (tempCelsius>10):
            wear = "sweater + jacket";
            break;
        case (tempCelsius>0):
            wear = "heavy jacket"
            break;
        case (tempCelsius<0):
            wear = "heavy jacket + toe warmers"
            break;
        default:
            wear = null;
    }

    return tempFahrenheit+"F = "+tempCelsius+"C = "+tempKelvin+" K\n"
    +tempMsg+"\n"+personName+", you better be wearing "+wear;
    }
}