var inputHappened = function(currentInput){
var str = currentInput;
var lastChar = str[str.length -1];
var temperature = parseInt(str.substring(0,str.length-1), 10);
if (!isNaN (temperature))
{
    if (lastChar == "F" || lastChar == "f")
    {
     return output ="It is "+((temperature-32)*5/9+273.15).toFixed(2)+ "K and "+((temperature)*5/9).toFixed(2)+"°C";
    }

    else if (lastChar == "K" || lastChar == "k")
    {
     return output ="It is "+((temperature-273.15) * 9/5 + 32).toFixed(2)+ "F and "+(temperature - 273.15).toFixed(2)+"°C";
    }
    else if (lastChar == "C" || lastChar == "c")
    {
     return output ="It is "+(temperature * 9/5) + 32).toFixed(2)+ "F and "+temperature + 273.15.toFixed(2)+"K";
    }
    else {
      return output = "Please input a unit (F,C,K)"
    }

}
else {
  return output = "Please input a number"
}
}
var inputHappened = function(currentInput){
var str = currentInput;
var lastChar = str[str.length -1];
var temperature = parseInt(str.substring(0,str.length-1), 10);
if (!isNaN (temperature))
{
    if (lastChar == "F" || lastChar == "f")
    {
     return output ="It is "+((temperature-32)*5/9+273.15).toFixed(2)+ "K and "+((temperature)*5/9).toFixed(2)+"°C";
    }

    else if (lastChar == "K" || lastChar == "k")
    {
     return output ="It is "+((temperature-273.15) * 9/5 + 32).toFixed(2)+ "F and "+(temperature - 273.15).toFixed(2)+"°C";
    }
    else if (lastChar == "C" || lastChar == "c")
    {
     return output ="It is "+(temperature * 9/5) + 32).toFixed(2)+ "F and "+temperature + 273.15.toFixed(2)+"K";
    }
    else {
      return output = "Please input a unit (F,C,K)"
    }

}
else {
  return output = "Please input a number"
}
}
