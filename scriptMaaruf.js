var inputHappened = function(currentInput){

  let fcelc = (currentInput-32) * 5/9;
  let fkelv = (currentInput-32) * 5/9 + 273.15;
  let cfahr = (currentInput * 9/5) + 32;
  let ckelv = currentInput + 273.15;
  let kcelc = currentInput - 273.15;
  let kfahr = (currentInput - 273.15) * 9/5 + 32;


if (currentInput= currentInput + "F") {
    var output =  fcelc + "C or " + fkelv + "K";
    return output;
} else if(currentInput + "C"){
    var output =  cfahr + "F or " + ckelv + "K";
    return output;
} else (currentInput + "K");{
    var output =  kfahr + "F or " + kcelc + "C";
    return output;
}
};

var weatherType = function(temp){
  var reply = "";
  if (temperature< 0){
    reply += "ooh it's cold out";
  }
  if (temperature< 40) {
    reply += "ooh it's hot out";
  }
  if (temperature> 100) {
    reply += "you're literally boiling";
    return reply;
  }
  }

  var clothingOption = function(temp){
    var reply = "You should wear";
    if (temp > 100){
      reply += "nothing";
          }
    else if (temp > 80){
      reply += "swimsuit";}
    else if (temp > 70)  {
      reply += "shorts and shirt"
    }
    else if (temp > 40)  {
      reply += "a sweater"
    }
    else if (temp > 30)  {
      reply += "sweater + jacket"
    }
    else if (temp > -13)  {
      reply += "heavy jacket"}
    else {
      reply = "don't go outside if you want to live"
    }
    return reply;
  }