console.log("hello script js");

var inputHappened = function(currentInput){

var userInputTemp = parseInt(currentInput);
var nc = currentInput.search("celsius");
var nf = currentInput.search("fahrenheit");
var nk = currentInput.search("kelvin");
console.log(nc,nf,nk);
    if (isNaN(userInputTemp)) {
        return "No number";
    }
    else if ((nc === -1) && (nk === -1) && (nf != -1)){
        var fahrToCel= "Temperature in celsius is " + 5/9 * (userInputTemp - 32);
        var fahrToKel= "Temperature in kelvin is " + (5/9 * (userInputTemp - 32)+273.15);
        console.log(fahrToCel,fahrToKel);
        return fahrToCel + " and "+ fahrToKel;
    }
    else if ((nc === -1) && (nf === -1) && (nk != -1)){
        var kelToCel= "Temperature in celsius is " + (userInputTemp - 273);
        var kelToFahr = "Temperature in fahrenheit is " + (9/5 * (userInputTemp - 273)+32);
        console.log(kelToCel,kelToFahr);
        return kelToCel + " and "+ kelToFahr;
    }
    else if ((nk === -1) && (nf === -1) && (nc != -1)){
        var celToKel= "Temperature in kelvin is " + (userInputTemp + 273);
        var celToFahr = "Temperature in fahrenheit is " + ((9/5 * userInputTemp)+32);
        console.log(celToKel,celToFahr);
        return celToKel + " and "+ celToFahr;
    }
    else {
        return "Invalid input"
    }
};


