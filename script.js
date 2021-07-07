console.log("hello script js");
//codes for part 1 and part 3
var inputHappened = function(currentInput){
  console.log( currentInput );
  var kelvin = [(currentInput - 32) * (5/9) + 273.15];

  var celsius = [(currentInput - 32) * (5/9)];

  return (kelvin + " in Kelvin " + " and " + celsius + " in Celsius");

};

//try again

/*  if (inputHappened > 100) {
    console.log("your literally boiling");
} else if ( 40 > inputHappened < 100) {
    console.log("ooh it's hot out");
} else if (
    0 > inputHappened < 40){
    console.log("You're fine");
}
  else {
    console.log("ooh it's cold out");
}; */