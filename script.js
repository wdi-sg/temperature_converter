/*
Author:Hakim
Date:040919
Purpose:Temperature Converter
*/

/*
/////////Part 1//////////

//insert temperature in farenheight
var temperatureInFahr = prompt("Input temperature in Farenheit") ;

//output temperature in Celcius
var temperatureinCelc = (temperatureInFahr-32) / 1.8 ;
console.log("temperature in Celcius is = " + temperatureinCelc) ;

//output temperature in Kelvin
var temperatureinKelv =((temperatureInFahr-32)/1.8)+273.15 ;
console.log("temperature in Kelvin is = " + temperatureinKelv) ;

*/

/////////part 2 & part 3/////////

//define and initialise working storage
 var celcius = "celcius" ;
 var farenheit = "farenheit" ;
 var kelvin = "kelvin" ;

 //making array
 var temps = [] ;

//enter temperature
 var temperature = parseInt(prompt("Input temperature")) ;
 temps.push(temperature);

//enter
 var temperatureUnit = prompt("Enter celcius ,farenheit or kelvin") ;

//if farenheit
if(temperatureUnit === farenheit){
    temperatureinCelc =(temperature-32) / 1.8;
    temps.push(temperatureinCelc);
    temperatureinKelv = (temperature)-32/1.8+273.15;
    temps.push(temperatureinKelv);
    console.log ("farenheit is = " + temperature + " " + "celcius is = " + temperatureinCelc + " " + "kelvin is = " +  temperatureinKelv) ;
    }
else if(temperatureUnit === celcius){
    temperatureInFahr = (temperature*9/5) + 32;
    temps.push(temperatureInFahr);
    temperatureinKelv = (temperature)+273.15;
    temps.push(temperatureinKelv);
    console.log("celcius is = " + temperature + " " + "farenheit is = " + temperatureInFahr + " " + "kelvin is = " + temperatureinKelv) ;
    }
else if(temperatureUnit === kelvin){
    temperatureinCelc = temperature-273.15
    temps.push(temperatureinCelc);
    temperatureInFahr = ((temperature)*9/5) - 459.67
    temps.push(temperatureInFahr)
    console.log("kelvin is = " + temperature + " " + " celcius is = " + temperatureinCelc + " " + "farenheit is " + temperatureInFahr) ;
    } ;








