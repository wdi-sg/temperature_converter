var temperature = parseInt(prompt("Enter the numerical value for the temperature", "0"));
var temperatureUnit = prompt("What is the temperature's Unit?") //is there a way to do a prompt with selection besides using a form?
function calculateTemp(){
  if(temperatureUnit == "Degrees"){
    alert("Nothing to convert");
  }else if(temperatureUnit == "Fahrenheit"){
    convertTempC();
  }else if (temperatureUnit == "Celsius") {
    convertTempF();
  }else{
    alert("Check your spelling!");
  }
}

//store results in global variables so other functions can access it
var resultC;
var resultF;
var tempArray = [];
//Convert to C
function convertTempC(){
  resultC = (temperature - 32) * .5556;
  convertTemptoK();
}
//Convert to F
function convertTempF(){
  resultF = (temperature * 1.8 + 32);
  convertTemptoK();
}
//Covert Temp to K
function convertTemptoK(){
  resultFtoK = (temperature + 459.67) * 5 / 9;
//combine both results into one line with ifelse
//if there is something in resultC it will run the first statement, if there isn't it will run the second one
  if(resultC){
  console.log(resultC +"\xB0"+"C "+ resultFtoK + "\xB0" + "K");
  tempArray.push(temperature,resultC,resultFtoK);
  console.log(tempArray);
  }else
  {
  console.log(resultF +"\xB0"+"F "+ resultFtoK + "\xB0" + "K");
  tempArray.push(temperature,resultF,resultFtoK);
  console.log(tempArray);
  }
}

calculateTemp();
