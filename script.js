
var convertKelvin = function(input){
  if (parseInt(input)) {
    var kelvin = (input - 32) + 255.372
    console.log(kelvin)
  } else {
    console.log("please use a number")
  }
  return kelvin;
};

var convertCelcius = function(input){
    if (parseInt(input)) {
    var celsius = (input - 32) * 5 / 9
    console.log(celsius)
  } else {
    console.log("please use a number")
  }
  return celsius;}

