// still working on part 2

console.log("hello script js");

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

var inputHappened = function(currentInput){
  console.log(currentInput);

console.log(typeof(currentInput) === "number")

  if (typeof(parseInt(currentInput)) === "number") {
    var temperature = currentInput;
    var output = "Please enter temperature unit (F, C or K)";
  } else if (parseInt(currentInput)) === false {

}

  return output;
};