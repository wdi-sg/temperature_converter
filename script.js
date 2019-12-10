console.log("hello script js");
var person = prompt ("please enter your Name.");



var inputHappened = function(currentInput){
  console.log( currentInput );
  var fTemp = parseInt(currentInput);
  var kTemp = Math.round((fTemp-32)*5/9+273.15);
  var cTemp = Math.round((fTemp-32)*5/9);

  if (cTemp<0){

    var output ="Your Temperature is " + kTemp + " Kelvin" + " or " + cTemp + " Celsius " + "\n" + "ohh its cold out " + person + " please wear heavy jackets and toe warmer";
}
 else if(cTemp>40 && cTemp<100){

    var output = "Your Temperature is " + kTemp + " Kelvin" + "\n" + cTemp + " Celsius " + "\n" + "ooh its hot out " + person + " please wear nothing";
 }

 else if (cTemp>100){

    var output = "Your Temperature is " + kTemp + " Kelvin" + "\n" + cTemp + " Celsius " + "\n" + "Dies! " + person + " dont go out if you want to live";
 }
 else{
  var output = "Your Temperature is " + kTemp + " Kelvin" + "\n" + cTemp + " Celsius " + "\n" +"its normal " + person + " wear short and shirt";
}
  return output;
};

function calculateTemp() {
  function celToFah(celsius) {
    var fahrenheit = Math.round(celsius * (9 / 5) + 32);
    return fahrenheit;
  }

  function fahToCel(fahrenheit) {
    var celsius = Math.round((fahrenheit - 32) * (5 / 9));
    return celsius;
  }

  function celToKel(celsius) {
    var kelvin = Math.round((celsius+273.15));
    return kelvin;
  }

  function fahToKel(fahrenheit){
    var kelvin = Math.round((fahrenheit - 32) * (5/9) + 273.15);
    return kelvin;
  }

  function kelToFah (kelvin){
    var fahrenheit = Math.round((kelvin-273.15)*(9/5)+32);
    return fahrenheit;
  }

  function kelToCel (kelvin){
    var celsius = Math.round((kelvin-273.15));
    return celsius;
  }




  // Checks if which unit is selected
  var tempSelected = document.getElementById("temp_diff");
  var valueTemp = tempSelected.options[tempSelected.selectedIndex].value;

  // Checks the value inside the Temperature input
  var numberTemp = document.getElementById("temp").value;

  var result;

  if (valueTemp == 1)  {
    result = celToFah(numberTemp);
    result1 = celToKel(numberTemp);
    result2 = numberTemp;
    document.getElementById("resultContainer").innerHTML =
      "= " + result + "°Fahrenheit" +
      "= " + result1 + "°Kelvin" +
      "= " + result2 + "°Celsius";

  } else if (valueTemp == 2) {
    result = fahToCel(numberTemp);
    result1 = fahToKel ( numberTemp);
    result2 = numberTemp;
    document.getElementById("resultContainer").innerHTML =
      "= " + result + "°Celsius" +
      "=" + result1 + "°Kelvin" +
      "=" + result2 + "°Fahrenheit";


  }

  else {

    result = kelToCel(numberTemp);
    result1 = kelToFah ( numberTemp);
    result2 = numberTemp;
    document.getElementById("resultContainer").innerHTML =
      "= " + result + "°Celsius" +
      "=" + result1 + "°Fahrenheit" +
      "=" + result2 + "°Kelvin";


  }
}