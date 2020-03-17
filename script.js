console.log("hello script js");

var temp;
var type = false;
var typename;
document.querySelector('#output').innerText = 'Please input temperature value.';
var inputHappened = function(currentInput) {
    if(!type) {
    //check for valid number
        if (parseFloat(currentInput)) {
            console.log('test1');
            temp = parseFloat(currentInput) ;
            console.log('test2');
            if (parseFloat(temp)) {
            console.log('test3');
            type = true;
            return output = 'Please choose type of measurement of temperature in cel , fah or kel.';
            }
        }
        else {
            return output = 'Please enter valid number.';
        }
    }
    if(type){
        typename = currentInput;
        switch(typename) {

            case 'cel' :
            changeCelcius(temp);
            console.log('test4');
            return output;
            break;

            case 'fah' :
            changeFahrenheit(temp);
            return output;
            break;

            case 'kel' :
            changeKelvin(temp);
            return output;
            break;

            default:
            return output = 'Please enter valid temperature type.';
        }
    }       /*return output;*/
};
//need to assign temp in global scope!@$!@£!@£12

var changeCelcius = function(temp) {
    var celToKel = temp + 273;
    var celToFah = temp * 9 / 5 + 32;

    console.log('test5');
    console.log(celToKel);
    console.log(celToFah);
    output = temp + 'C = ' + celToKel + 'K = ' + celToFah + 'F';
};
var changeKelvin = function(temp) {
    var kelToCel = temp - 273;
    var kelToFah = (temp - 273) * (9 / 5) + 32;
    console.log(kelToCel);
    console.log(kelToFah);
    output = temp + 'K = ' + kelToCel + 'C = ' + kelToFah + 'F';
};
var changeFahrenheit = function(temp) {
    var fahToCel = (temp - 32) * (5 / 9);
    var fahToKel = (temp - 32) * (5 / 9) + 273;
    console.log(fahToCel);
    console.log(fahToKel);
    output = temp + 'F = ' + fahToCel + 'C = ' + fahToKel + 'K';
};

//part 3
/* var inputHappened = function(currentInput) {
   var tempInput = currentInput;
   if (tempInput < 0) {
    return output = "Ooh it's cold out!"
   }
   else if (tempInput > 40 && tempInput < 100) {
    return output = "Ooh it's hot out!";
   }
   else if(tempInput >=100){
    return output = "You're literally boiling!";
   }
} */




    //fahrenheit to celcius
  /*var degreeCelcius = (currentInput - 32) * 5 / 9 ;
  //fahrenheit to kelvin
  var degreeKelvin = degreeCelcius + 273 ;
  return output = currentInput + ' Fahrenheit = ' +(degreeCelcius + 'C  Or ') + (degreeKelvin + 'K');
    }*/