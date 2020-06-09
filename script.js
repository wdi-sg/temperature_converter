console.log("hello script js");

function myFunction() {
  var x = document.getElementById("tempU").value;
  console.log(x);
}

var inputHappened = function(deg){
  console.log(deg);
  var cel= (deg-32)*(5/9);
  var kel= (deg-32)*(5/9) + 273.15;
  var output = deg + "°Fahrenheit = " + cel.toFixed(1) + "°Celsius = " + kel.toFixed(1) + "Kelvin";
  return output;
  }