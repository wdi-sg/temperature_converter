console.log("hello script js");
var tempC = null;
var tempF = null;
var tempK = null;

var inputHappened = function(currentInput, currentUnit, currentName){
  console.log( currentInput, currentUnit);
    if(currentUnit == "fahrenheit"){
      tempC = fahrenheitCelcius(currentInput);
      tempK = fahrenheitKelvin(currentInput);
      tempF = currentInput;
    }
    else if(currentUnit == "celcius"){
      tempC = currentInput;
      tempK = celciusKelvin(currentInput);
      tempF = celciusFahrenheit(currentInput);
    }
    else if(currentUnit == "kelvin"){
      tempC = kelvinCelcius(currentInput);
      tempK = currentInput;
      tempF = kelvinFahrenheit(currentInput);
    }
var output = tempC + "C " + tempK + "K " + tempF + "F ";
    if(tempC >= 100){
      output = output + "-- Don't go outside if you want to live";//"-- You are literally boiling!";
    }
    else if(tempC > 28){
      if(tempC >= 40){
        output = output + "-- ooh it's hot out there.. might be a goodtime for a swim!";  
      }
      else{
      output = output + "-- ooh it's hot out there.. wear some shorts and a shirt!";
      }
    }
    else if(tempC <= 20){
      if(tempC < 0){
        output = output + "-- ooh it's freezing.. might want to grab a heavy jacket";
      }
      else{
      output = output + "-- ooh it's really cold out there.. bring a sweater and a jacket!";
      }
    }
  
  return "Hello " + currentName + ", " + output;
};

var fahrenheitCelcius = function(inputTemp){
  var celcOut = (5/9) * (inputTemp - 32);
  return celcOut;
}

var fahrenheitKelvin = function(inputTemp){
  var kelvOut = (5/9) * (inputTemp - 32) + 273;
  return kelvOut;
}

var celciusFahrenheit = function(inputTemp){
  var fahrOut = (9/5) * inputTemp + 32;
  return fahrOut;
}

var celciusKelvin = function(inputTemp){
  var kelvOut = inputTemp + 273;
  return kelvOut;
}

var kelvinFahrenheit = function(inputTemp){
  var fahrOut = (9/5) * (inputTemp - 273) + 32;
  return fahrOut;
}

var kelvinCelcius = function(inputTemp){
  var celcOut = inputTemp - 273;
  return celcOut;
}