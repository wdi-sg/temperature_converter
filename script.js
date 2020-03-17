console.log("Insert numerical value of degrees in farenheit into white box");

var temperature = null;



var inputHappened = function(currentInput){
  var comment = null;
  console.log(currentInput);


  if (!isNaN(currentInput)){
    var output = "input celcius, kelvin or farenheit";

    temperature = parseInt(currentInput);

    return output;

  }else if (currentInput === 'kelvin'){

   var farenheit = Math.floor((temperature - 273.15) * (9/5) + 32);

   var celcius = Math.floor(temperature - 273.15);

   var kelvin = temperature


   var output = `${farenheit}° F = ${celcius}° C = ${kelvin}K ${comment}` + tempComment(temperature);

   return output;

  }else if (currentInput === 'celcius'){

    var farenheit = Math.floor((temperature * 9/5) + 32);

    var celcius = temperature

    var kelvin = Math.floor(temperature + 273.15);

    console.log(tempComment(23));

    var output = `${farenheit}° F = ${temperature}° C = ${kelvin}K` + tempComment(temperature);

  return output;

  }else if(currentInput === 'farenheit'){

    var farenheit = temperature;

    var celcius = Math.floor((temperature - 32) * (5 / 9));

    var kelvin = Math.floor((temperature - 32) * (5/9) + 273.15);

    var output = `${farenheit}° F = ${celcius}° C = ${kelvin}K ${comment}` + tempComment(temperature);

  return output;

  }else{
    console.log("please input temperature first followed by either kelvin, farenheit or celcius")
  }
};


var tempComment = function(celcius){
    if(celcius < 0){
        return " ooh it's cold out";

    }else if(celcius > 40){
        return " ooh it's hot out";

    }else if(celcius > 100){
        return " you're literally boiling";
    }else {
        return " ok temperature";
    }
}