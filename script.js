// still working on part 2

console.log("hello script js");

// helper functions (e.g. tempKC converts K to C)
function tempKC(temp) {
    return temp - 273.15;
};

function tempKF(temp) {
    return tempCF(tempKC(temp))
};

function tempCK(temp) {
    return temp + 273.15
};

function tempCF(temp) {
    return temp * (9 / 5) + 32;
};

function tempFC(temp) {
    return (temp - 32) * (5 / 9);
};

function tempFK(temp) {
    return tempCF(tempFC(temp));
};
// user input data
var user_inputs = [];

// input logic
var inputHappened = function(currentInput){
  console.log(currentInput);

console.log(typeof(currentInput) === "number")



// prompts user for temperature
  if (!isNaN(parseInt(currentInput))) {
    var temperature = currentInput;
    user_inputs.push(currentInput);
    var temp_output = "Please enter temperature unit (F, C or K)";
  } else if (currentInput === "K") {
    temp_output = "Temperature is currently " + user_inputs[0] + " in K, " + tempKC(user_inputs[0]) + " in C, " + tempKF(user_inputs[0]) + " in F.";
  } else if (currentInput === "C") {
    temp_output = "Temperature is currently " + user_inputs[0] + " in C, " + tempCK(user_inputs[0]) + " in K, " + tempCF(user_inputs[0]) + " in F.";
  } else if (currentInput === "F") {
    temp_output = "Temperature is currently " + user_inputs[0] + " in F, " + tempFC(user_inputs[0]) + " in C, " + tempFK(user_inputs[0]) + " in K.";
  }

  output = temp_output
  return output;
}