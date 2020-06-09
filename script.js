// var inputHappened = function(tempInput){
//   let kelvin =  Math.floor((tempInput - 32) * 5/9 + 273.15);
//   let celsius = Math.floor((tempInput - 32) * 5/9);
//   let output = tempInput + "\u00B0F = " + kelvin + "K = " + celsius + "\u00B0C";

//   return output;
// };

var tempInput;
var tempUnit;
var inputName;

document.querySelector('#tempInput').addEventListener('change', function(event){
    tempInput = parseInt(event.target.value);
      });

document.querySelector('#tempUnit').addEventListener('change', function(event){
    tempUnit = event.target.value;
      });

document.querySelector('#inputName').addEventListener('change', function(event){
    inputName = event.target.value;
    var output = inputHappened(tempInput,tempUnit,inputName);
    display(output);
      });

 var display = function( data ){
    var output = document.querySelector('#output');
     output.innerText = data;
   }


var inputHappened = function(tempInput,tempUnit,inputName){
  let tempC = 0;
  let tempF = 0;
  let tempK = 0;
  let output;
  if(tempUnit==='F'){
    tempF = tempInput;
    tempK = Math.floor((tempInput - 32) * 5/9 + 273.15);
    tempC = Math.floor((tempInput - 32) * 5/9);
  } else if(tempUnit==='K'){
    tempK = tempInput;
    tempF = Math.floor((tempInput - 273.15) * 9/5 + 32);
    tempC = Math.floor(tempInput - 273.15);
  } else if(tempUnit==='C'){
    tempC = tempInput;
    tempF = Math.floor((tempInput * 9/5) + 32);
    tempK = Math.floor((tempInput + 273.15));
}
  if(tempC<0)
 {
     output = tempF + "\u00B0F = " + tempK + "K = " + tempC + "\u00B0C " + inputName + ", ooh it's cold out, you should wear heavy jacket and toe warmers.";
     return output;
 } 
 else if(tempC>100) 
 {
    output = tempF + "\u00B0F = " + tempK + "K = " + tempC + "\u00B0C " + inputName + ", you're literally boiling, don't go outside if you want to live.";
    return output;
 } 
 else if(tempC>40)
 {
     output = tempF + "\u00B0F = " + tempK + "K = " + tempC + "\u00B0C " + inputName + ", ooh it's hot out, you should wear shorts and shirt.";
     return output;
 }
 else
 {
     output = tempF + "\u00B0F = " + tempK + "K = " + tempC + "\u00B0C " + inputName + ", Normal Temp";
     return output;
 }};