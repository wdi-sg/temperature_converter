console.log("hello script2 js");

// empty variable to store temperatures:
let tempInCel;
let tempInKel;
let tempInFar;
 // Global variables for temp conversion: for eg; farKel is converting from farenheit to kelvin

 let kelCel =  function(inputTemp){
  var celcOut = inputTemp - 273;
  return celcOut} ;

 let kelFar =  function(inputTemp){
  var fahrOut = (9/5) * (inputTemp - 273) + 32;
  return fahrOut;
};


 let celFar = function(inputTemp){
  var fahrOut = (9/5) * inputTemp + 32;
  return fahrOut;
};

 let celKel =  function(inputTemp){
  var kelvOut = inputTemp + 273;
  return kelvOut;
};
 let farCel=  function(inputTemp){
  var celcOut = (5/9) * (inputTemp - 32);
  return celcOut;
};
 let farKel = function(inputTemp){
    let kelvOut = (5/9) * (inputTemp - 32) + 273;
  return kelvOut;
};

// function to convert user input into temperature given user units
const convertTemp2 = (currentInput, userUnit, userName) => {
  console.log( currentInput, userUnit, userName)

  if(userUnit==='kelvin'){
    tempInCel = kelCel(currentInput);
    tempInKel= currentInput;
    tempInFar= kelFar(currentInput);
  } else if (userUnit=== 'celcius') {
    tempInCel = currentInput;
    tempInKel = celKel(currentInput);
    tempInFar = celFar(currentInput);
  } else if (userUnit === 'farenheit') {
    tempInCel = farCel (currentInput);
    tempInKel = farKel(currentInput);
    tempInFar = currentInput;
  }
let output = "It is " + tempInCel + "C " + tempInKel + "K " + tempInFar + "F now.";
//if statements to check the temp and what should the user be wearing
  if(tempInCel > 100){
    output +=  " Don't go outside if you want to live";
  } else if (tempInCel >= 40) {
    output += " ooh it's hot out there.. time to wear a swimsuit!";
  } else if (tempInCel > 28 && tempInCel < 40) {
    output += " ooh it's hot out there.. put on some shorts and a shirt!";
  }else if (tempInCel < 27 && tempInCel > 20) {
    output += " ooh it's hot out there.. wear a summer dress!!";

  } else if (tempInCel < 20  && tempInCel > 0) {
    output += " its abit chilly! bring a sweater and a jacket!";
  } else if (tempInCel < 0 ){
    output += "  oMG it's freezing.. might want to grab a heavy jacket! and toe warmers!";
  }
  return `Hello there ${userName}! ${output} `;
};







// var convertTemp2 = function(currentInput){
//   console.log( currentInput );

//   var tempInCelcius = (currentInput -32) * (5/9);
//   var tempInKel = tempInCelcius + 273.15;
//   let output = `${currentInput} farenheit is ${tempInCelcius} celcius and ${tempInKel} Kelvin`;
//   return output;
// };