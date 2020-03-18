let tempNumber;
let tempUnit;
let name;

var inputHappened = function(currentInput) {
  if (currentInput == parseInt(currentInput)) {
    tempNumber = parseInt(currentInput);
    console.log(tempNumber);
    return "Please insert unit F (fahrenheit), K (kelvin), C (celcius)";
  } else if ((currentInput === "F") || (currentInput === "C") || (currentInput === "K")) {
    tempUnit = currentInput;
    console.log(tempNumber);
    console.log(tempUnit);
    return "Insert your name";
  } else {
    name = currentInput;
    console.log(tempNumber + tempUnit + name);
    if (tempUnit === "F") {
      celcius = ((tempNumber - 32) * 5) / 9;
      console.log(celcius);
      kelvin = celcius + 273;
      if (celcius < 0) {
        clothes = "wear heavy Jackets + toe warmers + sweater";
        return celcius + " C " + kelvin + " K " + "ooh it's cold out." + " " + name + " " + clothes;
      } else if (celcius < 40) {
        clothes = "wear shorts and skirt";
        return celcius + " C " + kelvin + " K " + "ooh it's hot out." + " " + name + " " + clothes;
      } else if (celcius < 100) {
        clothes = "wear nothing or a swimsuits";
        return (
          celcius + " C " + kelvin + " K " + "your literally boiling" + " " + name + " " + clothes
        );
      }
    } else if (tempUnit === "C") {
      console.log(tempNumber);
      console.log(tempUnit);
      console.log(name);
      fahrenheit = (tempNumber * 9) / 5 + 32;
      console.log(fahrenheit);
      kelvin = tempNumber + 273;
      console.log(tempNumber);
      console.log(kelvin);
      if (tempNumber < 0) {
        clothes = "wear heavy Jackets + toe warmers + sweater";
        return kelvin + " K " + fahrenheit + " F " + "ooh it's cold out." + " " + name + " " + clothes;
      } else if (tempNumber < 40) {
        clothes = "wear shorts and skirt";
        return kelvin + " K " + fahrenheit + " F " + "ooh it's hot out." + " " + name + " " + clothes;
      } else if (tempNumber < 100) {
        clothes = "wear nothing or a swimsuits";
        return kelvin + " K " + fahrenheit + " F " + "your literally boiling" + " " + name + " " + clothes;
      }
    } else if (tempUnit === "K") {
      celcius = tempNumber - 273;
      fahrenheit = (celcius * 9) / 5 + 32;
      if (celcius < 0) {
        clothes = "wear heavy Jackets + toe warmers + sweater";
        return celcius + " C " + fahrenheit + " F " + "ooh it's cold out." + " " + name + " " + clothes;
      } else if (celcius < 40) {
        clothes = "wear shorts and skirt";
        return celcius + " C " + fahrenheit + " F " + "ooh it's hot out." + " " + name + " " + clothes;
      } else if (celcius < 100) {
        clothes = "wear nothing or a swimsuits";
        return celcius + " C " + fahrenheit + " F " + "your literally boiling" + " " + name + " " + clothes;
      }
    }
  }
};
