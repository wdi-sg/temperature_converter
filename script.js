//Modified by Lim Thean Yew
console.log("hello script js LTY");

var numberInput = 0;
var unitInput = '';
var tempInC = 0;

var inputHappenedNum = function(currentInput){
    numberInput = currentInput;
    convertAndDisplay();
};
var inputHappenedUnit = function(currentInput){
    unitInput = currentInput;
    convertAndDisplay();
};

/*
var inputHappenedName = function(currentInput){
    if (currentInput!=''){
        nameString = currentInput + ", Wear ";
    };
};
*/
var convertAndDisplay = function(){
    if (unitInput == 'f'){
        var fToC = (numberInput - 32) * 5/9;
        var fToK = (numberInput - 32) * 5/9 + 273.15;
        tempInC = fToC;
        display(fToC + " deg c",fToK + " deg k");
    }
    else if (unitInput == 'c'){
        var cToF = numberInput * 9/5 +32;
        var cToK = Number(numberInput) + 273.15;
        tempInC = numberInput;
        display(cToF + " deg f",cToK + " deg k");
    }
    else if (unitInput == 'k'){
        var kToC = numberInput - 273.15;
        var kToF = (numberInput - 273.15) * 9/5 + 32;
        tempInC = kToC;
        display(kToC + " deg c",kToF + " deg f");
    };
    if (unitInput !== ''){
        showMessage(tempInC);
    }
};
var showMessage = function(input){

    if (input > 0 && input <20){
        document.getElementById('clothing-text').textContent = "Suggested Clothing: Sweater, or Sweater + Jacket";
    }
    else if(input >= 20 && input < 40){
        document.getElementById('clothing-text').textContent = "Suggested Clothing: Shorts and Shirt";
    }
    else if (input >= 100){
        document.getElementById('message-text').textContent = "you are literally boiling...";
        document.getElementById('clothing-text').textContent = "Don't go outside if you want to live!";
    }
    else if (input >= 40){
        document.getElementById('message-text').textContent = "ooh it's hot out.";
        document.getElementById('clothing-text').textContent = "Suggested Clothing: Swimsuit, or nothing.";
    }
    else {
        document.getElementById('message-text').textContent = "ooh it's cold out.";
        document.getElementById('clothing-text').textContent = "Suggested Clothing: Heavy Jacket and Toe Warmers.";
    }
};