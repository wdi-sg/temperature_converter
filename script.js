console.log("hello script js");
var K = 0
var C = 0
var state = 0;
var operation = "";
var temp = 0
var F = 0
var inputHappened = function(currentInput){
  console.log( currentInput );
    if (state===0){
    if (Number.isInteger(temp)){
        state++;
        temp += parseInt(currentInput);
        var output = "please key in the temperatureUnit"
    } else var output = "please key in an integer"}
         if (state === 1){
            if (currentInput === "fahrenheit") {
                    state++;
                    operation = "fahrenheit";
                    var K = parseInt(temp)*5/9 - 32*5/9 +273.15;
                    var C = K - 273.15;
                    var output = K + " K and " + C + " C";
                        if(temp <0){
                            var output =K + " K and " + C + " C" +" ooh its cold out";
                        } else if (temp>0 && temp<40) {
                            var output = K + " K and " + C + " C" + " ooh its hot out";}
                            else if(temp >40){
                                var output = K + " K and " + C + " C" + " you're literally boiling"};
                    return output;
             } else if (currentInput === "celsius") {
                    state++;
                    operation = "celsius";
                    var F = parseInt(temp)*9/5 + 32;
                    var K = temp + 273.15;
                        if(temp <0){
                            var output =K + " K and " + F + " F" + " ooh its cold out";
                        } else if (temp>0 && temp<40) {
                            var output = K + " K and " + F + " F" + " ooh its hot out";}
                            else if(temp >40){
                                var output = K + " K and " + F + " F" + " you're literally boiling"}
                    return output;
             } else if (currentInput === "Kelvin") {
                    state++;
                    operation = "Kelvin";
                    var F = parseInt(temp)*9/5 - 273.15*9/5 +32;
                    var C = temp - 273.15;
                    var output = F + " F and " + C + " C";
                         if(temp <0){
                            var output =C + " C and " + F + " F" + " ooh its cold out";
                        } else if (temp>0 && temp<40) {
                            var output = C + " C and " + F + " F" + " ooh its hot out";}
                            else if(temp >40){
                                var output = C + " C and " + F + " F" + " you're literally boiling"}
                    return output;}


  // var Kelvin = parseInt(currentInput)*5/9 - 32*5/9 +273.15;
  // var C = Kelvin - 273.15
  // var output = Kelvin + " K and " + C + " C"

  return output;}}
