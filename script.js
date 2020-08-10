var state = -1;
var initialTemp, name;
var inputHappened = function(currentInput){
    if(currentInput == "r") {
        state = 0;
        return "Please input a new Temperature";
    }
    if(state == 0 && !isNaN(currentInput) || state > 0 || state == -1){
        switch(state) {
            case -1: state++; name = currentInput; return "Input Temperature"; break;
            case 0: state++; initialTemp = currentInput; return "Input Temperature unit"; break;
            case 1: {
                 state++;
                if(currentInput.toLowerCase() == "fahrenheit"){
                    return initialTemp + circle() + "F = " + farenToKelvinCelsius(0,initialTemp) + " " + circle() + "C = " + farenToKelvinCelsius(1, initialTemp) + "K " + "\n" + tempCheck(farenToKelvinCelsius(0, initialTemp)) + "\n" + "[ Type 'r' to reset ]";
                }
                else if(currentInput.toLowerCase() == "celsius") {
                    return initialTemp + " " + circle() + "C = " + celsiusToKelvinFaren(1, initialTemp) + "K = " +  celsiusToKelvinFaren(0, initialTemp) + circle() + "F. " + "\n" + tempCheck(initialTemp) + "\n" + "[ Type 'r' to reset ]";
                }
                else if(currentInput.toLowerCase() == "kelvin"){
                    return initialTemp + "K = " + kelvinToCelsiusFaren(1, initialTemp) + circle() + "C = " + kelvinToCelsiusFaren(0, initialTemp) + " " + circle() + "F " + "\n" + tempCheck(kelvinToCelsiusFaren(1, initialTemp)) + "\n" + "[ Type 'r' to reset ]";
                }
                else {
                    state = 1;
                    return "Input valid Temperature unit (Fahrenheit, Celsius or Kelvin).";
                }
            }
            default: return "Type 'r' and hit 'enter' to restart"; break;
        }
    }
    return "Please input a valid Temperature.";
};
function farenToKelvinCelsius(x, y) {
    var k = (y - 32) * 5/9;
    return x == 1 ? (k + 273.15).toFixed(2) : k.toFixed(2);
}
function celsiusToKelvinFaren(x, y) {
    return x == 1 ? parseInt(y) + 273.15 : ((y * 9/5) + 32 ).toFixed(2);
}
function kelvinToCelsiusFaren(x, y) {
    var k = parseInt(y) - 273.15
    return x == 1 ? k.toFixed(2) : ((k * 9/5) + 32).toFixed(2);
}
function tempCheck(x) {
    if(x < -30)
        return "Dont go outside if you wanna live...";
    return x < 0 ? "Ooh it's cold out.. " + "\n" + name + ", you should really wear a heavy jacket and toe warmers." : x <= 40 ? "Ooh it's hot out!! " + "\n" + name + ", you should just wear some shorts and shirt!" : "You're literally boiling!!! " + "\n" + name + ", you should be naked. ";
}
function circle(){
    return "\xB0";
}