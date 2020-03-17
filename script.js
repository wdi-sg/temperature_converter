let tempNumber;
let tempUnit;
let name;

var inputHappened = function(currentInput) {
  if (currentInput == parseInt(currentInput)) {
    tempNumber = currentInput;
    console.log(tempNumber);
    return "Please insert unit F (fahrenheit), K (kelvin), C (celcius)";
  } else {
    tempUnit = currentInput;
      if (tempUnit === "F"){
      celcius = ((tempNumber - 32) * 5) / 9;
      console.log(celcius);
      kelvin = celcius + 273;
            if (celcius < 0) {
        return celcius + " C " + kelvin + " K " + "ooh it's cold out." + name;
    }   else if (celcius < 40) {
        return celcius + " C " + kelvin + " K " + "ooh it's hot out." + name;
    }   else if (celcius < 100) {
        return celcius + " C " + kelvin + " K " + "your literally boiling" + name;
    }}  else if (tempUnit === "C") {
      fahrenheit = (tempNumber * 9) / 5 + 32;
      kelvin = tempNumber + 273;
         if ( tempUnit < 0) {
        return kelvin + " K " + fahrenheit + " F " + "ooh it's cold out.";
    }  else if (tempUnit < 40) {
        return kelvin + " K " + fahrenheit + " F " + "ooh it's hot out.";
    }  else if (tempUnit < 100) {
        return kelvin + " K " + fahrenheit + " F " + "your literally boiling";
    } 
  } else if (tempUnit === "K") {
    celcius = tempNumber - 273;
    fahrenheit = (celcius * 9) / 5 + 32;
    if (celcius < 0) {
      return celcius + " C " + fahrenheit + " F " + "ooh it's cold out.";
    } else if (celcius < 40) {
      return celcius + " C " + fahrenheit + " F " + "ooh it's hot out.";
    } else if (celcius < 100) {
      return celcius + " C " + fahrenheit + " F " + "your literally boiling";
    }}}
      
    }
