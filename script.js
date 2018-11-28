var temperature = prompt('Temperature?');
console.log( "calculating" );
var unit = prompt('Unit?');
var celsius = temperature * 0.5;
var kelvin = temperature * 0.25;
var farhenheit = temperature * 0.7;
switch(unit){
    case "K":
        alert(temperature + " k = " + celsius + " c = " + farhenheit + " f");
        break;
    case "c":
        alert(kelvin + " K " + farhenheit + "° f ");
        break;
    case "f":
        alert(celsius + "° c " + kelvin + " k");
        break;
    default:
        alert("please enter unit");
    };
var temps = [temperature, celsius, kelvin]
