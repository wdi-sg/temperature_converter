var name = prompt("What is your name?")
var temperature = prompt("What is the temperature")
var clothes = [
  'nothing',
  'swimsuit',
  'shorts and shirt',
  'sweater',
  'sweater + jacket',
  'heavy jacket',
  'heavy jacket and toe warmers',
  'dont go outside if you want to live'
 ];

 if (temperature <= 0) {
     console.log("ooh its cold out");
     console.log(name + " "  + "you should wear " + clothes[6]);
 } else if (temperature > 40 && temperature < 100) {
     console.log("ooh it's hot out");
     console.log(name + " "  + "you should wear " + clothes[2]);
 } else if (temperature > 100) {
     console.log ("You are literally burning!");
     console.log(name + " "  + "you should wear " + clothes[0]);
 } else {
     console.log("CRITICAL ERROR");
 };