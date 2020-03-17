console.log("hello script js");

document.querySelector('#output').innerText = "Please provide starting temperature"

var status = "getting temperature";
var temperature;
var temperatureUnit;
var celsius;
var fahrenheit;
var kelvin;

var inputHappened = function(currentInput){
  console.log( currentInput );

  //Initial State - getting temperature, check if integer
  if (status === "getting temperature" && isNaN(parseInt(currentInput))){
    var output = "Please provide a number";
    return output;
  }

  //getting temperature, if integer
  if (status === "getting temperature" &&
             typeof parseInt(currentInput) === "number"){
    temperature = parseInt(currentInput);
    status = "getting temperature unit";
    var output = "Please provide a temperature unit";
    return output;
  }

//verifying temperature unit
  var tempUnitCorrect = false;
  if (status === "getting temperature unit" && (
      currentInput.toLowerCase().includes("fahrenheit") ||
         currentInput.toLowerCase().includes("celsius") ||
             currentInput.toLowerCase().includes("kelvin"))){
    tempUnitCorrect = true;
    temperatureUnit = currentInput;
  }

  //getting temp unit, if correct


  if(status === "getting temperature unit" && tempUnitCorrect){
    var output;

    if (temperatureUnit.includes("fahrenheit")){
        celsius = (temperature - 32) / 1.8;
        kelvin = celsius + 273.15;
        output = `${temperature} Fahrenheit = ${celsius} Celsius = ${kelvin} Kelvin`;
    } else if (temperatureUnit.includes("celsius")){
        celsius = temperature;
        fahrenheit = (temperature * 1.8) + 32;
        kelvin = temperature + 273.15;
        output =`${temperature} Celsius = ${fahrenheit} Fahrenheit = ${kelvin} Kelvin`;
    } else {
        celsius = temperature - 273.15;
        fahrenheit = (celsius - 32) / 1.8;
        output = `${temperature} Kelvin = ${fahrenheit} Fahrenheit = ${celsius} Celsius`;
    }

    var tempComment;
    if (celsius < 0){
        tempComment = "ooh its cold out\n\n";
    }
    else if (celsius > 40 && celsius < 100){
        tempComment = "ooh its hot out\n\n";
    }
    else if (celsius > 100){
        tempComment = "you're literally boiling\n\n";
    } else {
        tempComment = "";
    }

    status = "getting name";
    return tempComment + output + "\n\n What's your name?";
  }
  //reprompt if temp unit is wrong
  if (status === "getting temperature unit" && !tempUnitCorrect){
    var output = "Please choose: fahrenheit, celsius or kelvin";
    return output;
  }

  //getting name, returning clothes recommendation
  if (status === "getting name") {
    var clothes;
    var output;
    if (celsius > 50) {
        clothes = "nothing";
    } else if (celsius <= 50 && celsius > 40){
        clothes = "a swimsuit";
    } else if (celsius <= 40 && celsius > 30){
        clothes = "shorts";
    } else if (celsius <= 30 && celsius > 20){
        clothes = "a sweater";
    } else if (celsius <= 20 && celsius > 10){
        clothes = "sweater + jacket";
    } else if (celsius <= 10 && celsius > 0){
        clothes = "a heavy jacket";
    } else if (celsius <= 0 && celsius > -10){
        clothes = "a heavy jacket + toewarmers";
    } else {
        clothes = ".... hm actually, don't go out if you want to live";
    }

    var output = `Hey ${currentInput}, you should wear ${clothes}`;
    return output;

  }
};