var generateMessage = function(temp,name) {
    if (temp < 0) {
        return "<p>Brrrr "+name+", it's cold out!</p><p>Recommended wear: heavy jacket and toe warmers";
    }
    else if (temp > 40 && temp < 100) {
        return "<p>Yo "+name+", it's hot out!</p><p>Recommended wear: shorts and shirt</p>";
    }
    else if (temp >= 100){
        return "<p>Hey "+name+", you're literally boiling!</p><p>Recommended wear: dont go outside if you want to live</p>";
    }
    else {
        return "<p>Hello "+name+", it's fine out there!</p><p>Recommended wear: long pants and shirt";
    }
}
var inputHappened = function(name,temp,unit){
    var parseTemp = parseInt(temp);
    if (isNaN(parseTemp)) {
        display("Please use a number for temperature");
    }
    else {
        if (unit.toLowerCase() === "fahrenheit") {
            var fahrenheitToCelsius = (parseTemp-32)/1.8;
            var fahrenheitToKelvin = ((parseTemp-32)/1.8)+273.15;
            var tempMessage = generateMessage(fahrenheitToCelsius,name);
            display(parseTemp+"&deg; F = "+fahrenheitToCelsius.toFixed(2)+"&deg; C = "+fahrenheitToKelvin.toFixed(2)+"&deg; K<br>"+tempMessage);
        }
        else if (unit.toLowerCase() === "celsius") {
            var celsiusToFahrenheit = (parseTemp*1.8)+32;
            var celsiusToKelvin = parseTemp+273.15;
            var tempMessage = generateMessage(parseTemp,name);
            display(parseTemp+"&deg; C = "+celsiusToFahrenheit.toFixed(2)+"&deg; F = "+celsiusToKelvin.toFixed(2)+"&deg; K<br>"+tempMessage);
        }
        else if (unit.toLowerCase() === "kelvin") {
            var kelvinToFahrenheit = ((parseTemp-273.15)*1.8)+32;
            var kelvinToCelsius = parseTemp-273.15;
            var tempMessage = generateMessage(kelvinToCelsius,name);
            display(parseTemp+"&deg; K = "+kelvinToFahrenheit.toFixed(2)+"&deg; F = "+kelvinToCelsius.toFixed(2)+"&deg; C<br>"+tempMessage);
        }
        else {
            display("Please use Fahrenheit, Celsius or Kelvin for temperature unit.");
        }
    }
};