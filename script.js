console.log("hello script js");
/*var inputHappened = function(currentInput){
  console.log( currentInput );
  var output = "WOW TEMPERATURE";
  return output;
};*/


// Part 1
var inputPrompt = document.getElementById("input");
inputPrompt.placeholder = "Input temp (in F)";
var inputHappened = function(currentInput) {
    console.log(currentInput);
    var tempFahrenheit = parseFloat(currentInput);
    var tempCelsius = (tempFahrenheit - 32) * (5 / 9);
    tempCelsius = tempCelsius.toFixed(2);
    tempKelvin = parseFloat(tempCelsius) + 273.15;
    tempKelvin = tempKelvin.toFixed(2);
    var output =  tempFahrenheit + " Fahrenheit equals to " + tempCelsius + " Celsius or " + tempKelvin + " Kelvin";

    return output;
};


// //Part 2 / 3 / 4
function convertTemp(temperature, unit) {
    var temp = parseInt(temperature);
    var outputTemp = { K: 0, F: 0, C: 0  };
    var outputTempString = { K: "", F: "", C: ""};
    switch(unit){
        case "K":
        outputTemp.K = temp;
        outputTemp.F = (temp - 273.15) * (9/5) + 32;
        outputTemp.C = temp - 273.15;
        break;
        case "F":
        outputTemp.F = temp;
        outputTemp.C = (temp - 32) * (5/9);
        outputTemp.K = (temp - 32) * (5/9) + 273.15;
        break;
        case "C":
        outputTemp.C = temp;
        outputTemp.K = temp + 273.15;
        outputTemp.F = (temp) * (9/5) + 32;;
        break;
    }
    outputTemp.K = outputTemp.K.toFixed(2);
    outputTemp.F = outputTemp.F.toFixed(2)
    outputTemp.C = outputTemp.C.toFixed(2)

    outputTempString.K = outputTemp.K + " Kelvin";
    outputTempString.F = outputTemp.F + " Fahrenheit";
    outputTempString.C = outputTemp.C + " Celsius";
    console.log(outputTempString.K);
    console.log(outputTempString.F);
    console.log(outputTempString.C);
}

function printMessage (tempInC){
    var temp = parseInt(tempInC);
    var message = "";
    if (temp < 0){
        message = "ooh it's cold out";
    }
    else if (temp>40 && temp<=100){
        message = "ooh it's hot out";
    }
    else if (temp>100){
         message = "your literally boiling";
    }
    console.log(message);
}

function suggestClothing (tempInC){
    var temp = parseInt(tempInC);
    var suggestion = "";
    if (temp>40 && temp<=70){
        suggestion = "nothing";
    }
    else if (temp>35 && temp<=39){
        suggestion = "swimsuit";
    }
    else if (temp>30 && temp<=34){
        suggestion = "shorts and shirt";
    }
    else if (temp>25 && temp<=29){
        suggestion = "sweater";
    }
    else if (temp>20 && temp<=24){
        suggestion = "sweater + jacket";
    }
    else if (temp>15 && temp<=19){
        suggestion = " heavy jacket";
    }
    else if (temp>-20 && temp<=14){
        suggestion = "heavy jacket and toe warmers";
    }
    else if (temp>=70 || temp <= -20){
         suggestion = "dont go outside if you want to live";
    }
    console.log(suggestion);
}