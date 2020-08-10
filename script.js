console.log("hello script js");

//global-variables
var tempObj = {};
var output;

//main function
var tempConvert = function(currentInput){

if (!tempObj.user){
    tempObj.user = currentInput;
    return "ok " + tempObj.user + ", let's start by entering the temperature to be converted"
} else {


if (!isNaN(parseInt(currentInput))){
    tempObj.temperature = currentInput;
return output = "Please enter temperature unit"
}

if (isNaN(parseInt(currentInput))&& tempObj.temperature){
    if(currentInput==="fahrenheit"){
      tempObj.tempUnit = currentInput;
      tempObj.tempInKel = fToKel(tempObj.temperature).toFixed(2);
      tempObj.tempInCel = fToCel(tempObj.temperature).toFixed(2);

output = tempObj.temperature + " F "+ " = " + tempObj.tempInCel + " C " + " = " + tempObj.tempInKel + " K "

if(tempObj.tempInCel < 0){
    output += "ooh its cold out there! " + tempObj.user + " please don't go outside if you want to live"
}

if(tempObj.tempInCel > 40 && tempObj.tempInCel < 100){
    output += "ooh its hot out there! " + tempObj.user + ", wear shorts and a shirt to stay comfy!"
}

if(tempObj.tempInCel > 100){
    output += "You are literally boiling, " + tempObj.user + "! I suggest you put on your swimsuit!"
}

return output;

    }

    if(currentInput==="celsius"){
        tempObj.tempUnit = currentInput;
      tempObj.tempInF = celToF(tempObj.temperature).toFixed(2);
      tempObj.tempInKel = celToKel(tempObj.temperature).toFixed(2);

output = tempObj.temperature + " C "+ " = " + tempObj.tempInF + " F " + " = " + tempObj.tempInKel + " K "

if(tempObj.temperature < 0){
    output += "ooh its cold out there! " + tempObj.user + " please don't go outside if you want to live"
}

if(tempObj.temperature > 40 && tempObj.temperature < 100){
    output += "ooh its hot out there! " + tempObj.user + ", wear shorts and a shirt to stay comfy!"
}

if(tempObj.temperature > 100){
    output += "You are literally boiling, " + tempObj.user + "! I suggest you put on your swimsuit!"
}

return output;

    }

        if(currentInput==="kelvin"){
            tempObj.tempUnit = currentInput;
      tempObj.tempInF = kelToF(tempObj.temperature).toFixed(2);
      tempObj.tempInCel = kelToCel(tempObj.temperature).toFixed(2);

output = tempObj.temperature + " K "+ " = " + tempObj.tempInF + " F " + " = " + tempObj.tempInCel + " C "

if(tempObj.tempInCel < 0){
    output += "ooh its cold out there! " + tempObj.user + " please don't go outside if you want to live"
}

if(tempObj.tempInCel > 40 && tempObj.tempInCel < 100){
    output += "ooh its hot out there! " + tempObj.user + ", wear shorts and a shirt to stay comfy!"
}

if(tempObj.tempInCel > 100){
    output += "You are literally boiling, " + tempObj.user + "! I suggest you put on your swimsuit!"
}

 return output;
    }

return "Please key in a valid temperature unit."

}

}


};


//helper functions

var fToCel = function(input){
  var output = (input - 32) * (5 / 9);
return output;
}

var celToF = function(input){
    var output = input * (9 / 5) + 32;
    return output;
}

var fToKel = function(input){
    var output = (input - 32) * (5 / 9) + 273.15;
    return output;
}

var celToKel = function(input){
    var output = parseInt(input) + 273.15;
    return output;
}

var kelToF = function(input){
    var output = (input - 273.15) * (9 / 5) + 32;
    return output;
}

var kelToCel = function(input){
    var output = input - 273.15;
    return output;
}




// pseudo-code:

// create a global var object to store data.

// global var should contain unit of temperature in kelvin, celsius and fahrenheit and all other values to be reused in future steps

// prompt user to key in name then temperature and temperature unit respectively step by step to store the necessary data

// create helper functions for conversion of the 3 temp types.

// store each of the converted value in the global obj var.

// we track each steps using boolean. If obj.user do not exist then we store the input as the user in the obj.

// next we check whether obj.temp exist. This is to track which step the user is at. If it doesnt then we store it in the obj.

// then return the outputs as specified in the user story.

// obj.tempUnit = "input2"

// if obj.temperature && obj.tempUnit === "fahrenheit"

// return obj.temperature + obj.tempUnit + etc.





// tempConvert

// function purpose:
// To convert temperature from Fahrenheit to Celsius/Kelvin or vice versa or within the 3 temperature units.

// data description:
// input(first): name of user
// input(second): value of temperature to be converted
// input(third): converted output together with some comments.

// input example:
// input(first): Alvis
// input(second): 45
// input(third): fahrenheit

// function signature:
// input(first) (string), input(second) (number), input(string)

// functional examples:

// var temperatureToConvert = tempConvert(alvis)(45)(fahrenheit); // will output 45 F = 7.22 C = 280.37 K;










// Part I solution:
// var tempConvert = function(currentInput){
//   console.log( currentInput );

// tempObj.tempInCel = fToCel(currentInput);

// tempObj.tempInKel = fToKel(currentInput);

//   var output = "temp in Celsius is: " + tempObj.tempInCel + ", temp in Kelvin is: " + tempObj.tempInKel;
//   return output;

// };


// Part II solution:
// var tempConvert = function(currentInput){

// if (!tempObj.user){
//     tempObj.user = currentInput;
//     return "ok " + tempObj.user + ", let's start by entering the temperature to be converted"
// } else {


// if (!isNaN(parseInt(currentInput))){
//     tempObj.temperature = currentInput;
// return output = "Please enter temperature unit"
// }

// if (isNaN(parseInt(currentInput))&& tempObj.temperature){
//     if(currentInput==="fahrenheit"){
//       tempObj.tempInKel = fToKel(tempObj.temperature);
//       tempObj.tempInCel = fToCel(tempObj.temperature);

// output = tempObj.temperature + " F "+ " = " + tempObj.tempInCel + " C " + " = " + tempObj.tempInKel + " K "
//  return output;
//     }

//     if(currentInput==="celsius"){
//       tempObj.tempInF = celToF(tempObj.temperature);
//       tempObj.tempInKel = celToKel(tempObj.temperature);

// output = tempObj.temperature + " C "+ " = " + tempObj.tempInF + " F " + " = " + tempObj.tempInKel + " K "
//  return output;
//     }

//         if(currentInput==="kelvin"){
//       tempObj.tempInF = kelToF(tempObj.temperature);
//       tempObj.tempInCel = kelToCel(tempObj.temperature);

// output = tempObj.temperature + " K "+ " = " + tempObj.tempInF + " F " + " = " + tempObj.tempInCel + " C "
//  return output;
//     }

// return "Please key in a valid temperature unit."

// }

// }


// };