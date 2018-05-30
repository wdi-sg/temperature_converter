var temperature = parseInt(prompt("Enter the numerical value for the temperature", "0"));
var temperatureUnit = prompt("What is the temperature's Unit?") //is there a way to do a prompt with selection besides using a form?

function calculateTemp(){
  if(temperatureUnit == "Degrees"){
    alert("Nothing to convert");
  }else if(temperatureUnit == "Fahrenheit"){
    //if tempUnit = Fahrenheit call this function
    convertTempC();
  }else if (temperatureUnit == "Kelvin") {
    //if tempUnit = Kelvin call this function
    convertTempK();
  }else{
    alert("Check your spelling!");
  }
}
//Equation pulled from net, not sure if correct or not lol
//Convert to Degree Celsius
function convertTempC(){
  result = (temperature - 32) * .5556;
  console.log(result + "\xB0" + "C");
}
//Convert to Kelvin
function convertTempK(){
  result = (temperature + 459.67) * 5 / 9;
  console.log(result + "\xB0" + "K");
}
calculateTemp();
