console.log("hello script js");

document.querySelector('#output').innerText = "Please provide starting temperature"

var status = "getting temperature";
var temperature;
var temperatureUnit;

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
        var celsius = (temperature - 32) / 1.8;
        var kelvin = celsius + 273.15;
        output = `${temperature} Fahrenheit = ${celsius} Celsius = ${kelvin} Kelvin`;
    } else if (temperatureUnit.includes("celsius")){
        var fahrenheit = (temperature * 1.8) + 32;
        var kelvin = temperature + 273.15;
        output =`${temperature} Celsius = ${fahrenheit} Fahrenheit = ${kelvin} Kelvin`;
    } else {
        var celsius = temperature - 273.15;
        var fahrenheit = (celsius - 32) / 1.8;
        output = `${temperature} Kelvin = ${fahrenheit} Fahrenheit = ${celsius} Celsius`;
    }

    var tempComment;
    if (temperatureUnit.includes("celsius") && temperature < 0){
        tempComment = "ooh its cold out\n";
    }
    if (temperatureUnit.includes("celsius") && temperature > 40 && temperature < 100){
        tempComment = "ooh its hot out\n";
    }
    if (temperatureUnit.includes("celsius") && temperature > 100){
        tempComment = "you're literally boiling\n";
    }

    return tempComment + output;
  }
  //reprompt if temp unit is wrong
  if (status === "getting temperature unit" && !tempUnitCorrect){
    var output = "Please choose: fahrenheit, celsius or kelvin";
    return output;
  }
};