var inputHappened = function(currentInput){
    var dropDownValue = document.getElementById("unit");
    var selectedUnit = dropDownValue.options[dropDownValue.selectedIndex].text;
    var person = prompt("Please enter your name", "Your name here!");

if (selectedUnit === "Fahrenheit"){
  var inKelvin = (((parseInt(currentInput))+459.67)*(5/9));
  console.log(inKelvin)
  var inCelcius = (((parseInt(currentInput)) - 32)*(5/9));
  console.log(inCelcius);
  if(inCelcius<0){
  var output = "Hi! " + person + "!" + " The Converted to Kelvin is: " + inKelvin + " and converted to celcius is: " + inCelcius + " ooh it's cold out.\r " + "You are recommended to wear Heavy Jacket with Toe Warmers";
    return output;
}else if (inCelcius>40 && inCelcius<100){
 var output = "Hi! " + person + "!" + " The Converted to Kelvin is: " + inKelvin + " and converted to celcius is: " + inCelcius + " ooh it's hot out.\r" + "You are recommended to wear Nothing!";
    return output;
} else if (inCelcius>=100)
{
     var output = "Hi! " + person + "!" + " The Converted to Kelvin is: " + inKelvin + " and converted to celcius is: " + inCelcius + " your literally boiling.\r" + "Don't go outside if you want to live!";
    return output;
}else {
    var output = "Hi! " + person + "!" + " The Converted to Kelvin is: " + inKelvin + " and converted to celcius is: " + inCelcius + ".\r" + "You are recommended to wear Swimsuit or Short and Shirt";
    return output;
}
}else if (selectedUnit === "Celcius"){
  var cToK = ((parseInt(currentInput))+273.15);
  console.log(cToK);
  var cToF = ((parseInt(currentInput))*(9/5)+32);
  console.log(cToF);
if ((parseInt(currentInput))<0){
    var output = "Hi! " + person + "!" + " The Converted to Kelvin is: " + cToK + " and converted to celcius is: " + cToF + " ooh it's cold out.\r " + "You are recommended to wear Heavy Jacket with Toe Warmers";
    return output;
}else if ((parseInt(currentInput))>40 && (parseInt(currentInput))<100){
var output = "Hi! " + person + "!" + " The Converted to Kelvin is: " + cToK + " and converted to celcius is: " + cToF + " ooh it's hot out.\r" + "You are recommended to wear Nothing!";;
    return output;
}else if((parseInt(currentInput))>=100){
    var output = "Hi! " + person + "!" + " The Converted to Kelvin is: " + cToK + " and converted to celcius is: " + cToF + " your literally boiling.\r" + "Don't go outside if you want to live!";
    return output;
}else{
    var output = "Hi! " + person + "!" + " The Converted to Kelvin is: " + cToK + " and converted to celcius is: " + cToF +".\r" + "You are recommended to wear Swimsuit or Short and Shirt";
    return output;
}
}else {
  var kToC = ((parseInt(currentInput))-273.15);
  console.log(kToC);
  var kToF = ((parseInt(currentInput))*(9/5)-459.67);
  console.log(kToF);
if(kToC<0){
  var output = "Hi! " + person + "!" + " The Converted to Celcius is: " + kToC + " and converted to Fahrenheit is: " + kToF + " ooh it's cold out.\r " + "You are recommended to wear Heavy Jacket with Toe Warmers";
  return output;
}else if(kToC>40 && kToC<100){
  var output = "Hi! " + person + "!" + " The Converted to Celcius is: " + kToC + " and converted to Fahrenheit is: " + kToF + " ooh it's hot out.\r" + "You are recommended to wear Nothing!";
  return output;
}else if (kToC>=100){
  var output = "Hi! " + person + "!" + " The Converted to Celcius is: " + kToC + " and converted to Fahrenheit is: " + kToF + " your literally boiling.\r" + "Don't go outside if you want to live!";
  return output;
}else {
      var output = "Hi! " + person + "!" + " The Converted to Celcius is: " + kToC + " and converted to Fahrenheit is: " + kToF+".\r" + "You are recommended to wear Swimsuit or Short and Shirt";
  return output;
}
}
};

/*code for part 1 as below.

console.log("hello script js");

var inputHappened = function(currentInput){
  var inKelvin = (((parseInt(currentInput))+459.67)*(5/9));
  console.log(inKelvin)
  var inCelcius = (((parseInt(currentInput)) - 32)*(5/9));
  console.log(inCelcius);
  var output = "Converted to Kelvin is: " + inKelvin + " and converted to celcius is: " + inCelcius;
  return output;
};
*/