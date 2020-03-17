console.log("hello script js");

var alertFunction = function () {alert('Please input a temperature below in Farenheit.');
}

alertFunction();

var inputHappened = function(currentInput){
    var notInteger = isNaN(parseInt(currentInput))

    if (!notInteger) {
        var celsius = (currentInput - 32)*(5/9);
        var kelvin = celsius + 273.15;
        var output = 'The temperature is ' + celsius + 'C ' + 'or ' + kelvin + 'K';
    } else {
        return "Please enter a valid number."
    }
    return output;
};