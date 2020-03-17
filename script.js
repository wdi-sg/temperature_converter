/*
var inputHappened = function(currentInput){
  console.log( currentInput );
  var output = "WOW TEMPERATURE";
  return output;
};*/
/*var inputHappened = function(currentInput){
    console.log("Enter temperature in Fahrenheit");
    console.log(currentInput);
    var celsius = (currentInput - 32) * 5/9;
    var kelvin = (currentInput - 32) * 5/9 + 273.15;

    var output = "Temperature in Celsius is " + celsius + " and in Kelvin is " + kelvin;
    return output;

}*/
var inputHappened = function(currentInput) {
    var output;
    var name = console.log("enter you name");
    console.log(name);
    console.log("Enter temperature in degrees");
    console.log(currentInput);
    if(currentInput < 0){
        console.log("ooh it's cold")
    }
    else if (currentInput >= 40 && currentInput < 100){
            console.log("ooh it's hot");
    }
    else if (currentInput > 100){
            console.log("you are literally boiling");
    }
    else{
        console.log("----");
    }

  var temperatureUnit =  console.log("Enter unit of temperature");
    console.log(temperatureUnit);
 if(temperatureUnit === "fahrenheit"){
    var celsius = (currentInput - 32) * 5/9;
    var kelvin = (currentInput - 32) * 5/9 + 273.15;
     output = celsius + " C" + kelvin + " K"}
else if(temperatureUnit === "celsius"){
    var fahrenheit = (currentInput + 32) * 9/5;
    var kelvin = currentInput + 273.15;
     output = fahrenheit + " F" + kelvin + " K";

}
else{
    var celsius = currentInput -273.15;
    var fahrenheit = (currentInput - 273.15) * 9/5 +32;
    output = celsius + " C" + fahrenheit + " F"
}


    return output;

}