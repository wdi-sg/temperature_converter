console.log("hello script js");

alert("Please enter your degrees in Fahrenheit to convert them to Celsius");

var inputHappened = function(currentInput){

    var Fahrenheit = currentInput + "\xbaF";
    var Celsius1 = (currentInput-32) * 5 / 9 + "\xbaC";
    var Kelvin = (Celsius1 + 273.15);
    // var Kelvin = currentInput + 459.67;

    var output = "Your degree in celsius is" + " " + Celsius1;

        console.log(Kelvin);
        console.log(Celsius1);
        return output;
};

console.log();