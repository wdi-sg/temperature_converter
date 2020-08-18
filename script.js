console.log("hello script js");

let input = 0;
let temp = '';
let unit = '';

function isString(currentInput){
    return typeof value === 'string' || currentInput;
}

function showingTemps(currentinput){
    if (currentinput === 'kel') {
        var output = 'kel';
        return output;
    } else if (currentinput === 'cel'){
        var output = 'cel';
        return output;
    } else if (currentinput === 'fah'){
        var output = 'fah';
        return output;
    }
}

function caluclateTemp(temp){
    if(unit === "fah"){
        var outputKel = (temp - 32) * (5/9) + 273.15;
        var outputCel = (temp - 32) * (5/9);
        var output = `${outputKel} Kel & ${outputCel} Cel`;
        return output;
    } else if (unit === "kel") {
        var outputFah = (temp - 273.15) * (9/5) + 32;
        var outputCel = temp - 273.15;
        var output = `${outputFah} Fah & ${outputCel} Cel`;
        return output;
    } else if (unit === "cel") {
        var outputFah = (temp * (9/5)) + 32;
        var outputKel = (temp + 273.15);
        var output = `${outputFah} Fah & ${outputKel} Kel`;
        return output;
    }
}

function checkTemp(temp){
    if (temp < 0) {
        var output = "ooh it's cold out";
        return output;
    } else if (temp > 0 && temp < 40) {
        var output = "ooh It's just nice";
        return output;
    } else if (temp > 40) {
        var output = "ooh it's hot out";
        return output;
    } else if (temp > 40 && temp >100) {
        var output = "your literally bolling";
        return output;
    }
}

var inputHappened = function(currentInput){

if(input <= 1){
        if(!isNaN(currentInput) && input === 0){
            console.log("It's Temperature");
            var output = currentInput;
            input++;
            temp = output;
            return output;
        } else if(showingTemps(currentInput) && input === 1){
                    console.log("it's a unit");
                    var output = currentInput;
                    unit = output;
                    return output;
                }
        }
var output = caluclateTemp(temp);
var output1 = checkTemp(temp);
return output + ' ' + output1;
}