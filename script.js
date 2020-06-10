console.log("hello script js");

var convertKelvin = function(num){
  if (parseInt(num)) {
    var kelvin = (num - 32) * 5/9 + 273.15;
    console.log(kelvin);
  } else {
    console.log("Please use a number.");
  }
  return kelvin;
}

var convertCelcius = function(num){
 if (parseInt(num)) {
    var celcius = (num - 32) * 5/9;
    console.log(celcius);
  } else {
    console.log("Please use a number.");
  }
  return celcius;
}

var enteredFahrenheit = function(num){
if (parseInt(num) < 0) {
    console.log("ohh it's cold outside");
} else if (parseInt(num) = >40 && <100) {
    console.log("ohh it's hot outside");
} else (parseInt(num) >100) {
    console.log("it's literally boiling");
}
  return fahreinheit;
}