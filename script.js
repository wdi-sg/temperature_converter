/* Part 1 Prompt the user for a starting temperature. This should be a numerical value that represents degrees in fahrenheit.
After receiving input it should show that same temperature in both Kelvin and Celsius.
*/

/*Uncomment for part 1
var Kelvin;
var Celsius;
console.log("hello script js");
//convert Kelvin from Fahrenheit


var inputHappened = function(currentInput){
    var output;
    if(isNaN(parseInt(currentInput))){
        output="Please replace with a number."
    }
    else{
        Celcius=calculateCelciusFromFahrenheit(currentInput);
        Kelvin=calculateKelvinFromFahrenheit(currentInput);
        output="Temperature is "+Celcius+" celcius and "+Kelvin+" Kelvin.";
    }
    return output;
}

var calculateKelvinFromFahrenheit = function(fahrenheit)
{
    console.log(fahrenheit);
    return ((fahrenheit-32)*5/9+273.15).toFixed(2);
}
//convert Celcius from Fahrenheit
var calculateCelciusFromFahrenheit = function(fahrenheit)
{
    return ((fahrenheit-32)*5/9).toFixed(2);
}
alert("Please put your temperature in fahrenheit");
*/

/*
Part 2
Your application should...

Prompt the user for a starting temperature. This should be a numerical value that represents degrees.
Prompt the user for a starting temperatureUnit. This will represent either Fahrenheit, Celsius, or Kelvin.
The application should print out the user-submitted temperature in the two remaining units.
So, if the user submitted 32 and fahrenheit, the program should output something like the below. Feel free to customize this however you'd like.
32° F = 0°C = 273.15K
Using Conditionals, have your code accept either fahrenheit, celsius or kelvin, and output the other two temp types.
*/

/*uncomment for part 2
var questionCount=0;
var temperatureUnit;
var temperature;
console.log("hello script js");
var Kelvin;
var Celsius;
var Fahrenheit;

var calculateKelvinFromFahrenheit = function(fahrenheit)
{
    console.log(fahrenheit);
    return ((fahrenheit-32)*5/9+273.15).toFixed(2);
}
//convert Celcius from Fahrenheit
var calculateCelciusFromFahrenheit = function(fahrenheit)
{
    return ((fahrenheit-32)*5/9).toFixed(2);
}

var calculateFahreneheitFromKelvin=function(kelvin){
    return ((kelvin-273.15)*(9/5)+32).toFixed(2);
}

var calculateCelciusFromKelvin=function(kelvin){
    return (kelvin-273.15).toFixed(2);
}

var calculateKelvinFromCelcius = function(celcius){
    return (celcius+273.15).toFixed(2);
}

var calculateFahrenheitFromCelcius = function(celcius){
    return (celcius*(9/5)+32).toFixed(2);
}


var inputHappened = function(currentInput){
var output="";
switch (questionCount){
    case 0:
    console.log("case 1");

    temperatureUnit=currentInput.toLowerCase();
if(temperatureUnit==="kelvin"||temperatureUnit==="celcius"||temperatureUnit==="fahrenheit")
{
    console.log("check");
    questionCount +=1;
    alert("Please key in the temperature")

}
else{

    questionCount=3;
    output="Please key in kelvin, celcius, fahrenheit.";
}


    break;
    case 1:
    if(isNaN(parseInt(currentInput))){
        output="Please replace with a number."
    }
    else{
        switch (temperatureUnit){
            case "fahrenheit":
        Celcius=calculateCelciusFromFahrenheit(currentInput);
        Kelvin=calculateKelvinFromFahrenheit(currentInput);
        output="Temperature is "+Celcius+" celcius and "+Kelvin+" Kelvin.";
        break;
        case "kelvin":
        Celcius=calculateCelciusFromKelvin(currentInput);
        Fahrenheit=calculateKelvinFromFahrenheit(currentInput);
        output="Temperature is "+Celcius+" celcius and "+Fahrenheit+" Fahrenheit.";
        break;
        case "celcius":
        Fahrenheit=calculateFahrenheitFromCelcius(currentInput);
        Kelvin=calculateKelvinFromCelcius(currentInput);
        output="Temperature is "+Celcius+" celcius and "+Kelvin+" Kelvin.";
        break;
        }
    }
    console.log("case 2");
    break;
    default:
    console.log("case 3");
    break;
}
return output;

};
alert("Please enter your temperature type in Kelvin, Fahrenheit or Celcius");
*/

//Part 3 and 4
/*
If the temperature is below 0 also print out a message like "ooh it's cold out".

If the temperature is above 40 also print out a message like "ooh it's hot out".

If the temperature is above 100 print out a message like "your literally boiling".

Part 4
Also prompt the user for their name. When you output the result, suggest the type of clothing they should wear.

 nothing
 swimsuit
 shorts and shirt
 sweater
 sweater + jacket
 heavy jacket
 heavy jacket and toe warmers
 dont go outside if you want to live
 */


console.log("hello script js");
//convert Kelvin from Fahrenheit
var questionCount=0;
var temperature;
var name;
var message;
var inputHappened = function(currentInput){
    var output;
    switch (questionCount){
        case 0:
        if(isNaN(parseInt(currentInput))){
            output="Please replace with a number."
            questionCount=3;
        }
        else{
            output= currentInput<0?"ooh it's cold out":
            currentInput>40&&currentInput<100?"ooh it's hot out":
            currentInput>100?"your literally boiling":
            "Temperature is just right";
            temperature=currentInput;
            questionCount+=1;
            alert("Please key in your name");

        }
        break;
        case 1:
        name=currentInput;

        message= temperature>40?"wear nothing":
        temperature>35?"wear swimsuit":
        temperature>25?"wear shorts and shirt":
        temperature>15?"wear sweater":
        temperature>10?"wear heavy jacket":
        temperature>0?"weat heavy jacket and toe warmers":
        "don't go outside if you want to live";
        output= name + " "+message;
        break;
        default:
        console.log("error");
    }
    return output;
}
alert("Please key in the temperature in celcius");