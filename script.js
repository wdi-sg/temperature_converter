var inputHappened = function(currentInput,inputUnit,name){
  console.log( currentInput );
  console.log( inputUnit );
  if (inputUnit == "fahrenheit") {
    var fToC = (Number((currentInput-32)*(5/9)).toFixed(2));
    var fToK = (Number((currentInput-32)*(5/9)+273.15).toFixed(2));
    if (fToC <= 0) {
      var message = "ooh it's cold out"+"\n"+name+" wear heavy jacket and toe warmers";
    }
    else if (fToC>= 40 && fToC <100) {
      var message = "ooh it's hot out"+"\n"+name+" wear nothing at all";
    }
    else if (fToC >= 100) {
      var message = "your literally boiling"+"\n"+name+" dont go outside if you want to live";
    }
    else {
      var message = "awesome weather"+"\n"+name+" dress up!";
    }
    var output = currentInput+"° F = "+fToC+"°C = "+fToK+"K"+ "\n"+message;
    return output;
  }
  else if (inputUnit == "celsius") {
    var cToK = (Number(parseInt(currentInput)+273.15)).toFixed(2);
    var cToF = (Number(currentInput*(9/5))+32).toFixed(2);
    if (currentInput <= 0) {
      var message = "ooh it's cold out"+"\n"+name+" wear heavy jacket and toe warmers";
    }
    else if (currentInput>= 40 && currentInput <100) {
      var message = "ooh it's hot out"+"\n"+name+" wear nothing at all";
    }
    else if (currentInput >= 100) {
      var message = "your literally boiling"+"\n"+name+" dont go outside if you want to live";
    }
    else {
      var message = "awesome weather"+"\n"+name+" dress up!";
    }
    var output = cToF+"° F = "+currentInput+"°C = "+cToK+"K"+ "\n"+message;
    return output;
  }

  else if (inputUnit == "kelvin") {
    if (currentInput < 0){
      output = "There is no temperature lower than 0K"
    }
    else{
      var kToC = (Number(currentInput - 273.15).toFixed(2));
      var kToF = (Number((currentInput - 273.15)*(9/5)+32).toFixed(2));
      if (kToC <= 0) {
        var message = "ooh it's cold out"+"\n"+name+" wear heavy jacket and toe warmers";
      }
      else if (kToC>= 40 && kToC <100) {
        var message = "ooh it's hot out"+"\n"+name+" wear nothing at all";
      }
      else if (kToC >= 100) {
        var message = "your literally boiling"+"\n"+name+" dont go outside if you want to live";
      }
      else {
        var message = "awesome weather"+"\n"+name+" dress up!";
      }
      var output = kToF+"° F = "+kToC+"°C = "+currentInput+"K"+ "\n"+message;
    }
    return output;
  }
  else{
    output = "wrong";
    return output;
  }
};